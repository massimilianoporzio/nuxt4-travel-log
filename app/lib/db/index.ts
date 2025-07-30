/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */

import { getLogger } from "@logtape/logtape";
// Per SQLite con Bun
import { Database } from "bun:sqlite";
import { drizzle as drizzleBunSQLite } from "drizzle-orm/bun-sqlite";
import { drizzle } from "drizzle-orm/libsql";

import env from "../env";
import * as schema from "./schema";

const logger = getLogger(["Teavel Log", "Db"]);

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
  logger.warn`Connected to Turso (production).`;
}
else {
  // Use local SQLite
  const sqlite = new Database("./local.db");
  db = drizzleBunSQLite(sqlite, { schema });

  logger.warn`Connected to local SQLite (development) with Bun.SQLite.`;
}

export default db;
