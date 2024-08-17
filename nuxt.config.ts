// https://nuxt.com/docs/api/configuration/nuxt-config
import remarkGfm from 'remark-gfm'

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  ssr: true,

  routeRules: {
    '/': { prerender: true }
  },

  modules: [
    'nuxt-typed-router',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/ui',
    'dayjs-nuxt',
    '@stefanobartoletti/nuxt-social-share',
    '@nuxtjs/strapi',
    '@nuxtjs/mdc',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
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
  // icon: {
  //   customCollections: [
  //     {
  //       prefix: 'my-icon',
  //       dir: './assets/icons'
  //     }
  //   ]
  // },
  compatibilityDate: '2024-07-04',
  dayjs: {
    locales: ['th'],
    defaultLocale: 'th',
    plugins: ['timezone']
  },
  socialShare: {
    baseUrl: 'https://www.konkamon.live/'
  },
  nitro: {
    compressPublicAssets: true
  },
  mdc: {
    highlight: {
      langs: ['shell', 'sh', 'typescript', 'python', 'java', 'php', 'html', 'css', 'javascript', 'json', 'sql'],
      theme: 'one-dark-pro',
      wrapperStyle: true
    },
    headings: {
      anchorLinks: false
    }
  },
  strapi: {
    url: process.env.STRAPI_URL
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  experimental: {
    externalVue: false
  }
})
