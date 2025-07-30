/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
/* eslint-disable node/no-process-env */
import type { ZodObject, ZodRawShape } from "zod";

import { getLogger } from "@logtape/logtape";
import { ZodError } from "zod";

const logger = getLogger(["Tavel Log", "Env"]);

export default function tryParseEnv<T extends ZodRawShape>(
  EnvSchema: ZodObject<T>,
  buildEnv: Record<string, string | undefined> = process.env,
) {
  try {
    EnvSchema.parse(buildEnv);
  }
  catch (error) {
    if (error instanceof ZodError) {
      let message = "Missing required values in .env:\n";
      error.issues.forEach((issue) => {
        message += `${String(issue.path[0])}\n`;
      });
      const e = new Error(message);
      e.stack = "";
      throw e;
    }
    else {
      // console.error(error);
      logger.error`${error}!`;
    }
  }
}
