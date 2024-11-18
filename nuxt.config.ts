// nuxt.config.ts
export default defineNuxtConfig({
content: {
    documentDriven: true,
    // https://content.nuxtjs.org/api/configuration
    experimental: {
      clientDB: true,
    },
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts", "nuxt-icon", "@nuxt/content","nuxt-disqus"],
  disqus: {
    shortname: "https-reformedtech-ca-3",
  },
  baseURL: 'https://reformedtech.ca',
  plugins: [
    { src: '~/plugins/aos.client.js', mode: 'client' },
    { src: '~/plugins/gtm.client.js', mode: 'client' }
  ],
  googleFonts: {
    families: {
        'Jost': [400, 500, 600, 700],
        'Poppins': [400, 500, 600, 700]
    },
  },
  image: {
     // dir: 'assets/img',
     provider:"none",
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    domains: ['https://reformedtech.ca']
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: "ReformedTech | Offshore Development Company",
      meta: [
        {
          name: 'description',
          content: 'ReformedTech is a Canadian tech startup focused on revolutionizing the way we connect with people around the world.'
        },
        {
          name: 'p:domain_verify',
          content: '3d99611706f1b7ffcb223758a31fa3b3'
        },
        // Open Graph Meta Tags
        { property: 'og:image', content: 'https://reformedtech.ca/logo-02.png' },
        { property: 'og:image:secure_url', content: 'https://reformedtech.ca/logo-02.png' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '400' },
        { property: 'og:image:height', content: '300' },
        { property: 'og:image:alt', content: 'ReformedTech' },
        { property: 'og:url', content: 'https://reformedtech.ca' }
      ],
      link: [
        { rel: 'alternate', hreflang: 'en', href: 'https://reformedtech.ca' },
        { rel: 'canonical', href: "https://reformedtech.ca" },
    ],
      script: [
        {
          hid: 'gtm-script',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-PMTT4ZJL');`,
          type: 'text/javascript',
          charset: 'utf-8',
        },
        {
          src: 'https://static.elfsight.com/platform/platform.js',
          defer: true,
          'data-use-service-core': '',
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtm-script': ['innerHTML']
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
