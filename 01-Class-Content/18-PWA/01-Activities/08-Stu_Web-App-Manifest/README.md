# Student Do: Web App Manifest (10 mins)

* In this activity, you will write your first web app manifest for your Gallery App.

## Instructions

* Navigate to your Gallery App directory.

* Inside the public directory, create a `manifest.webmanifest` file and add `<link rel="manifest" href="manifest.webmanifest">` to your `index.html` `<head>` tag.

* Using the following code, fill out the different sections for the manifest.

```json
{
  "name": "stuff",
  "short_name": "stuff",
  "icons" : [
  ],
  "theme_color": "stuff",
  "background_color": "stuff",
  "start_url": "stuff",
  "display": "stuff"
}
```

* When finished, run the commands:

  * npm install
  * npm run seed
  * npm start

* Visit `localhost:3000` and open Chrome Tools > Application > Manifest.

* If successful you will see your manifest file loaded in your dev tools.

## Bonus

* Visit [https://developer.mozilla.org/en-US/docs/Web/Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) and add two new attributes to your manifest file.
