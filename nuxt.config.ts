// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  eslint: {
    config: {
      standalone: false, // <---
    },
  },
  // for tailwind and daisyUI
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],

});
