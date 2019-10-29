const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "development",
  entry: {
    app: "./public/assets/js/home.js",
    detail: "./public/assets/js/detail.js",
    favorites: "./public/assets/js/favorites.js"
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "[name].bundle.js"
  },
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: "my-domain-cache-id",
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: "service-worker.js",
      minify: true,
      staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
    }),
    new WebpackPwaManifest({
      name: "Images App",
      short_name: "Images App",
      description: "An application for images",
      background_color: "#01579b",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "http://localhost:3000",
      icons: [{
        src: path.resolve("public/assets/images/icons/android-chrome-192x192.png"),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join("assets", "icons")
      }]
    })
  ]
};
module.exports = config;