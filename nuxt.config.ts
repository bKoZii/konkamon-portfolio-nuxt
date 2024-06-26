// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  ssr: true,
  modules: ['nuxt-typed-router', '@nuxtjs/google-fonts', '@nuxt/image', '@nuxt/ui'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'th'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  googleFonts: {
    families: {
      Outfit: {
        wght: [400, 500, 600, 700, 800, 900]
      },
      'Noto Sans Thai Looped': {
        wght: [400, 500, 600, 700, 800, 900]
      },
      'Rubik Mono One': true
    }
  },
  tailwindcss: {
    configPath: 'tailwind.config.ts'
  },
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons'
      }
    ]
  }
})
