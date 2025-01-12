// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  experimental: {
    componentIslands: true,
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@hebilicious/authjs-nuxt',
    '@nuxtjs/i18n',
  ],

  i18n: {
    vueI18n: './config/i18n.config.ts',
  },

  runtimeConfig: {
    google: {
      clientId: '',
      clientSecret: '',
    },
    redis: {
      port: '',
      host: '',
      username: '',
      password: '',
    },
    authSecret: '',
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
  },

  alias: {
    cookie: 'cookie',
  },

  authJs: {
    baseUrl: process.env.NUXT_AUTH_URL,
    guestRedirectTo: '/api/auth/signin',
  },

  routeRules: {
    '/': {
      prerender: true,
    },
    '/issues/new': {
      prerender: true,
    },
    'issues/edit/**': {
      prerender: true,
    },
    '/api/**': {
      cors: true,
    },
  },

  compatibilityDate: '2024-10-26',
})
