/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
// @ts-check
import antfu from "@antfu/eslint-config";

import withNuxt from "./.nuxt/eslint.config.mjs";

// TODO add tailwindcss plugin (with support for tailwindcss v4 ) when available

export default withNuxt(
  antfu(
    {
      type: "app",
      vue: true,
      typescript: true,
      formatters: true,
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
      ignores: [".pnpm-store/**", "**/migrations/*", ".vscode/**"],
    },
    {

      rules: {
        "ts/no-redeclare": "off",
        "ts/consistent-type-definitions": ["error", "type"],
        "no-console": ["warn"],
        "antfu/no-top-level-await": ["off"],
        "node/prefer-global/process": ["off"],
        "node/no-process-env": ["error"],
        "perfectionist/sort-imports": [
          "error",
          {
            tsconfigRootDir: ".",
          },
        ],
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
            ignore: ["README.md"],
          },
        ],
      },
    },
  ),
);
// Your custom configs here
