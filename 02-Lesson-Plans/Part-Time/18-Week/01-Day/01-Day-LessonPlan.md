# 18.1 Lesson Plan - Web Performance (6:30 PM) <!--links--> &nbsp; [⬅️](../../17-Week/03-Day/03-Day-LessonPlan.md) &nbsp; [➡️](#todo-fix-link-when-merged-to-dev)

## Overview

Todays class will be focused on Web Performance. We will use Lighthouse to audit the performance of webpages, and go through the different options we have to increase performance in our applications. Performance is an incredibly important aspect of being a developer. While building large applications, keeping them performing is a top priority.

- - -

## Class Objectives

* By the end of class student's will be able to...
  * Articulate the meaning of web performance and how it effects their users.
  * Explain how assets like JavaScript files and images impact the performance of a web page.
  * Use Lighthouse to audit a sites various performance metrics.
  * Use minification to lower JS file sizes.
  * Use the compression npm package to enable gzip compression in their applications
  * Use online image compression to compress image files while retaining image quality.
  * Explain and implement lazy loading into their applications so images are only loaded as needed.

- - -

## Instructor Notes

* We will be making use of students Project 2 during the first half of todays class. Ensure all students have a deployed project to work with.

* Todays class you will be using an auditing system by Google called Lighthouse. Familiarize yourself with the tool prior to class.

  * Lighthouse can hang in some browsers, if possible please use Chrome.

* Improving scores in Lighthouse will be a big win for students today, so be sure to slowly go through the first audit report of the day to give students an understanding of how they can improve.

- - -

### 1. Instructor Do: Welcome/Intro Web Performance (10 mins)

* Welcome students to class and then open Google Chrome. 

* Open your Dev Tools Network Tab and Throttle your connection to `Slow 3G`

  * ![Throttle Connection](Images/throttleConnection.png)

