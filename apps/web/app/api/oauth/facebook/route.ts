import { auth, facebookAuth } from "auth";
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
  const [url, state] = await facebookAuth.getAuthorizationUrl();
  const cookieStore = cookies();
  cookieStore.set("facebook_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    path: "/",
    maxAge: 60 * 60,
  });
  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
    },
  });
};
