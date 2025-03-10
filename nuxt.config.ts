// import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head:{
      title: 'Nuxt Dojo', 
      meta: [
        {name: 'description', content:'Everything about Nuxt 3'}
      ],
      link: [
        {rel : 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },

  runtimeConfig:{
    currencyKey: process.env.CURRENCY_API_KEY
    //EXPOSE TO FRONTEND USER, just add public{}
  },

  compatibilityDate: '2025-03-09',
})