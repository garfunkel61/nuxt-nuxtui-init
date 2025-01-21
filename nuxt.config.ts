export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  compatibilityDate: "2025-01-20",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions: {
      login: "/auth/login",
      callback: "/confirm",
      exclude: ["/*"],
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
  },
  ui: {
    safelistColors: ["primary", "secondary", "danger", "warning", "info"],
  },
});
