import { defineNuxtConfig } from 'nuxt'
const path = require('path');

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: [
    "~/assets/css/tailwind.css",
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@vuepic/vue-datepicker/dist/main.css',
             path.resolve(__dirname, 'node_modules/vue-multiselect/dist/vue-multiselect.css'),

  ],
})