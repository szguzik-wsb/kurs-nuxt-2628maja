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
  modules: ['@pinia/nuxt']
});
