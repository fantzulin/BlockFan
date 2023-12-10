// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/letter-f.png' },
      ],
      title: "Chris Fan"
    },
  },
  css: [
    'assets/main.css',
  ],
})
