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

  plugins: [
    { src: '~/plugins/socket.io.js', ssr: false },
    '~/plugins/crypto.js',
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],

  axios: {
    baseURL: process.env.FEATURE_SERVICES_URL,
  },

  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
  },

  build: {},
}
