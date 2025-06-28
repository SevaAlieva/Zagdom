export default defineNuxtConfig({
  modules: ['nuxt-svgo'],
  
  css: [
    '~/assets/css/main.css'
  ],
  
  app: {
    head: {
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Montserrat:wght@100..900&display=swap' 
        }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:math";
            @use "~/assets/scss/_mixins" as *;
          `
        }
      }
    }
  }
})