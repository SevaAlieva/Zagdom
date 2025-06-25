export default defineNuxtConfig({
  modules: ['nuxt-svgo'],
  app: {
    head: {
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&family=Montserrat:wght@400&display=swap' 
        }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})