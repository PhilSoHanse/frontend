const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  devServer: {
    https: true,
    client: {
      overlay: false,
    },
    proxy: {
      '/': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
    },
  },
});
