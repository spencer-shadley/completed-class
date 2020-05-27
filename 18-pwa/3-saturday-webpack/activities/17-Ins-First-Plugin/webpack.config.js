const BundleAnalyzerPlugin = require(`webpack-bundle-analyzer`).BundleAnalyzerPlugin;

module.exports = {
  entry: `./src/app.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: `bundle.js`
  },
  mode: `development`,
  plugins: [new BundleAnalyzerPlugin()]
};
