export default {
  ssr: false,

  head: {
    titleTemplate: '%s - Inspect Pro',
    title: 'Index',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/css/main.css'],

  router: {
    middleware: ['auth'],
  },

  plugins: ['~/plugins/crypto.js'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/i18n'],

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en/index.js',
      },
      {
        code: 'th',
        name: 'ภาษาไทย',
        iso: 'th-TH',
        file: 'th/index.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  axios: {
    baseURL: process.env.FEATURE_SERVICES_URL,
  },

  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
  },

  build: {},
}
