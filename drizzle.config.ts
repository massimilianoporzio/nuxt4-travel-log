/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

import env from "./server/env";

export default defineConfig({
  out: "./server/db/migrations",
  schema: "./server/db/schema/index.ts",
  dialect: "turso",
  casing: "snake_case",
  dbCredentials: {
    url: env.NODE_ENV === "development" ? "./local.db" : env.TURSO_DATABASE_URL,
    authToken: env.NODE_ENV === "development" ? undefined : env.TURSO_AUTH_TOKEN,
  },
});
