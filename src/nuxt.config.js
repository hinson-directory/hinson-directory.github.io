export default {
  target: 'static',
  head: {
    title: 'hinson-directory.github.io',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
	  '~/assets/css/bootstrap.min.css',
  ],
  components: true,
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {},
  generate: {
	  dir: '../docs',
  },
}
