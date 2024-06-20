// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "nuxt-typed-router",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/eslint",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head:{
      htmlAttrs:{
        lang: 'th'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
  },
  googleFonts: {
    families: {
      Outfit: {
        wght: [400, 500, 600, 700, 800, 900]
      },
      'Noto Sans Thai Looped': {
        wght: [400, 500, 600, 700, 800, 900],
      },
      'Rubik Mono One': true
    }
  },
  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons'
      },
    ],
  },
})