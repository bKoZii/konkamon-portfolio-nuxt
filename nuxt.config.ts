// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  ssr: true,

  routeRules: {
    '/WhatIsInMyBag': { ssr: false },
    '/Resume': { ssr: false },
    '/Bookmarks': { ssr: false },
    '/Projects': { ssr: false },
  },

  modules: [
    'nuxt-typed-router',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/sanity',
    'dayjs-nuxt',
    '@stefanobartoletti/nuxt-social-share',
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      titleTemplate: '%s - Konkamon Sion',
      htmlAttrs: {
        lang: 'th'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' }]
    }
  },
  googleFonts: {
    families: {
      'Space Grotesk': {
        wght: [400, 500, 600, 700, 800, 900]
      },
      'Noto Sans Thai Looped': {
        wght: [400, 600, 700, 800]
      },
      'Ubuntu Mono': {
        wght: [400, 600, 700, 800]
      }
    }
  },
  tailwindcss: {
    cssPath: '~/assets/main.css',
    configPath: 'tailwind.config.ts'
  },
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons'
      }
    ]
  },
  compatibilityDate: '2024-07-04',
  sanity: {
    projectId: process.env.SANITY_PROJECTID,
    minimal: true,
    apiVersion: '1'
  },
  dayjs: {
    locales: ['th'],
    defaultLocale: 'th'
  },
  socialShare: {
    baseUrl: 'https://konkamon.vercel.app/'
  },
  nitro: {
    compressPublicAssets: true
  }
})