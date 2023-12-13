// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  tailwindcss: {
    configPath: "tailwind.config.js",
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  devServer: {
    port: 80,
  },
});