/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import { auth } from "../../auth"; // import your auth config

export default defineEventHandler((event) => {
  return auth.handler(toWebRequest(event));
});
