/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import db from "./db/index"; // your drizzle instance
import env from "./env";

export const auth = betterAuth({
  advanced: {
    database: {
      generateId: false,
    },
  },
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "mysql", "sqlite"
  }),
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID as string,
      clientSecret: env.GITHUB_CLIENT_SECRET as string,
    },
  },
});
