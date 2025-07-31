/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import { z } from "zod";

import tryParseEnv from "./try-parse.env";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  TURSO_DATABASE_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;
tryParseEnv(EnvSchema); // output error if env is not valid
// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);
