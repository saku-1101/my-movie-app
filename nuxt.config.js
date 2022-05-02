import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'black'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - my-movie-app',
    title: 'my-movie-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/Merienda_One.css',
    '~/assets/fonts/Marcellus_SC.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  // googleFonts: {
  //   download: true,
  //   base64: true,
  //   overwriting: false,
  //   families: {
  //     Roboto: true,
  //     'Josefin+Sans': true,
  //     Lato: [100, 300],
  //     Raleway: {
  //       wght: [100, 400],
  //       ital: [100]
  //     },
  //   },
  //   display: 'swap' 
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loading: '~/components/LoadingBar.vue',
  // loading: {
  //   continuous: true,
  //   color: 'blue',
  //   height: '5px'
  // }
  server: {
    host: '0.0.0.0', // デフォルト: localhost,
    port: 3000 // デフォルト: 3000
    // デフォルトでは、Nuxt の開発サーバーのホストは localhost（ホストマシン内からのみアクセス可能）です。アプリケーションを他のデバイスで確認するにはホストを修正する必要があります。
  },
}
