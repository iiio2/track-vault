// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
})
