const webpack = require('webpack');
const path = require('path');

let isProduction = process.env.NODE_ENV == 'production';

process.env.VUE_APP_BUILD_TIME = new Date().toISOString();

module.exports = {
  publicPath: './',
  parallel: false,
  pwa: {
    name: 'Test',
    themeColor: '#a496da',
    workboxOptions: {
      skipWaiting: true,
      importWorkboxFrom: 'local',
      clientsClaim: true,
    },
  },
  productionSourceMap: false,
  css: {
    sourceMap: !isProduction,
  },
  transpileDependencies: [],
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery',
      }),
    ],
    performance: {
      hints: false,
    },
  },
  chainWebpack: config => {},
};
