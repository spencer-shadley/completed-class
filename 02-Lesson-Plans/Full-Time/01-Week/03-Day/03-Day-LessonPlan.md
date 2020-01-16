# 01.3 Lesson Plan - Heroes of CSS (10:00 AM) <!--links--> &nbsp; [⬅️](../02-Day/02-Day-LessonPlan.md) &nbsp; [➡️](../04-Day/04-Day-LessonPlan.md)

## Overview

In today's class, we'll be covering the bulk of CSS layout and positioning techniques. We'll also be touching on relative file paths.

We're also focused on empowering students with GitHub Pages for live deployments.

## Instructor Notes

* `Summary: Complete Activities 10 & 11 in Unit 01 and Activities 1-6 in Unit 02`

* Way to go, you made it -- Hump day! Not to unnerve you, but today is one of the most challenging class sessions you'll have in the entire program. There's a lot to cover, it's easy to get side-tracked, and students' nerves are running high.

* In this class session we'll be providing students with a deep dive into CSS positioning and layouts. Many of the concepts and exercises will be frustrating to students, and it will be your responsibility to continually remind them that these concepts will start sticking over time.

* In order to keep motivation high, we're suggesting you use the following approach for the more challenging exercises. As students complete the exercises, they should message the TA. The TA will then call on the class and ask, "Who needs help?" The TA will then send the student who is done to the student in need. As an instructor, let all students know that being able to help fix others' bugs is a big part of being a good developer.

* If there is time and you see a need, you may even want your TAs to share their own experiences learning HTML/CSS for the first time. Have them offer context on how long it's taken to feel competent.

* **Important to note**: At this point in the program, students can still drop at no cost to themselves, making this period an ultra-critical one. Make sure students feel motivated. If you or a TA see any student getting visibly frustrated, walk over and try to offer extra support.

* **Also Important**: Feel free to add in slides to the slide deck with any due dates for your class.

* Also, later in this class, your focus as instructors/TAs is to ensure students are able to utilize Github Pages to deploy their websites. Going forward from today, students will be expected to submit Homework with links to both their GitHub repository and a live deployed website. Be ready to have your troubleshooting hat on for helping them debug deploys, as the surface area for problems is somewhat large.

## Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a2e0037f-9a39-4942-83bb-3b555d224a64)

## Learning Objectives

* Recap the basic topics covered to date
* Engage in a deep dive of HTML/CSS for layout design and element positioning
* Offer a conceptual introduction to CSS reset and downloadable style sheets
* Work with Google Developer tools for site inspection
* Utilize Github Pages for website deployment

## Slides

