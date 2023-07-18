// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { "http-equiv": "x-ua-compatible", content: "ie=edge" },
        { name: "description", content: "The worlds premier, decentralized, backward compatible, open source, podcast ecosystem" },
        { name: "keywords", content: "Podcast, Decentralized, Blochchain, Ethereum" },
        { name: "author", content: "teevio.eth" },
        { name: "og:description", content: "The worlds premier, decentralized, backward compatible, open source, podcast ecosystem"},
        { property: "og:image", content: "https://amplicu.be/amplicube-facebook.png" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:width", content: "1200" },
        { property: "og:title", content: "Amplicube" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://amplicu.be" },
        { property: "twitter:creator", content: "teevio" },
        { property: "twitter:image", content: "https://amplicu.be/amplicube-twitter.png" },
        { property: "twitter:site:id", content: "amplicube" }
      ],
      link: [{ rel: 'stylesheet', href: '/style.css' }],
      script: [{ src: "https://cdn.usefathom.com/script.js", "data-site": "BGQVHRZN", defer: "defer" }],
      title: 'Amplicube'
    }
  },
  devtools: { enabled: true }
})
