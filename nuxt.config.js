const axios = require('axios');

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

const localhostProxy = {
  '/api/': { target: 'http://localhost:3451' },
  '/bg/': { target: 'http://localhost:3451' },
};

const productionProxy = {
  '/api/': { target: 'http://www.51linwei.top:3451' },
  '/bg/': { target: 'http://www.51linwei.top:3451' },
};

const proxy = isProduction() ? productionProxy : localhostProxy;

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Level.Z',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    '~/assets/css/base.css'
  ],
  plugins: [
    { src: '@/plugins/element-ui' },
    { src: '@/plugins/editor', ssr: false },
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy,
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
