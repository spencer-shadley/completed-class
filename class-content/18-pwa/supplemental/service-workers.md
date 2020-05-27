# Concurrency

## About

Sequential tasks:

![sequential](https://miro.medium.com/max/724/1*kvHH21BbsH9J_NAatr6_IA.png)

Parallel tasks:

![parallel](https://miro.medium.com/max/724/1*jIoB-PFiND_6pXExZqAUxg.png)

- _Concurrency_ enables having multiple simultaneous active tasks

  - I can concurrently watch TV and read reddit on my phone. I'm not doing both at once, instead my brain is just switching back and forth between the two active tasks.

  - My computer can play music, allow me to type stuff in VS Code, display incoming Slack messages, check for new email, etc. For most of this it is actually just switching back and forth between active tasks very quickly, not running in "paralle". The operating system's scheduler figures out how to balance what tasks to run when and for how long.

- _Parallelism_ is simultaneously executing multiple things at once

  - My body can digest food while I watch TV, these actually happen in parallel

  - Two vending machines can serve two people in parallel

    ![parallel coke](https://miro.medium.com/max/409/1*_4B2PKsJn9pUz3jbTnBnYw.png)

- We enable multi-tasking on a computer using processes and threads

  - A **process** is a program being executed (a running program) created at the start of a program's execution

  - A **thread** is a subset of instructions in a process which can be managed by the operating system's scheduler

    - A process will spawn some number of threads to do its work which communicate using messages

    - The threads share context (memory)

- The number of potential parallel activities is a function of your computer's hardware. Your CPU only has so many processors which can run things. At the time of writing my computer, with 8 logicial processors is running 260 processes and 5,331 threads concurrently.

## JavaScript

- JavaScript is single-threaded. This makes it easy to work with but has historically limited the ability to run things concurrently.

- Our parallelism has been limited to the OS handling I/O and another machine (server) running stuff while the client does other stuff

- Chrome uses process-per-site-instance and FireFox uses a thread per tab to enable each tab to run concurrently

- Within a tab concurrency used to be very difficult - until...

## Web Workers

- Web workers enable running code in background _threads_, as opposed to the main execution thread that all of our code has been so far

  - These are generalized and allow running any background task in a separate thread

  - There is a special type of Web Worker designed for PWAs called a _Service Worker_

## Service Worker

- A script which runs in the background

- Originally designed for offline capabilities it enabled caching network requests using a new _Cache_ API

- Essentially acts as a proxy for network requests, making decisions on how to fulfill a network request (respond with a local cache, go over the network, etc.)

- As PWAs gained popularity, service workers became the backbone of the PWA and more APIs were added for it such as push notifications and background offline sync

- Communication happens using messages

- Limitations

  - No access to the DOM

  - Requires HTTPS

  - Only intercepts GET requests

### Lifecycle

![lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/images/sw-lifecycle.png)

### Steps to add a Service Worker

1. Create a service worker JavaScript file

1. Register the service worker

   ```js
   navigator.serviceWorker.register('my-service-worker.js').then(
     registration => {},
     err => {}
   );
   ```

1. Listen to the `install` event

   ```js
   self.addEventListener('install', event => {});
   ```

1. Add logic, such as opening up caches, handling fetch requests, etc.

### Resources

- [intro to service workers](https://developers.google.com/web/fundamentals/primers/service-workers)

- [caching strategies](http://localhost:3000/service-worker.js)

- [Workbox - A Service Worker wrapper](https://developers.google.com/web/tools/workbox/guides/get-started)
