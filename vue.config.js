const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  devServer: {
    https: true,
    client: {
      overlay: false,
    },
  },
});
