# PWAs with Webpack

* In this activity we will adjust our Gallery app so that Webpack minifies and bundles our code.

## Instructions

* Before you begin, make sure to install all of the necessary dependencies with `npm install`.

* Run the following command: `npm install sw-precache-webpack-plugin webpack-pwa-manifest -D`.

* In a separate tab in your terminal, start a mongodb server with `mongod`.

* Run `npm start` to make sure that the application works as expected.

* Using the entry point of `src/app.js`, make Webpack output a bundle file in a folder called `dist/`.

* In `index.html`, change the JavaScript file src to be your new bundle file.

* Add the script `"prestart": "npm run webpack",` to the scripts in `package.json` so that Webpack will build every time the application is started.

* Update this application to accomplish the following:

  * Create a file in `public/` using `serviceWorker.js` from the gallery pwa activity.

  * In `serviceWorker.js`, update the `FILES_TO_CACHE` array with files generated from Webpack.

### Bonus

* Install the bundle analyzer plugin and identify which modules contribute the most to the total bundle size.

### Hints

* Try clearing application storage and disabling cache after making changes to your application. If it appears to be working, use Chrome DevTools to toggle `offline mode` and ensure that the application uses the service worker.

