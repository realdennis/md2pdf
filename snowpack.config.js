/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
      public: "/",
      src: "/_dist_",
    },
    plugins: [
      ["@snowpack/plugin-sass"]
      /* ... */
    ],
    install: [
      /* ... */
    ],
    installOptions: {
      /* ... */
    },
    devOptions: {
      /* ... */
    },
    buildOptions: {
      /* ... */
    },
    proxy: {
      /* ... */
    },
    alias: {
      /* ... */
    },
  };