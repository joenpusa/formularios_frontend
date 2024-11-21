const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // Plugin para desactivar el feature flag en producción
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      }),
    ],
    resolve: {
      alias: {
        // Alias para asegurar rutas correctas
        overlayscrollbars: "overlayscrollbars/js/OverlayScrollbars.js",
      },
    },
  },
});
