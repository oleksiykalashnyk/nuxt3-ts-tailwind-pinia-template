// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Demo App',
      meta: [{ name: 'description', content: 'Demo site' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: ['@pinia/nuxt'],
  imports: {
    dirs: ['stores'],
  },
})
