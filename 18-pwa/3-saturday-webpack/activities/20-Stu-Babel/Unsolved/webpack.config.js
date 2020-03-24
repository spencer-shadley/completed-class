import WebpackPwaManifest from `webpack-pwa-manifest`;
import { resolve, join } from `path`;

export default {
  mode: `development`,
  entry: `./public/assets/js/app.js`,
  output: {
    path: `${__dirname}/public/dist`,
    filename: `bundle.js`
  },
  plugins: [
    new WebpackPwaManifest({
      name: `Images App`,
      short_name: `Images App`,
      description: `An application for images`,
      background_color: `#01579b`,
      theme_color: `#ffffff`,
      'theme-color': `#ffffff`,
      start_url: `/`,
      icons: [
        {
          src: resolve(`public/assets/images/icons/icon-192x192.png`),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: join(`assets`, `icons`)
        }
      ]
    })
  ]
  // add configuration to use babel-loader here
};;
