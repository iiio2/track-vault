// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@hebilicious/authjs-nuxt'],
  alias: {
    cookie: 'cookie',
  },
  authJs: {
    baseUrl: process.env.NUXTAUTH_URL,
  },
})
