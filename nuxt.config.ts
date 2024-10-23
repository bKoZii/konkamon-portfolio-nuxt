// https://nuxt.com/docs/api/configuration/nuxt-config
import wasm from '@rollup/plugin-wasm'

export default defineNuxtConfig({

  modules: [
    'nuxt-typed-router',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/ui',
    'dayjs-nuxt',
    '@stefanobartoletti/nuxt-social-share',
    '@nuxtjs/strapi',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/eslint',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/mdc',
    '@vueuse/nuxt',
    'nuxt-shiki',
    '@vueuse/motion/nuxt',
    '@nuxtjs/i18n',
  ],
  ssr: true,
  devtools: {
    enabled: true,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      titleTemplate: '%s - Konkamon Sion',
      meta: [
        { name: 'author', content: 'Konkamon Sion' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'charset', content: 'utf-8' },
        { name: 'theme-color', content: '#379777' },
      ],
      htmlAttrs: {
        lang: 'th',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' }],
    },
  },
  site: {
    url: 'https://www.konkamon.live',
    name: 'เว็บไซต์ Portfolio & Blogs ของนาย กรกมล ศรีอ่อน - สร้างด้วย Nuxt 3 + TailwindCSS.',
  },
  mdc: {
    highlight: false,
    headings: {
      anchorLinks: false,
    },
    components: {
      prose: false,
      map: {
        pre: 'ProsePre',
        code: 'ProseCode',
      },
    },
  },
  runtimeConfig: {
    strapiUrl: process.env.STRAPI_URL,
    public: {
      strapiUrl: process.env.STRAPI_URL,
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/blog': { isr: true },
    '/blog/**': { isr: 900 },
    '/api/mdc': { ssr: false },
    '/sitemap.xml': { prerender: true },
  },
  sourcemap: {
    server: false,
    client: true,
  },
  experimental: {
    externalVue: false,
  },
  compatibilityDate: '2024-07-04',
  nitro: {
    compressPublicAssets: true,
    storage: {
      data: {
        driver: 'vercelKV',
      },
    },
  },
  vite: {
    plugins: [wasm()],
  },
  dayjs: {
    locales: ['th', 'en'],
    defaultLocale: 'th',
    plugins: ['timezone', 'localeData'],
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        commaDangle: 'always-multiline',
        quotes: 'single',
        jsx: false,
        semi: false,
        blockSpacing: true,
        braceStyle: '1tbs',
        arrowParens: true,
      },
    },
  },
  googleFonts: {
    families: {
      'Albert Sans': {
        wght: [400, 500, 600, 700, 800, 900],
      },
      'Noto Sans Thai Looped': {
        wght: [400, 600, 700, 800],
      },
      'Fira Code': {
        wght: [400, 600, 700, 800],
      },
    },
  },
  i18n: {
    baseUrl: 'https://www.konkamon.live',
    strategy: 'no_prefix',
    defaultLocale: 'th',
    lazy: true,
    locales: [
      {
        code: 'th',
        language: 'th-TH',
        name: 'ภาษาไทย',
        file: 'th.json',
        isCatchallLocale: true,
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json',
      },
    ],
    langDir: 'lang/',
  },
  icon: {
    provider: 'server',
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons',
      },
    ],
    serverBundle: {
      remote: 'github-raw',
      collections: ['ph', 'simple-icons', 'ic', 'mdi', 'circle-flags'],
    },
    clientBundle: {
      includeCustomCollections: true,
      icons: ['ph:monitor-duotone', 'ph:sun-duotone', 'ph:moon-duotone', 'circle-flags:us', 'circle-flags:th'],
      scan: true,
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  robots: {
    sitemap: 'https://www.konkamon.live/sitemap.xml',
    allow: ['/', '/blog/'],
    disallow: ['/api'],
  },
  shiki: {
    bundledLangs: ['javascript', 'typescript', 'vue', 'shell', 'php'],
    bundledThemes: ['houston'],
    defaultTheme: 'houston',
  },
  sitemap: {
    sources: ['/api/sitemap/urls'],
    excludeAppSources: ['nuxt:route-rules'],
  },
  socialShare: {
    baseUrl: 'https://www.konkamon.live/',
  },
  tailwindcss: {
    cssPath: '~/assets/main.css',
    configPath: 'tailwind.config.ts',
  },
})
