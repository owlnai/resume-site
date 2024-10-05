// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxtjs/seo",
  ],
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
  devtools: {
    enabled: true
  },
  compatibilityDate: "2024-10-05",
});