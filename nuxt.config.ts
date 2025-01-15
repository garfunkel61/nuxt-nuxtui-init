export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/ui"],
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});