* Navigate to [Amazon.com](https://amazon.com/) and point out the following:
  
  * The page is going to load extremely slowly. Show students the Network Chart found under the connection throttle dropdown.

  * Amazon will load assets for well over a minute, and this traffic can all be watched inside of our dev tools.

* Ask the class, "Have you ever left a webpage due to it taking too long to load"

  * It's safe to say anyone who has used the internet has experienced this.. This is a common occurrence all over the world, as not all people have access to fast network connections.
  
  * One of the biggest factors that leads to a poor user experience is slow page load times.

* Ask the class, "What do you think the most important part of the user experience is?". Call on one or two students for answers.

  * Performance. Speed and response times are paramount, as making users wait for response to input or loading information is a guaranteed way to lose those users.

  * When it comes to the web every second counts. Todays class will be about how webpages can be optimized to save the end user time and provide a more fluid experience.

* Ask the class, "How do we know what is causing our page to perform poorly or well?"

  * Getting concrete analysis on the performance metrics of a web page is important in improving it in the future.

* Use student answers to transition to demoing Lighthouse.

### 2. Instructor Do: Demo Lighthouse (10 mins)

* Google has created a tool called Lighthouse which will allow us to run an audit on our page and find out different metrics about how it performs and what is hindering its performance. Lighthouse is a quality audting tool developed by Google for analyzing web pages.

  * It provides audits for performance, accessibility, SEO, and progressive web applications.

* Tell the class that Lighthouse can be run directly from our Chrome DevTools, making it a fast, simple, and effective way to get insights into our pages overall performance metrics.

* Open the [Gallery App](https://ancient-brushlands-76706.herokuapp.com/) and run the application. Let students know this is an application they will be working with after break later today.

  * Open chrome dev tools, and click the `Audits` tab.

  ![Audits Tab](Images/auditsTab.png)

  * Scroll down and click `Run Audits`

  ![Run Audits](Images/runAudits.png)

* Walk students through the `Audit Report` that is provided within the dev tools.

* The *performance* section will be the first you encounter, and one of the most useful for todays class.

  * Hovering over the different status signs next to the times shown will give you information on what that test means.

  ![Hover](Images/performanceSection.png)

  * Tell the class that each audit has a reference doc explaining why the audit is important, as well as how to fix it.

* One of the main metrics Lighthouse looks for is the *first meaningful paint*.

  * Tell the class that a paint occurs when content is loaded on the screen. Lighthouse measures the first *Contentful* paint, which means when any content is loaded. It also measures the first *meaningful* paint which occurs when the primary content becomes visible.

* One of the most important metrics it takes is *Time to Interactive*. This is the time it takes for the webpage being audited to become usable. A long delay in interactivity can lead to page abandonment.

* Lighthouse will give very useful tips and even concrete steps we can take to improve performance.

  * Tell the class that when working on improving a webpage's performance, students should use Lighthouse to complete frequent audits. These can be incredibly helpful in pinpointing where their efforts should be focused.

### 3. Student Do: Lighthouse Audit (10 mins)

* Slack out the following instructions to your students.

* **Instructions**

* We are going to use your Project 2 for these coming activities to check its performance metrics.

* Navigate to the deployed URL of your project.

* Open the Chrome Dev Tools and click the `Audits` tab.

* Scroll down and click `Run Audits` and allow Lighthouse to run.

* Read through the provided report and be prepared to talk about the `Opportunities` portion of your audit!

### 4. Instructor Do: Review Audits (5 mins)

* Ask students to raise their hand and talk about some of the `Opportunities` Lighthouse found for improvement in their applications.

  * How long did the first content paint take?

  * How long did the first meaningful paint take?

  * How long did it take to become interactive?

* Are there any commonalities you hear?

### 5. Instructor Do: JS Minification (10 mins)

* Start by asking the class if anyone knows what JS Minification is.

* Tell the class that minification is the removal of any unnecessary characters and whitespace without the loss of any functionality.

* Open [Online Minification](http://refresh-sf.com/) and paste the following code into the textarea:

    ```js
    var myArray = [1, 2, 3, 4, 5];

    for(var i=0; i < myArray.length; i++){
      console.log(myArray[i]);
    }
    ```

* Click the JavaScript button at the top right of the textarea and walk students through the output.

* ![Minify JS](Images/minifyJS.png)

* Point out to the class that:

  * It moved our `myArray` declaration into our `for loop`.

  * It removed all whitespace between characters, and put all of our code on one line.

  * This resulted in a 25% decrease in the size of the JavaScript.

  ![Minified](Images/minification.png)

* While the code may look different after minification, let students know that it will function exactly the same.

* Minification saves us space, and smaller file sizes create faster downloads for the user. The faster our assets can download, the faster the page will load for them.

### 6. Student Do: Minify your JavaScript (10 mins)

* Direct students to the activity instructions located [here](../../../../01-Class-Content/18-PWA/01-Activities/02-Stu_Minifify-JS/README.md)

```md
# Minify Your JS

In this activity you will minify your JavaScript using an online tool.

## Instructions

* Using the project you audited previously, navigate to [Online JavaScript/CSS/HTML Compressor](http://refresh-sf.com/)

* Copy the contents of one of your JS files into the compressor and click on the `JavaScript` button.

* Note the resulting Input/Output sizes of the JS as shown to the bottom right of the textarea.

* Create a `dist` folder in the root of your project.

  * Create an `index.js` file inside of your `dist` folder.

  * Copy/paste the minified JS of your dist folder into your `dist/index.js`

* Be sure to link your `dist/index.js` code to your application.
```
### 7. Instructor Do: Review Minification (5 mins)

* Ask several students how much of a reduction they saw in JS sizes from Input to Output.

* Ask students how this could benefit developers, especially those with massive codebases.

* While the minified code certainly appears different than the code we input to start, ensure students all of the functionality is retained.

  * Let students know that it is important to have minified code in it's own file. It is not recommended to attempt editing minified code as it can be difficult to read, and even more difficult to debug due to the lack of readability.

* Now that we have learned to minify our code, lets look at how we can compress our files.

### 8. Instructor Do: Compression npm package (10 mins)

* Tell the class that while minification will help reduce file sizes, something called *compression* will let us take files sizes down even further.

* Ask the class, "Have you ever worked with a `.zip` extension file?"
  
  * A `.zip` file is a compressed version of a normal folder. When you `unzip` it, the folder contains all of the information it had before it was zipped.

* Navigate to [MDN GZip Compression](https://developer.mozilla.org/en-US/docs/Glossary/GZip_compression).

  * Ask the class, "What do we do with files that are so large they are slowing load times?"

  * We compress those files.

  * Let students know that on the web we can use something called GZip compression via an NPM Package called `compression`.

  * Explain that GZip is a form of data compression -- it takes a piece of data and makes it smaller. The original data can be restored by un-zipping the compressed file.

  * It is relevant to web apps and web sites because the HTTP protocol includes the ability to gzip data that is being sent.

  * This middleware will enable compression for our project, allowing for compressed versions of our files to be sent over the network for faster download times.

* Navigate to [compression npm](https://www.npmjs.com/package/compression)

* Tell the class that using this middleware enables compression with just 3 lines of code.

* Now we are going to show students around the `Network` tab in Chrome Dev Tools.

  * Open up your `network` tab in the chrome dev tools.

  ![Network Tab](Images/networkTab.png)

  * Navigate to the [New York Times](https://www.nytimes.com/).

  * Point students to all the incoming network traffic shown, and more specifically the file sizes column.

  ![Network Traffic](Images/networkTraffic.png)

  * Show students how there is a file size showing the compressed size (Smaller number) and its uncompressed size (larger number).

    * Files that don't have two numbers are uncompressed files being sent unchanged.

### 9. Students Do: Enable Compression (10 mins)

* Direct students to the activity instructions located [here](../../../../01-Class-Content/18-PWA/01-Activities/03-Stu_Enable-Compression/README.md)

```md
# GZip Compression

In this activity you are going to use an NPM package called compression to enable GZip compression in your project.

## Instructions

* Navigate to [compression npm](https://www.npmjs.com/package/compression)

  * Read about the installation procedure and some of the API's functionality. Use the docs to enable compression in your application.

* Once completed, navigate to your page and look at the traffic via the Network tab.

  * You should be able to see the sizes of the files your page is requesting.

  * Take note of the differing file sizes.

  * This shows your Uncompressed/Compressed file sizes.
```

### 10. Instructor Do: Review Compression (5 mins)

* Go over the basic code that allows for us to enable compression via the compression npm package

* We first `npm install compression`

* We then add the following code to our `server.js`:

```js
var express = require("express");
var mongoose = require("mongoose");
var compression = require("compression");

var app = express();

app.use(compression());
```

* Let the students know they've done a great job so far, and answer any questions before their break.

### 11. BREAK (15 mins)

### 12. Instructor Do: Image Compression (10 mins)

* Images are one of the most used assets on the web. They are everywhere, and there are more than you can imagine.

* Images are a huge culprit in slowing down web loading times.

* Ask the class:

  * Have you ever gone to a site and experienced slow image loading times?

  * Most will say yes. This is normally due to oversized images or high resolution images being downloaded and taking time.

* Follow up with:

  * How might we be able to fix the problem of images that are too large?

* We can use a concept called *Image Compression*. For the purposes of our course we are going to talk about *Lossy Image Compression*.

  * What lossy image compression basically means is that some of the image data is lost during compression. Once an image has used lossy compression, you cannot reverse the process due to this loss of data. The data lost will normally result in almost unnoticeable changes in image quality most of the time.

* Open

### 13. Student Do: Image Compression (10 mins)

* Direct students to the activity instructions located [here](../../../../01-Class-Content/18-PWA/01-Activities/04-Stu_Image-Compression/README.md)

```md
# Image Compression

In this activity you are going to use an online compression tool to decrease image file sizes for the Gallery App.

## Instructions

* In this activity you will be using ImageOptim Online to compress images.

* First, unzip the `uncompressedImages.zip` file.

* Next, navigate to [ImageOptim Online](https://imageoptim.com/online)

* Select the following options:

  * Quality - Medium

  * Color Quality - Auto

  * Format - JPEG

* Now that our options are selected, click `Choose Files`.

* This will prompt you to select an image or images you would like to pass through the compressor.

* Go ahead and choose 3-5 images. Before accepting the choices, note the original file sizes so you can compare against the compressed image.

* Finally, click `Submit`.

* Once the compression is complete, a `zip` file will automatically download to your computer.

  * This will most likely be downloaded to your `Downloads` folder.
```

### 14. Instructor Do: Review Image Compression (5 mins)

* This was a more simple activity, and won't have much to review.

* Ask the class:

  * Do you see the benefits of compressing images?

  * Did you see a loss in image quality?

* If we can save space while maintaining visual quality, that is a win win. It allows for high resolution images for our page while still decreasing download/load times for our user.

### 15. Instructor Do: Lazy Loading (10 mins)

* Now that we have compressed all of our images, we are certainly saving space. Point out, we are loading all 38 images when there is only 6-9 images showing at any time. If a students user is on mobile, it would only be 1-2 images at any time.

  * What if a user doesn't scroll through all of them? We have wasted a lot of time and memory downloading assets we are not going to use.

  * This poses multiple problems. It not only makes loading slower, but is costly when it comes to data and those people using mobile who may not have an unlimited data plan. We certainly don't want to cost our user time and money, so what can be done?

* Open [Gallery App Lazy Load](../../../../01-Class-Content/18-web-performance/01-Activities/05-Stu_Gallery-Lazy-Load/Solved)

  * Run the program and navigate to <http://localhost:3000>.

  * Open your Developer Tools and navigate to the `Network` tab. Disable your cache, and click the `img` tab within `Network`.

  ![Cache Disabled and Img](Images/cacheImage.png)

  * Refresh the page and show point students to all the images being loaded. A lot of time, downloading, and data right?

* Introduce the concept of lazy loading.

  * Lazy loading allows us to load assets as they are needed, instead of downloading all of them right at page load. If something isn't being used, why should it be downloaded?

* In the case of this application, we are loading 38 images when we may not need them all. Before, we used to have to use a `scroll` event. This event would check if images were scrolled onto the screen, and that event would then load the images if they had entered the viewport.

  * We can now use something called the `Intersection Oberserver API`.

* The `Intersection Observer API` provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

* Open our completed [Lazy Loading Gallery App](https://ancient-brushlands-76706.herokuapp.com/) and demo the lazy loading functionality by scrolling to the bottom of the page.

  * If it loads too quickly, open your `Network` tab in your Dev Tools and throttle the internet speed, disable cache, and refresh the page.

  * ![Throttle Connection](Images/throttleConnection.png)

* The next activity may be a bit tricky so be sure you and your TAs have reviewed the solution and are ready to help students who are stuck.

### 16. Student Do: Lazy Loading (15 mins)

* Direct students to the activity instructions located [here](../../../../01-Class-Content/18-web-performance/01-Activities/05-Stu_Gallery-Lazy-Load/README.md)

```md
# Lazy Loading Images

In this activity you are going to work with the Intersection Observer API to implement lazy loading functionality for our Gallery App.

## Instructions

* In this activity you are going to take the Gallery App and implement Lazy Loading functionality.

  * This will allow for us to load images only as they are needed, saving loading times.

* You will primarily be working within `loadImages.js`

* Inside of `public/assets/images` is a `.zip` file containing all the images needed for the app. Unzip this file and make sure the contents end up in your images folder.

* Read through the MDN Docs provided below. Use the example code provided and adapt it to work with the `Gallery App`

* **Note**: You will need to make some changes to the code to get it working in your application.

[MDN Progressive Loading](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading)

* After you have completed implementing lazy loading, open your Dev Tools and run another Lighthouse Audit.
```

### 17. Instructor Do: Review Lazy Loading (5 mins)

* Open the [solved](../../../../01-Class-Content/18-web-performance/01-Activities/05-Stu_Gallery-Lazy-Load/Solved) Gallery App.

* Walk students through the code that enables lazy loading in our application.

```js
function initLazyImages() {
  const lazyImages = document.querySelectorAll(".lazy-image");

  function onIntersection(imageEntities) {
    imageEntities.forEach(image => {
      if (image.isIntersecting) {
        observer.unobserve(image.target);
        image.target.src = image.target.dataset.src;
      }
    });
  }

  const observer = new IntersectionObserver(onIntersection);

  lazyImages.forEach(image => observer.observe(image));
}
```

* First we create a `const` called `lazyImages`. We save all elements with the class `lazy-image` to this constant variable

* Next, we create an `onIntersection` function. In this function we state that for each mage, if the image is intersecting the viewport we load our image and stop observing it as it is now on screen.

* We used a constructor function to create a new instance of IntersectionObserver, saving it to a constant variable `observer`. This allowed us to use it in our `onIntersection` function.

* The final line subscribes all images to be observed by IntersectionObserver to it can download the proper image when the placeholder is scrolled into view.

### 18. Intro Final Activity (5 mins)

* Let students know they did a great job today. Web performance is important, and they now have a foundation to learn more and become great at optimizing applications.

* For the final activity of the day students wil take the completed gallery application and minify all of the JS.

### 19. Student Do: Optimize Gallery App (25 mins)

* Slack out the following [Solved Lazy Loading Gallery](../../../../01-Class-Content/18-web-performance/01-Activities/06-Stu_Gallery-Optimize/Solved)

* **Instructions**

* Now that you have implemented lazy loading into your application, you will take it the final steps of the way to being optimized.

* First, unzip the uncompressed images zip file found in `public/assets/images`.

* Now, run the program:

  * Start MongoDB (run `mongod` in your terminal)
  * In a new terminal window run `npm install`
  * `npm run seed`
  * `node server.js`

* Now that the application is running, navigate to the [localhost](<https://localhost:3000>)

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

### 20. Instructor Do: Review Final Gallery App (5 mins)

* Open [Solved Lazy Loading Gallery](../../../../01-Class-Content/18-web-performance/01-Activities/06-Stu_Gallery-Optimize/Solved)

* Run `npm install`

* When complete, run `npm install compression`

* Navigate to the `Solved/server.js`

* Add the following lines of code:
  
  ```js
  var compression = require("compression");

  app.use(compression());  
  ```

* Let them know that it is that simple to enable GZip compression of our served files.

* When it comes to the image compression, there are many tools that can help us achieve that. We used ImagOptim, but let them know they can research others.

* We will not go through the process of compressing all of the images, as we did that earlier in the class.

### 21. Instructor Do: End (0 mins)

* Congratulate students on beginning their journey into web performance. They learned a lot today, let them know they did a good job.
