/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import { betterAuth, logger } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import db from "./db/index"; // your drizzle instance
import env from "./env";

export const auth = betterAuth({
  emailAndPassword: { enabled: true, sendResetPassword: async ({ user, url, token }) => {
    // Send reset password email
    logger.info(`Send reset password email to ${user.email} with token ${token} at ${url}`);
  } },
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,

    },
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  advanced: {
    database: {
      generateId: false,
    },
  },
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "mysql", "sqlite"
  }),

});
