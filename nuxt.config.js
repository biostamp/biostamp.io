export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Biostamp',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // define the fonts to pull from google fonts
  googleFonts: {
    families: {
      'Montserrat': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      },
      'Inter': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      },
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/lottie-player.js',
      mode: 'client'
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // google fonts
    '@nuxtjs/google-fonts',
    // font awesome
    '@nuxtjs/fontawesome',
    // google analytics
    '@nuxtjs/google-analytics'
  ],

  // google analytics settings
  googleAnalytics: {
    id: 'UA-209930606-1',
    dev: process.env.NODE_ENV !== 'production',
  },

  // fontawesome config
  fontawesome: {
    component: 'fa',
    prefix: '',
    icons: {
      brands: [
        // 'faFacebookF',
        // 'faInstagram',
        'faTwitter',
        // 'faLinkedinIn',
        // 'faYoutube',
        'faGithub',
        'faDiscord'
        // 'faTiktok',
        // 'faJs',
        // 'faVuejs',
        // 'faReact',
        // 'faAndroid',
        // 'faSwift',
        // 'faPython',
        // 'faNode',
        // 'faJava',
      ],
      solid: [
        // 'faSun',
        // 'faMoon',
        // 'faLaptop',
        // 'faFingerprint',
        // 'faCode',
        // 'faIdBadge',
        // 'faChartLine',
        // 'faChartPie',
        // 'faHandshake',
        // 'faUserShield',
        // 'faLock',
      ],
    },
  },

  // extend tailwindcss
  tailwindcss: {
    // enable JIT
    jit: true,

    // expose tailwind.config.js
    exposeConfig: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
