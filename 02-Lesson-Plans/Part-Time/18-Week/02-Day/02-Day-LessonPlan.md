# 18.2 Lesson Plan - Progressive Web Applications (6:30 PM) <!--links--> &nbsp; [⬅️](#todo-fix-when-merged-to-dev) &nbsp; [➡️](#todo-fix-when-merged-to-dev)

## Overview

Today's class will continue our journey into web performance by learning about progressive web apps. We will start with our basic Gallery App and step by step, implement a web app manifest as well as a service worker. This new functionality will provide us with a fully functioning progressive web app that delivers an offline experience to our users.


## Instructor Notes

* @TODO which activities? 

* You may need to clear your storage periodically in order to see each iteration of activities. Do so in DevTools under `Application > Clear storage > Clear site data`.

* @TODO what else does the instructor need to know? 


## Learning Objectives
  
* Explain the benefits a progressive web app offers a user over a traditional app.

* Implement and explain the role of a web app manifest.

* Implement and explain the role of a service worker.

* Successfully cache and fetch files to deliver them in an offline experience.

* Install a PWA on both desktop and mobile devices

---
## Class Instruction

### 1. Instructor Do: Progressive Web Apps (5 min)

* Welcome students to class.

* Navigate to [https://secure-bayou-27137.herokuapp.com/](https://secure-bayou-27137.herokuapp.com/) in your browser and point out the following: 

  * It's the Image Gallery application from earlier. But there's something different about it...
 
  * If we open the Settings in Chrome, we will see an option to `Install Images App...`
 
  * When we select `Install Images App...` we are presented with an option to "Install app?"
 
  * When we click `Install`, a new Chrome window opens with our application running in it. 
 
  * It is now installed as a desktop app! If we search our applications, we will find "Images App" listed among them.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ What is different about our Image Gallery application? 
  
  * 🙋 There is added functionality to install it as a desktop application.

  * ☝️ If we can install the Images App application on our laptops, where else might we install it? 
 
* Use student answers to transition to the next activity.

@TODO app stars do not work in offline mode


### 2. Student Do: Progressive Web Applications (10 min)
 
* Direct students to the activity instructions found in [07-Stu_PWAs](@TODO).

```md

  # Progressive Web Applications

  In this activity, you will install a progressive web application (PWA) using your smart phone. You will also research the definition and production of a PWA.

  ## Instructions

  * Navigate to [https://secure-bayou-27137.herokuapp.com/](https://secure-bayou-27137.herokuapp.com/) with your smart phone and follow the instructions for your specific OS:

  * @TODO instructions for iOs and Android

  * Be prepared to answer the following question(s): 

      * What is a progressive web application? 

      * How do we create progressive web applications?


  ## 🏆 Bonus

  * What are examples of popular PWAs?
```


### 3. Instructor Do: Progressive Web Apps Review (5 min)

* Use the prompts and talking points below to review the following key point(s):
  
  * ✔️ Progressive web applications (PWAs) are mobile or dekstop apps delivered through the web, built using HTML, CSS & JavaScript
  
  * ✔️ PWAs require a manifest, a service worker and the Cache API
  
* Ask the class the following question(s) and call on students for the corresponding answer(s):

  *  What is a progressive web application?
  
  * 🔑 Progressive web applications (PWAs) are mobile or dekstop apps delivered through the web, built using HTML, CSS & JavaScript
  
  *  What is meant by the term 'native' app?
  
  *  The term "native app" refers to applications written for specific platforms. For example, native iPhone apps are written in iOs and Android apps are primarily written in Java. Apple apps will not run on Android devices and vice versa. 

  *  How are PWAs different from native apps?

  *  Traditional Mobile Apps require multiple builds across platforms, are less discoverable by search engines and have high abandonment rates.They also offer less usability and don’t leverage mobile device capabilities and are often slow and bloated. PWA's provide advantages of both web and mobile apps such as push notifications, offline experiences,speed and stability. Plus, you can convert a web app into a PWA quickly without the build time of a mobile app.
  
  *  What do we need to learn to convert an application into a progressive web application?

  * 🔑 There are three primary things we need to learn: Manifests, Service Workers and the Cache API.
  
* Navigate to [https://secure-bayou-27137.herokuapp.com/](https://secure-bayou-27137.herokuapp.com/), open DevTools and explain the following: 
  
  * If we look under the Application tab in DevTools for our Image Gallery App, we see **Manifest**, **Service Workers** and **Cache Storage** panels.

    ![Application Sidebar](Images/application-sidebar.png)

  * If we check the `offline` button in the Service Workers panel, we see that the application still delivers a full experience with an Internet connection!

  ![Offline](Images/offline-mode.png)

* Answer any questions before proceeding to the next demo. 


### 4. Instructor Do: Web App Manifest Demo (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ `manifest.webmanifest` is JSON file providing information for mobile and desktop installation
  
  * ✔️ Manifest properties are referred to as members
  
* Open [08-Ins_Manifest/manifest.webmanifest]@TODO) in your IDE and explain the following: 

  * 🔑 A web app manifest is a simple JSON file containing some metadata about a web application. 
  
 ```js
  {
    "short_name": "Demo",
    "name": "Web App Manifest Demo",
    "icons": [
      {
        "src": "/assets/images/icons-192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/assets/images/icons-512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "start_url": "/",
    "background_color": "	#808080",
    "display": "standalone",
    "theme_color": "	#808080"
  } 
  ```
  * 🔑 Each of the properties in our manifest file is referred to as a **member**.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ What do we think the difference is between `name` and `short_name`?

  * 🙋 `short_name` is used on the home screen and in the application menu
  
  * ☝️ What are "icons"?

  * 🙋 The `icons` array contains information about the thumbnail images used when installing the PWA on mobile or desktop

  * ☝️ What is the `start_url` member?

  * 🙋 Defines what page is opened when the app is first launched (start_url).
  
  * ☝️ What does the `display` member do?

  * 🙋 By using a web app manifest, our app can tell the browser you want your app to open in a standalone window


### 5. Student Do: Web App Manifest (10 mins)

* Direct students to the activity instructions found in [09-St_Manifest](../../../../01-Class-Content/18-pwa/Activities/09-Stu_Web-App-Manifest)

```md
  # Student Do: Web App Manifest (10 mins)

  In this activity, you will write your first progressive web application manifest.

  ## Instructions

  * Using the instructor demo as a guide, create a manifest for the Image Gallery app.

    * 🤔 Where do you create the `manifest.webmanifest` in the application architecture?

    * 🤔 How do you deploy a manifest?

  * When finished, run the commands:

    * npm install
    * npm run seed
    * npm start

  * Navigate to [localhost:3000](localhost:3000) and open `DevTools > Application > Manifest` to verify successful loading of the manifest.


  ## 💡 Hint(s)

  Read the [MDN Web App Manifest documentation](https://developer.mozilla.org/en-US/docs/Web/Manifest) 


  ## 🏆 Bonus

  * Add additional members to your manifest.
  ```


### . Instructor Do: Review Web App Manifest (5 mins)

  * Use the prompts and talking points below to review the following key point(s):

    * @TODO

  * Open [...public/manifest.webmanifest](@TODO) in your IDE and explain the following:

    ```json

    @TODO insert code and talking points
  
    ```

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ @TODO 

  * 🙋 @TODO 

  * ☝️ What's next on our list of things to do?
  
  * 🙋 Add a service worker!
  

@TODO 15 minutes is way too long
### . Instructor Do: Intro To Service Workers (15 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * @TODO

@TODO need an instructor demo!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

* Run [ ](../../../../01-Class-Content/18-pwa/Activities/03-Stu_Caching-Fetching-Files/Solved/Gallery-App-Caching) and re-launch the Gallery app if it is not already running.

* Tell the class that a service worker is a script that your browser runs in the background on a separate thread from your webpage.

* Certain functionality can _only_ be implemented from within a service worker, such as caching assets in order to make the application useable without an internet connection or notifying the browser than the application should be installable.

* Before we look at our service worker code, let's cover a few terms.

  * **Cache API** Similar to localstorage and indexedDB in that this browser API is used for storing data. However Cache API can be used to store entire all front end assets such as images, javascript, HTML, CSS, etc. along with API responses.

  * **Thread** A thread is an independent set of values for the processor that controls what executes in what order. Think of this as another JavaScript application running at the same time as our main application, with the ability to communicate and pass data between threads.



* Open your Chrome Dev Tools > Application and click on the Service Worker tab.

  * Demonstrate how when your web app launches, it registers and installs the service worker.

* Follow these steps:

  * In the Service Worker tab click un-register service worker.

  * Refresh your app.

  * Point out how the service worker has installed and re-registered on refresh.

  * Move into the Cache Storage tab to show our cached files.

  * Switch into your console to demo the service worker object as well as the message saying that our files have been cached.

* Tell the students that our service worker is launching when our app hits the index page, installing and registering and caching our files.

* Successful registration of the Service Worker means that the script has been successfully parsed, it is on the same origin as the document, and the origin is HTTPS.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ @TODO 

  * 🙋 @TODO 


### . Student Do: Register Service Worker (10 mins) (HIGH)

* Direct students to the next activity located in [02-Stu_Service-Workers](../../../../01-Class-Content/18-pwa/Activities/02-Stu_Service-Workers/Unsolved).

* **Instructions**

* Add the following script just above the closing `</body>` tag in `index.html`

```js
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then((reg) => {
          console.log('We found your service worker file!', reg);
        });
    });
  }
</script>
```

* Create a `service-worker.js` file in the `public` directory and add the following line of code.

```js
console.log("Hello from your service worker file!");
```

* Refresh your Gallery App or launch it with `npm start` if it is not running.

* Open your Chrome Dev Tools and navigate to Application then your Service Worker tab. Check to see if your service worker file was successfully found. You should see two messages, one from the `service-worker.js` file and one from the script tag that you put in your `index.html` file.

  ![Service Worker Console](Images/sw-console.png)


### . Instructor Do: Review Register Service Worker (5 mins)

* Use the prompts and talking points below to review the following key point(s):

  * @TODO

* Open [03-Stu_Caching-Fetching-Files/Solved/Gallery-App-Caching](../../../../01-Class-Content/18-pwa/Activities/03-Stu_Caching-Fetching-Files/Solved/Gallery-App-Caching) and navigate to `public/index.html`.

```js
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then((reg) => {
          console.log('We found your service worker file!', reg);
        });
    });
  }
</script>
```

* Ask for a volunteer to help step you through the code. The main takeaway is we are adding an event listener to our window element, registering our service worker and then logging a simple message to let us know it was successful.

* Reiterate that it is not necessary to understand every single line of code at this point, but to have a general understanding of we we are doing. Explain that the fluency with this code will come after seeing it a few times.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ @TODO 

  * 🙋 @TODO 

---

### . Break (15 mins)

---

### . Instructor Do: Creating An Offline Experience (15 mins) (HIGH)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * @TODO

* Now that we have successfully registered our service worker, let's step through the code that will install and activate it. This will give our service worker the ability to cache the files we tell it to and deliever them in an offline experience for our users.

* Change into [03-Stu_Caching-Fetching-Files/Solved/Gallery-App-Caching](../../../../01-Class-Content/18-pwa/Activities/03-Stu_Caching-Fetching-Files/Solved/Gallery-App-Caching) and launch your app if it is not running.

* Visit <http://localhost:3000> and open your Chrome Dev Tools > Sources.

* In the Sources tab, point out how our service worker is running on separate thread.

  ![Threads](Images/sw-threads.png)

* Then move into `service-worker.js` and give a general overview of the code. Explain that they will be adding this code to their `service-worker.js` file in the next activity, but for now the goal is to gain a high level understanding of what is happening.

* **Tell Our App What To Cache**

```js
const FILES_TO_CACHE = [
  '/',
  '/offline.html',
  '/index.html',
  '/assets/css/style.css',
  '/assets/js/app.js',
  '/assets/js/loadImages.js',
  '/assets/images/1.jpg',
  ...
  ...
];

// set cache variable names
const CACHE_NAME = 'static-cache-v2';
const DATA_CACHE_NAME = 'data-cache-v1';
```

* **Create Our Install Event Listener**

  * Tell that class that here we open our cache and call `addAll`, passing in `FILES_TO_CACHE`.

```js
// install
self.addEventListener('install', function(evt) {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Your files were pre-cached successfully!');
      return cache.addAll(FILES_TO_CACHE);
    })
  );

// skipWaiting() ensures that any new versions of our service worker will take over the page and become activated immediately
  self.skipWaiting();
});
```

* **Create Our Activate Event Listener**

  * Tell the class that here we are activating our service worker cleaning up outdated caches.

```js
// activate
self.addEventListener('activate', function(evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log('Removing old cache data', key);
            return caches.delete(key);
          }
        })
      );
    })
  );

// Tells our new service worker to take over.
  self.clients.claim();
});
```

* **Fetch Our API Data**

  * Tell the class that here we modify the service worker to handle requests to `/api` and store the responses in our cache, so we can easily access them later.

```js
// fetch
self.addEventListener('fetch', function(evt) {
  if (evt.request.url.includes('/api/')) {
    console.log('[Service Worker] Fetch (data)', evt.request.url);

    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(evt.request)
          .then(response => {
            // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }

            return response;
          })
          .catch(err => {
            // Network request failed, try to get it from the cache.
            return cache.match(evt.request);
          });
      })
    );

    return;
  }

  evt.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(evt.request).then(response => {
        return response || fetch(evt.request);
      });
    })
  );
});
```

@TODO yes, there is; let's fix it
* There is quite a bit of code here so take the time to step through it, clarifying any questions as you go.

  * Remind students to focus on the big picture of creating an offline experience and the details will fall into place.

* Recap that our service worker is caching all of the files we tell it to so when a user doesn't have a connection, it can deliever them an offline browsing experience.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ @TODO 

  * 🙋 @TODO 


### Student Do: Caching Files (10 mins) (CRITICAL)

* Direct students to the next activity located in [Unsolved/Gallery-App-Caching](../../../../01-Class-Content/18-pwa/Activities/03-Stu_Caching-Fetching-Files/Unsolved/Gallery-App-Caching).

* In this activity students will be given screenshots of the code they need to add to implement caching as to discourage simply copying and pasting.

* **Instructions:**

  * Add the following code to your `service-worker.js` file.

  * Type out the following code snippets when adding them to your application, it will help you solidify what you are doing!

  * As you go through each step, keep your Chrome Develop tools open to monitor your progress and debug if needed.

* **Set Up Cache Files**

```js
const FILES_TO_CACHE = [
  '/',
  '/offline.html',
  '/index.html',
  '/assets/css/style.css',
  '/assets/js/app.js',
  '/assets/js/loadImages.js',
  '/assets/js/install.js',
  '/assets/images/1.jpg',
  '/assets/images/2.jpg',
  ...
  ...
];

const CACHE_NAME = 'static-cache-v2';
const DATA_CACHE_NAME = 'data-cache-v1';
```

* **Install and Register Your Service Worker**

```js
self.addEventListener('install', function(evt) {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Your files were pre-cached successfully!');
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});
```

* If done successfully, you should see your static cache in your Application tab.

  ![Static Cache](Images/static-cache.png)
  
  
  
@TODO is this a demo or activity?

* **Activate Service Worker**

```js
self.addEventListener('activate', function(evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log('Removing old cache data', key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});
```


### Student Do: Fetching Files ( mins) 

* **Fetch Files**

```js
self.addEventListener('fetch', function(evt) {
  if (evt.request.url.includes('/api/')) {
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(evt.request)
          .then(response => {
            // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }

            return response;
          })
          .catch(err => {
            // Network request failed, try to get it from the cache.
            return cache.match(evt.request);
          });
      })
    );

    return;
  }

  evt.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(evt.request).then(response => {
        return response || fetch(evt.request);
      });
    })
  );
});
```

* If done successfully you will see your data cache in your Application tab. At this point you should be able to put your application in offline mode for an offline experience.

  ![Data Cache](Images/data-cache.png)

  ![Offline](Images/offline.png)
  
* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ @TODO 

  * 🙋 @TODO 


### 11. Instructor Do: Review Caching and Fetching Files (5 mins)

* Use the prompts and talking points below to review the following key point(s):

  * @TODO

* Open [03-Stu_Caching-Fetching-Files/Solved/Gallery-App-Caching](../../../../01-Class-Content/18-pwa/Activities/03-Stu_Caching-Fetching-Files/Solved/Gallery-App-Caching) and launch your app.

* Ask for a volunteer to step you through the code, starting with `install` then moving on to `activate` and `fetch`.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ @TODO 

  * 🙋 @TODO 


@TODO this demo, activity and review may be deleted per time
### . Instructor Do: Intstalling Your App (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * @TODO

* Navigate to [the deployed Image application(@TODO) and demonstrate the following functionality: 

  @TODO

  * When a Progressive Web App is installed, it looks and behaves like all of the other installed apps.

  * It runs in an app without an address bar or other browser UI and like all other installed apps, it's a top level app in the task switcher.

* Demonstrate how to install the Gallery App on desktop for the students.

* **Open Chrome Menu**

  ![Install Step 1](Images/install-1.png)

* **Install**

  ![Install Install Step 2](Images/install-2.png)

* **See Your App Successfully Installed**

  ![Install Step 3](Images/install-3.png)


### . Instructor Do: Demo Notetaker PWA (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

* Navigate to [05-Stu_Final-Project/Solved](../../../../01-Class-Content/18-pwa/Activities/05-Stu_Final-Project/Solved) and demonstrate the following functionality: 

  * @TODO the offline experience for the solved Notetaker app using Chrome Developer tools and navigate to the `Service Worker` tab, toggling the offline version and then refreshing the app.


### . Student Do: Notetaker PWA (30 mins)

* Direct students to the activity isntructions found in [16-Stu_Notetaker-PWA](../../../../01-Class-Content/18-pwa/Activities/16-Stu_Notetaker-PWA)

@TODO insert new instructions as Markdown


### . Instructor Do: Review Notetaker PWA (15 mins)

* Use the prompts and talking points below to review the following key point(s):

  * @TODO

* Open [05-Stu_Final-Project/Solved/public/manifest.webmanifest](../../../../01-Class-Content/18-pwa/Activities/05-Stu_Final-Project/Solved/public/manifest.webmanifest) in your IDE and explain the following: 

@TODO insert manifest with talking points

* Open [05-Stu_Final-Project/Solved/public/service-worker.js](../../../../01-Class-Content/18-pwa/Activities/05-Stu_Final-Project/Solved/public/service-worker.js) in your IDE and explain the following: 

  * @TODO add code snippets and talking points

  * :memo: Our `fetch` call has changed, since we are onlying fetching our cached static resources.

  ```js
  // fetch
  self.addEventListener('fetch', function(evt) {
    evt.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(evt.request).then(response => {
          return response || fetch(evt.request);
        });
      })
    );
  });
  ```

### 18. END (0 mins)
