export default {
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

  components: true,

  css: ['@/assets/css/index.css'],

  buildModules: [
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
        component: 'Fa',

        icons: {
          regular: ['faMoon', 'faLightbulb'],
        },
      },
    ],
    [
      '@nuxtjs/color-mode',
      {
        prefference: 'system',
        fallback: 'light',
      },
    ],
  ],

  target: 'static',
  ssr: false,
}
