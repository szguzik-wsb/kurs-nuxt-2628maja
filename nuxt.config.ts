// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Green Allegro",
      link: [
        // Klasyczna favicona
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        // Alternatywnie: PNG lub SVG
        // { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        // { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      meta: [
        {
          name: "description",
          content: "Eko-market z produktami przyjaznymi środowisku",
        },
      ],
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/style.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@vite-pwa/nuxt",
  ],
  devServer: {
    https: {
      key: "./example.com+5-key.pem",
      cert: "./example.com+5.pem",
    },
  },
  pwa: {
    manifest: {
      name: "Green Allegro",
      short_name: "Green",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#16a34a",
      icons: [
        {
          src: "/pwa-icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/pwa-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
    },
  },
});
