import webpack from "webpack";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  loadingIndicator: {
    name: "chasing-dots",
    color: "#3B8070",
    background: "white"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "second-app",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "quill/dist/quill.core.css",
    // for snow theme
    "quill/dist/quill.snow.css",
    // for bubble theme
    "quill/dist/quill.bubble.css",
    "@/static/asset/style/default.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/nuxt-quill-plugin", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "@/components",
    { path: "@/components/Header/Header", prefix: "Header" },
    { path: "@/components/BaseCard/BaseCard", prefix: "BaseCard" }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ["@nuxtjs/eslint-module", { fix: true }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],
  bootstrapVue: {
    icons: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { proxy: true },
  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: "http://localhost:8080/api/"
  //   }
  // },
  // privateRuntimeConfig: {
  //   axios: {
  //     baseURL: "http://localhost:8080/api/"
  //   }
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        "window.Quill": "quill/dist/quill.js",
        Quill: "quill/dist/quill.js"
      })
    ]
  }
};
