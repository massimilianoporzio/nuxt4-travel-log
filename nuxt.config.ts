/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

// import envSchema so if errors app doesn't start
import "./server/env";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode"],
  eslint: {
    config: {
      standalone: false, // <---
    },
  },
  // for tailwind and daisyUI
  vite: {
    server: {
      hmr: {
        overlay: true,
        port: 24678,
      },
    },
    plugins: [tailwindcss(), {
      name: "test-nuxt4-hmr-fix",
      configureServer(server) {
        // JA ページファイル変更時に強制的にフルリロードを実行
        // EN Force full reload on page file changes
        const originalInvalidateModule = server.moduleGraph.invalidateModule;
        server.moduleGraph.invalidateModule = function (mod, invalidatedModules = new Set(), timestamp = Date.now()) {
          if (mod?.file?.includes("pages/")) {
            console.warn("🔥 Force reload for page file:", mod.file);
            server.ws.send({
              type: "full-reload",
            });
            return;
          }
          return originalInvalidateModule.call(this, mod, invalidatedModules, timestamp);
        };
      },
      handleHotUpdate(ctx) {
        // JA ページファイルの場合は強制的にフルリロードを送信
        // EN Force full reload on page file changes
        if (ctx.file.includes("pages/")) {
          console.warn("🔥 Page file changed, forcing full reload:", ctx.file);
          ctx.server.ws.send({
            type: "full-reload",
          });
          return [];
        }
        return ctx.modules;
      },
    }],

  },
  // colorMode
  colorMode: {
    dataValue: "theme",
  },
  css: ["~/assets/app.css"],

});
