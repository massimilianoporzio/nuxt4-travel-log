/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */

// Per SQLite con Bun

import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { logger } from "@/utils/logger";

import env from "../env";
import * as schema from "./schema";

// eslint-disable-next-line import/no-mutable-exports
let db: ReturnType<typeof drizzle>;

if (env.NODE_ENV === "production") {
  // Use Turso/libSQL
  db = drizzle({
    connection: {
      url: env.TURSO_DATABASE_URL!,
      authToken: env.TURSO_AUTH_TOKEN,
    },
    casing: "snake_case",
    schema,
  });
  logger.info("Connected to Turso/libSQL in production.");
}
else {
  // Use local SQLite
  const client = createClient({ url: "file:local.db" });
  db = drizzle(client);

  logger.log ("Connected to local SQLite (development) with sqlite3.");
}

export default db;
