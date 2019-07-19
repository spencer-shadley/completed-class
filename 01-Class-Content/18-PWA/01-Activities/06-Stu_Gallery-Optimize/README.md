# Optimize Gallery App

In this activity you will use the Lazy Loading, GZip Compression, Image Compression, and Lighthouse to improve the performance of the Gallery App.

## Instructions

* First, unzip the uncompressed images zip file found in `public/assets/images`.

* Run the following commands:

  * Start MongoDB (run `mongod` in your terminal)
  * In a new terminal window run `npm install`
  * `npm run seed`
  * `node server.js`

* Now that the application is running, navigate to the [localhost](https://localhost:3000)

* Open your Chrome Dev tools and run a Lighthouse audit on the application. Take note of the `performance` score listed at the top of the audit report.

* Now, using the compression npm package, enable gzip compression in the application.

* Restart your server and run a new audit.

* Next, using [ImageOptim Online](https://imageoptim.com/online), compress all of the images found within the `public/assets/images`

* Once you have compressed all of the images, replace the newly compressed images with the original uncompressed found in the applications images directory.

* Restart your server and run a new audit.

* Now that we have compressed our images and enabled gzip compression, our last step is to minify our JavaScript.

* Create a `dist` folder in the root of your project folder

  * Inside of `dist` create a file called `index.js`

  * Link this `index.js` to your application

* Head to [Online Minification](http://refresh-sf.com/).

* Take the contents of `server.js` and paste it into the text area. Click `JavaScript`.

  * Take the resulting minified code and copy/paste it into your `dist/index.js`

  * Go through the same process with the remaining JS files in the project.

* Finally, restart your server and run a new audit.
