// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/i18n'],
  plugins: ['~/plugins/splide.js'],
  tailwindcss: {
    cssPath: '~/assets/style/main.css',
    exposeConfig: false,
    exposeLevel: 2,
    config: {
      theme: {
        container: {
          padding: '1rem',
          center: true,
        }
      }
    },
    injectPosition: 'first',
    viewer: true,
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})
