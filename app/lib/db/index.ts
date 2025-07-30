/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */

// Per SQLite con Bun
import { Database } from "bun:sqlite";
import { drizzle as drizzleBunSQLite } from "drizzle-orm/bun-sqlite";
import { drizzle } from "drizzle-orm/libsql";

import { logger } from "../../utils/logger";
import env from "../env";
import * as schema from "./schema";

// eslint-disable-next-line import/no-mutable-exports
let db;

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
  logger.info("Connected to Turso/libSQL in production with Bun.");
}
else {
  // Use local SQLite
  const sqlite = new Database("./local.db");
  db = drizzleBunSQLite(sqlite, { schema });
  logger.info ("Connected to local SQLite (development) with Bun.");
}

export default db;
