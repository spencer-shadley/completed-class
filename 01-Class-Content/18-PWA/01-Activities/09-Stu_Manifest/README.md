# Student Do: Web App Manifest (10 mins)

* In this activity, you will write your first progressive web application manifest.

## Instructions

* Inside the `public` directory, create a `manifest.webmanifest` file.

* Using the following code, fill out the different sections for the manifest.

```json
{
  "name": "<full-name-of-application>",
  "short_name": "<short-name>",
  "icons" : [
    {
      "src": "<relative-path-to-image>",
      "sizes": "<widthXheight-in-pixels>",
      "type": "image/png"
    },
    //etc
  ],
  "theme_color": "<hex-code>",
  "background_color": "<hex-code>",
  "start_url": "/",
  "display": "standalone"
}
```

* Add `<link rel="manifest" href="manifest.webmanifest">` to your `index.html` `<head>` tag.

* When finished, run the commands:

  * npm install
  * npm run seed
  * npm start

* Visit `localhost:3000` and open Chrome Tools > Application > Manifest.

* If successful, you will see your manifest file loaded in DevTools.

## Bonus

* Research [additional manifest members and add one or more to your file](https://developer.mozilla.org/en-US/docs/Web/Manifest#Members).
