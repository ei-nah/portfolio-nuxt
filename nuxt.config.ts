import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Link your main CSS file
  css: ['~/assets/css/main.css'],

  // Register Tailwind Vite plugin
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})