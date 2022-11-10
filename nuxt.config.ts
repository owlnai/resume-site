// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@unocss/nuxt",
    "@nuxt/image-edge",
  ],
  experimental: { noScripts: true },
  css: ["@fontsource/inter/variable.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s - Unai Mengual",
      meta: [
        { name: "description", content: "Resumé" },
      ],
      htmlAttrs: {
        lang: "en-US",
      },
    },
  },
});