* [1.3 Heroes of CSS](https://docs.google.com/presentation/d/1KZAUUZv3TfMkQ0WvN3kJejCbm5EZcr9vqVWGM7x_WUA/edit?usp=sharing)

## Time Tracker

* [1.3 Time Tracker](https://docs.google.com/spreadsheets/d/10aVn2TGj08ji_fJ0G2sKhfS7EprRXF2Frvs-9punxN8/edit?usp=sharing)

- - -

### 1. Instructor Do: Welcome + Admin Tasks (Slides) (5 mins)

* Open the Slide Deck [01-3 Heroes of CSS](https://docs.google.com/presentation/d/1KZAUUZv3TfMkQ0WvN3kJejCbm5EZcr9vqVWGM7x_WUA/edit?usp=sharing).

* Welcome students back to class and flip through the Admin slides.

* Be sure to encourage students to submit something for the homework assignment, even if it's not great. The point is to get in the habit of submitting. Also... it's mandatory to receive career services that they miss no more than two.

### 2. Instructor Do: Warning Monologue + Reassurance (Slides) (5 mins)

* Start today's class by first warning them in advance that today's class is going to be **hard**. Let them know that what makes today's class hard isn't anything deeply confusing conceptually but that it will be hard because it's so unfamiliar.

* Offer something like the below monologue (or your own variant):

  > Remember, learning is "FRUSTRATING." You're not behind if you don't get all of this today. The point is to take in as much as you can now. Get immersed, and then push yourself on the homework assignment. It may not click for many weeks. But trust us. Looking back, it WILL CLICK far more quickly than you'll believe.

### 3. Instructor Do: CSS Recap (Slides) (10 mins)

* Quickly recap the concepts behind CSS.

* Have students answer any questions on screen to those closest to them. (Get them comfortable with helping one another.)

* The point here is to just give students a refresher. Let them know we will be building our CSS skills for the next few weeks so there is plenty of time to get good at it.

### 4. Instructor Do: CSS Positioning (Slides + Demo) (15 mins)

* Go through the slides on CSS Positioning one by one.

* Point out the differences between the various position types:

  * `relative`: Positions elements relative to their static location in the document. These elements behave with and interact with other elements the same way they would as if they were positioned statically, except that you can use the `top`/`right`/`bottom`/`left` properties to move the elements _after_ they have been placed into the document flow.

  * `absolute`: Positions elements relative to the nearest positioned ancestor (non-`static`). They are taken out of the flow of the document, taking up no space when placing other elements. These elements will move in the viewport as you scroll (unlike fixed).

  * `fixed`: Positions elements relative to the top left of the browser window. Similar to `absolute`, except the containing block is the whole viewport. These elements will remain in the same place in the viewport as you scroll.

  * `z-index`: Allows us to position elements on top of one another.

  * `display: none`: Allows us to hide specific elements from the view. Useful because it can activate and deactivate elements. (Compare with `visibility: hidden;`, which also hides elements but not the space they take up.)

* When prompted for the `Demo Time`, open [10-CSS_PositionedLayout/main.html](../../../../01-Class-Content/01-HTML-git-CSS/01-Activities/10-CSS_PositionedLayout/main.html) in both the browser and in your editor.

* Point out that this currently uses static (default) positioning.

    ![3-Positioning_1](Images/3-Positioning_1.png)

* Then go through the process of changing the active stylesheet so that each of the other forms of positioning are used.

* If asked about the `reset.css`, feel free to say something along the lines of

  > We'll talk about the reset more in the next class, but for now just know it makes it so that the default browser `padding`s and `margin`s don't exist (that way we can more easily see the effects of positioning).

* Show students both the CSS used and the impact on the HTML.

  ![3-Positioning_2](Images/3-Positioning_2.png)

  * Demo that `top`, `left`, `bottom`, and `right` only work on positioned elements, not static ones. You can demonstrate this by using chrome dev tools to set `position: static;` on one of the boxes.
  * Point out also that the elements following the relatively positioned elements (boxes 2-4) behave as if box 1 were in its static position. Explain that this is because `top`/`right`/`bottom`/`left` properties are applied only _after_ the element has been placed in the document flow.

  ![3-Positioning_3](Images/3-Positioning_3.png)

  * When discussing absolute positioning, demo removing the `position: relative;` in-browser with the developer tools. Show them that it will absolutely position based on the nearest positioned ancestor, using the viewport as the basis if none of the ancestors are positioned (demo this by removing the positioning on `.box-set`).
  * Depending on time, You may also want to show how the elements pile on top of each other if you remove the `top`/`left`/`bottom`/`right` properties - this demonstrates that the elements are removed from the flow of the document.
  * `absolute` is worth spending a little bit more time on, as it arguably the most complex (and sets the tone for `fixed` positioning)

  ![3-Positioning_4](Images/3-Positioning_4.png)

* Slack students the entire folder (zipped) when done with this activity.

### 5. Partners Do: CSS Positioning Activity (30 mins) (Critical)

* Introduce the next activity. Either by using the slide or by opening the file 
[11-CSS_Positioned_Activity/positioning.html](../../../../01-Class-Content/01-HTML-git-CSS/01-Activities/11-CSS_Positioned_Activity/Solved/positioning.html) 
in the browser, show students what they will be building in the next activity.

![4-PositioningActivity](Images/4-PositioningActivity.png)

* Then Slack out the following instructions.

  * **Instructions:**

    * Work with the same or different partners on this activity, but make sure each member of the group is typing out their own code!

    * Create a file called `positioning.html` and a file called `positioning.css`.

    * Using HTML/CSS, create the layout shown on the screen.

    * For reference, the colors used on the screen are `#eee` and `#999`.

    * For further reference, you can generate paragraphs of lorem ipsum text using <http://www.lipsum.com/feed/html>. You need to make this page scroll to see how the fixed position element behaves.

    * HINT: Use the code from the last few activities to help get you started.

### 6. Instructor Do: Review CSS Positioning (10 mins)

* Discuss the solution from the previous activity. When appropriate, have students help explain code back to you. (Example: You may ask students to help you comment various pieces of the code.)

* Key points in describing the HTML:

  * How we created a `div` to hold our content.

  * How we created `divs` to hold the `fixed`, `relative`, and `absolute` content.

  * How we used specific `id` tags to attach the CSS to.

     ![4-PositioningActivity_2](Images/4-PositioningActivity_2.png)

* Key points to explain in describing the CSS Solution:

  * How we once again used **border-box** (this just means that the width and height won't include the margin. Not a big deal).

  * `#fixed` element has a position of `fixed`.

  * Wrapper has a set `width`.

  * `#relative` and `#absolute` have the relative position values.

     ![4-PositioningActivity_3](Images/4-PositioningActivity_3.png)

* See if there are any lingering questions. Then Slack out this solution. Let students know to try and re-practice this activity at home. It's a good one.

### 7. Instructor Do: Video Guide Emphasis (1 min)

* Re-emphasize all of the reasons why the video guides could be of use for the students, and also let them know that you will be Slacking out a complete "Video Guide" after today's lessons. That way they have an easy way to access the videos.

* Slack out videos [Positioning in CSS](https://www.youtube.com/watch?v=sHfJn0jqBro) and [CSS Positioning Layout](https://www.youtube.com/watch?v=yWXgnQaWSW0).

### 8. Instructor Do: Intro to Chrome Inspector (10 mins)

* Finally go through the process of explaining to students how to use the Chrome Inspector. Encourage them to follow along.

* Visit www.google.com. Then right click on the screen and hit "Inspect."

* Then click the Element Selector and begin clicking on elements on the page. Show students how this then highlights the relevant HTML/CSS.

* Then show them that you can change any element on the page. As an example, try to change the HTML text inside of the `Google Search` button to something else.

    ![5-ChromeInspector_1](Images/5-ChromeInspector_1.png)

* Then show them that you can also change the CSS as well using the style pane.

    ![5-ChromeInspector_2](Images/5-ChromeInspector_2.png)

* Let them know that this is a powerful tool for developing your own websites and for understanding how other websites work.

* Let them know that we will be using Chrome Inspector much more in the classes to come.

* Ask if there any questions.

- - -

### 9. LUNCH BREAK (30 mins)

- - -

### 10. Instructor Demo: Google Developer Tool (10 mins) (High)

* Talk about Google Developer Tools again. Mention that it is incredibly important for developers. Then walk students through a demo of its use when prompted. Be sure to point out how Google Developer Tools can be used to change both:

* HTML Elements

* CSS Elements (show them how to change the box model in particular)

  ![1-ChromeDeveloperTools](Images/1-ChromeDeveloperTools.png)

### 11. Students Do: Modify Websites (10 min) (Critical)

* Then Slack out the following activity:

* **Instructions:**

  * For the next 15 minutes, take a website that you commonly use (Amazon, Google, Huff Po, etc.) and heavily modify it using the Chrome Developer Tools.

  * Be sure to at least modify:

    * Content (Change words)
    * Colors
    * Spacing
    * Etc.

  * Slack out a screenshot to the class when you’re done.

* **Instructor/TAs:**

  * Walk around during this time and ensure that students are making progress.

  * Remember students can still drop-out! Help them to enjoy fun activities like this.

  * Once the activity is complete showcase a few of the students' creations on the screen for everyone to see.

### 12. Students Do: Modify Own Websites (10 mins) (High)

** Then Slack out the following activity:

* **Instructions:**

  * For the next 10 minutes, take a website that you yourself worked on (ex: In-Class activities, homework assignments, etc.), and utilize the Chrome Developer Tools to help you test changes in real-time.

  * Note: Focus on getting more comfortable using the Developer Tools. Trust us. You will WANT to use these Developer Tools as you proceed in this course.

### 13. Instructor Do: Multiple CSS/CSS Resets (10 min)

* Take a few moments to explain that CSS can be loaded in multiple files, each of which is additive on the last. To assist you in this regard, see the examples in [03-MultipleCSS](../../../../01-Class-Content/02-css-bootstrap/01-Activities/03-MultipleCSS)In each example, the CSS file is split between 1, 2, or 3 files. In each instance the end result is the same.

```html
<!-- This critical line points your HTML to the CSS file. Notice the "relative" pathway -->
<link  rel="stylesheet" type="text/css" href="style.css">
<link  rel="stylesheet" type="text/css" href="style2.css">
<link  rel="stylesheet" type="text/css" href="style3.css">
```

* Point out to students that the order matters, and that later CSS files will "overwrite" previous ones if there is a repeat. Feel encouraged to demonstrate this by modifying the examples in `03-MultipleCSS`.

* Have students first show by hands the browsers they use.

* Then proceed to the series of slides on reset.css and browser differences. Point out that as of now, each browser determines for itself how things like headers, paragraphs, and tables should look. The font and thickness is all pre-set by the browser. This can create situations where your website will look one way in one browser and another way in another browser.

* After pointing out that browsers work differently in how they render pages, emphasize that cross-browser compatibility is critical in web development. This is particularly important when you are creating an app with millions of users.

* Point out that you can incorporate a `reset.css` file, made available online, that ensures your site will look the very same in different browsers. (It resets any default styling that the browser adds.)

* Then demonstrate the use of a CSS reset. To do this:

  * Open the file `example.html`

  * Then Google Search "CSS reset". The first link will be one found on the meyerweb website. <http://meyerweb.com/eric/tools/css/reset/>.

  * Copy the CSS made available on that site and paste it into your editor. Save that file somewhere locally on your computer.

  * Then link the CSS file into the HTML.

  * Run the HTML file again in browser and point out how it has been stripped of any pre-built browser styling, thereby allowing you to style everything from scratch.

    ![3-ResetCSS](Images/3-ResetCSS.png)

  * Then point out that `reset.css` is important because of:

    * Cross Browser Compatibility

    * Ability to use pre-made CSS from someone else (an idea we will exploit repeatedly)

    * It's a common front-end question

### 14. Students Do: CSS Resets (10 min)

* Slack out the following instructions to students.

  * Slack out the files inside [04-ResetCSS](../../../../01-Class-Content/02-css-bootstrap/01-Activities/04-ResetCSS)

* **Instructions:**

  * Follow the instructions in the HTML document to incorporate a reset.css file into a basic HTML file.

  * Note the impact the reset file makes after its inclusion.

  * Hint: You should be using the CSS made available on this link: <http://meyerweb.com/eric/tools/css/reset/>

  * Bonus: Incorporate a CSS reset into any page you've worked on to date.

### 15. Instructor Do: Deploying to GitHub Pages - Personal (10 mins)

* Now that our class has created a few basic webpages locally, it's about time we started putting these pages online for the world to see. In order to do this, we are going to be hosting our websites on GitHub Pages.

* Spend a few moments explaining the concept of "deployment", namely the idea that as of yet, students' websites have only been accessible on their own computers. In order for their websites to be accessible by the public, it needs to be deployed on a server.
  * Explain to the class what the concept of a "host" is.
  * A web host is the activity or business of providing storage space and access for websites. You cannot put a website online without it being hosted on a server somewhere.

* Open up the [GitHub Pages website](https://pages.github.com/) and explain how it essentially allows us to turn GitHub repositories into live webpages without having to worry about pushing our code to another web host provider.

* GitHub Pages allows you to create two different types of sites (we will be going over both methods):
  1. Personal/organization sites for your account
  2. Sites that are specific to a project/repository

* Start out with a walk through of the first method: creating a personal website using GitHub Pages.
  1. Create a new repository on GitHub called `_username_.github.io` where `_username_` is your account name on GitHub.
  2. Next, open up Git Bash or Terminal on your computer. Navigate into the folder that you would like to store your project in and then clone the repository you just created.
  3. Within this new folder, add an HTML file called `index.html` which contains the code for the website you would like to publish.
  4. Add, commit, and push your changes to the repository and... That's it! Whenever anyone navigates to `_username_.github.io` they will now land on your webpage!
  5. Navigate to the website on your browser to show your class that the webpage is now fully online.

* Recap the steps for deploying to GitHub Pages one more time before continuing onto the next activity.
  1. Create a new repo that is named `_username_.github.io`
  2. Navigate into a folder and clone the repo into it
  3. Add an HTML file named `index.html` and code out your webpage
  4. Add, commit, and push your changes into the repository

### 16. Students Do: Deploying Personal Bios to GitHub Pages (15 mins) (Critical)

* For this activity, students will be deploying the bio pages they made in the last activity to Github Pages.

* **Instructions:** [05-GithubPagesPersonal/README.md](../../../../01-Class-Content/02-css-bootstrap/01-Activities/05-GithubPagesPersonal/README.md)

### 17. Instructor Do: Deploying to GitHub Pages - Projects (15 mins)

Not every website can be a personal website, however, as there are many times in which we will want to create websites that are customized for specific projects. Luckily for us, GitHub Pages includes a VERY simple way to deploy webpages for individual projects as well!

* Walk through the steps required to create a website for a specific repository...

  1. Create a new repository on your GitHub account. You can name this repository whatever you would like.
  2. Once inside of the repository, create a new file and name it `index.html`
  3. Add some very basic HTML into this file, save it, and then navigate into your repository's Settings tab.
  4. Scroll down to the GitHub Pages section and then, in the section labeled "Source", select that you would like to use the master branch as your source.
  5. Navigate to `_username_.github.io/_repositoryname_` and you will find that your new web page has gone live!

* It is very likely that your students will be wondering how to get a custom domain for their projects as opposed to a site that is clearly linked to their GitHub account...

  * Mention that custom domains are more heavily coveted since they are more easily searchable online. This means that custom domains have to be purchased from companies known as "DNS Providers". These companies allow users to buy and register unique domain names and connect that name to an IP address. **GitHub Pages does not sell domain names.**

  * Tell your students not to worry about custom domains at this time since it is not necessary for the web work that we will be doing. If they really wish to link a webpage of theirs to a custom domain, however, GitHub Pages has great documentation on how to go about doing this.

### 18. Students Do: Creating a Project Site (15 mins) (Critical)

* For this activity students will be creating a web page to display and explain a data science project they've already completed. Students will deploy the HTML to a github pages project page.
* **Instructions:** [06-GithubPagesProject/README.md](../../../../01-Class-Content/02-css-bootstrap/01-Activities/06-GithubPagesProject/README.md)

### 19. Group Do: Homework 1 (30 mins) (High)

* Allow the next 50 minutes to be used for the first homework assignment.

* Students may want to partner up to work through things together.

* If students seemed to struggle today, you can use this time to review difficult topics or spend more time on one of the class activities rather than on homework. 

### 20. Instructor Do: Recap (5 mins)

* Instructor should offer an overarching perspective on what was covered. As a bullet list you could use the following:

  * Today we covered the basic gist of how to use CSS to create position + layouts.

  * If you're feeling lost, don't worry. It's normal. At the very least, you should feel more comfortable attaching CSS to specific elements. Don't worry if you can't create CSS layouts off the top of your head just yet. It comes with time.

  * But if you know how to attach CSS to a class, id, or header, you should feel pretty proud of yourself.

  * Trust us in saying that you will surprise yourself by how much you know.

### 21. End (0 mins)

### Troubleshooting Guide

* Below is a list of the most common issues that students present when trying to do Github Pages deployments.

* **Forgetting to git "add -A, git commit -m":** Often students will completely skip the step where they save and commit their changes prior to pushing to GitHub. This will mean their web page is essentially blank. As a starting point, ensure their code is present in GitHub.

* **Didn't name the repo correctly:** Students will likely not name the repository for their custom site correctly - ensure it follows the pattern `_username_.github.io`.

* **Images and/or CSS not appearing:** All filenames and paths are case sensitive. Ensure that all links in HTML are using case-sensitive paths that match the folder directories casing.

* **Not using relative paths:** Many students are still using absolute paths to reference their CSS or image files. Help them to convert these to relative paths.

* **Not knowing where their site deployed:** Show students that they need to login to the site and they will see the new app deployed on their menu. Give them guidance as to what the URL for their repo will be.

* Beyond that... Good luck!

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
