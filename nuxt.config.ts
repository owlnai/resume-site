export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    ],
  devtools: {
    enabled: true
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-10-05",
});