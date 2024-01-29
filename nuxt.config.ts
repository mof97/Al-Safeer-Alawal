// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'السفير الاول',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'title', content: 'شركة السفير الاول' },
        { name: 'og:title', content: 'شركة السفير الاول' },
        { name: 'og:type', content: 'website' },
        { name: 'og:image', content: '/fav.jpg' },
        { name: 'image', content: '/fav.jpg' },
        { name: 'og:image:width', content: '1000' },
        { name: 'og:image:height', content: '1000' },
        { name: 'location', content: 'Rubaie St, Baghdad, Baghdad Governorate' },
        { name: 'og:site_name', content: 'شركة السفير الاول' },
        { hid: 'description', name: 'description', content: 'مرحبًا بك في وكالة السفير الأول، وجهتك الرئيسية لحلول التداول الإلكتروني الرائدة وخدمات وكالة التداول الشاملة. في وكالة السفير الأول، نلتزم بتحويل طريقة تفاعلك مع عالم التداول، وتوفير خدمات لا مثيل لها وتقديم تقنيات متقدمة.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index' },
        { name: 'theme-color', content: '#1d6495' },
        { name: 'keywords', content: "Al Safeer Al Awal, Website, Services, Products, Commerce, Business, Technology, Information, E-commerce, Design" },
        { name: 'keywords', lang: 'ar', content: "متجر الهواتف, هواتف محمولة, محل هواتف ذكية, هواتف خلوية, أندرويد, آي أو إس, إكسسوارات, أجهزة محمولة, أحدث الهواتف, متجر عبر الإنترنت" },
      ],
      link: [
        { rel: 'icon', type: 'image/jpg', href: '/fav.jpg' },
      ]
    }
  },
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
