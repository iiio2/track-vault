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
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
  },
  alias: {
    cookie: 'cookie',
  },
  authJs: {
    baseUrl: process.env.NUXTAUTH_URL,
    guestRedirectTo: '/api/auth/signin',
  },
  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_HOST,
        username: process.env.REDIS_USERNAME,
        password: process.env.REDIS_PASSWORD,
      },
    },
  },
  routeRules: {
    '/issues': {
      swr: true,
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
})
