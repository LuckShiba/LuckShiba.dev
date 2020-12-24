export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'LuckShiba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Just a newbie developer',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'LuckShiba',
      },
      {
        property: 'og:title',
        content: 'LuckShiba',
      },
      {
        property: 'og:description',
        content: 'Just a newbie developer',
      },
      {
        property: 'og:image',
        content: '/shiba.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Fira+Code': [300, 500],
        },
      },
    ],
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',

        icons: {
          solid: ['faArrowDown'],
        },
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  target: 'static',
  ssr: false,
}
