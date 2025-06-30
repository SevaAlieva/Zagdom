export default defineNuxtConfig({
  modules: [
    'nuxt-swiper',
    ['@nuxtjs/google-fonts', {
      families: {
        'Open Sans': [400, 700],
        'Montserrat': [400, 700]
      }
    }]
  ],
  css: [
    '~/assets/css/main.css',
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination'
  ],
  vite: {
    css: {
      
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_mixins.scss" as *;'
        }
      }
    }
  }
})