import { auth, facebookAuth, OAuthRequestError } from "auth";
import { db } from "database";
import { cookies } from "next/headers";

import type { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const authRequest = auth.handleRequest({ request, cookies });
  const session = await authRequest.validate();
  if (session) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  }
  const cookieStore = cookies();
  const storedState = cookieStore.get("facebook_oauth_state")?.value;
  const url = new URL(request.url);
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");

  if (!storedState || !state || storedState !== state || !code)
    return new Response(null, {
      status: 400,
    });

  try {
    const { getExistingUser, facebookUser, createUser, createKey, facebookTokens } =
      await facebookAuth.validateCallback(code);

    const getUserPrimaryEmail = async () => {
      if (facebookUser.email) return facebookUser.email;

      type EmailsResData =
        | {
          email: string | null | undefined;
          primary: boolean | undefined;
          verified: boolean | undefined;
          visibility: string | null;
        }[]
        | null
        | undefined;

      const emailsRes = await fetch("https://api.facebook.com/user/emails", {
        headers: {
          Authorization: `token ${facebookTokens.accessToken}`,
        },
      });
      const emailsResData = (await emailsRes.json()) as EmailsResData;

      const primaryEmail = emailsResData?.find((email) => email.primary)?.email;
      return primaryEmail ?? null;
    };

    const getUser = async () => {
      let existingUser;
      await getExistingUser()
        .then(res => {
          existingUser = res;
        })
        .catch(err => {
        });
      if (existingUser) return existingUser;

      const facebookUserEmail = await getUserPrimaryEmail();
      // check if user exists with same email
      if (facebookUserEmail) {
        const existingDatabaseUserWithEmail = await db.user.findFirst({
          where: {
            email: facebookUserEmail,
          },
        });

        if (existingDatabaseUserWithEmail) {
          await createKey(existingDatabaseUserWithEmail.id);
          return auth.transformDatabaseUser(existingDatabaseUserWithEmail);
        }
      }

      const user = await createUser({
        userId: facebookUser.id,
        attributes: {
          email: facebookUser.email!,
          name: facebookUser.name,
          avatar_url: facebookUser.picture.data.url || null,
          email_verified: facebookUserEmail !== null,
          role: "USER",
        },
      });
      return user;
    };

    const user = await getUser();
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });
    authRequest.setSession(session);

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/app",
      },
    });
  } catch (e) {
    console.error(e);

    if (e instanceof OAuthRequestError) {
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
};
