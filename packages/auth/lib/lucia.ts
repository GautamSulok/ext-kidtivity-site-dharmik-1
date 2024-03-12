import { prisma } from "@lucia-auth/adapter-prisma";
import { apple, facebook, github, google } from "@lucia-auth/oauth/providers";
import { db } from "database";
import { User, lucia } from "lucia";
import { nextjs } from "lucia/middleware";
import { getBaseUrl } from "utils";

export const auth = lucia({
  adapter: prisma(db, {
    user: "user",
    session: "userSession",
    key: "userKey",
  }),
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
  middleware: nextjs(),
  sessionCookie: {
    expires: false,
  },
  getUserAttributes: (data) => {
    return {
      id: data.id,
      email: data.email,
      email_verified: data.email_verified,
      name: data.name ?? data.email,
      role: data.role,
      avatar_url: data.avatar_url,
    };
  },
});

export const githubAuth = github(auth, {
  clientId: process.env.GITHUB_CLIENT_ID as string,
  clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
  scope: ["user:email"],
});

export const googleAuth = google(auth, {
  redirectUri: new URL("/api/oauth/google/callback", getBaseUrl()).toString(),
  clientId: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  scope: ["email"],
});

export const facebookAuth = facebook(auth, {
  redirectUri: new URL("/api/oauth/facebook/callback", getBaseUrl()).toString(),
  clientId: process.env.FACEBOOK_CLIENT_ID as string,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
  scope: ["email"],
});

// const certificatePath = path.join(
//   process.cwd(),
//   process.env.APPLE_CERT_PATH ?? "",
// );

// const certificate = fs.readFileSync(certificatePath, "utf-8");

export const appleAuth = apple(auth, {
  teamId: process.env.APPLE_TEAM_ID ?? "",
  keyId: process.env.APPLE_KEY_ID ?? "",
  certificate: process.env.APPLE_CERTIFICATE ?? "",
  redirectUri: process.env.APPLE_REDIRECT_URI ?? "",
  clientId: process.env.APPLE_CLIENT_ID ?? "",
});

export type Auth = typeof auth;
export type SessionUser = User;
export { OAuthRequestError } from "@lucia-auth/oauth";
export { LuciaError, type Session } from "lucia";
