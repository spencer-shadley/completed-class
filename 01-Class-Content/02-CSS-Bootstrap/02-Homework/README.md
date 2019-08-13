# Unit 02 CSS and Bootstrap Homework: Responsive Portfolio

Responsive design ensures that web applications render well on a variety of devices and window or screen sizes.  In this homework assignment, your challenge is twofold: build a responsive portfolio using Bootstrap and convert a non-responsive site into a responsive portfolio.


## Instructions

If you opted to do the wireframe (easier) assignment for last homework or if you struggled with the portfolio design, ask a member of the instructional staff to provide you with the solution files. This will provide a starting point for the current assignment.

Create two different versions of a portfolio:

* For the first version, use the Bootstrap CSS Framework to create your portfolio.

* For the second version, enhance the portfolio you made last unit with a mobile-responsive layout.

Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

```
As a developer
I want to create a responsive portfolio
so that I can showcase my applications to potential employers and clients on multiple screens and devices
```

### Bootstrap Portfolio Instructions

How do you deliver this? Here are some guidelines:

* Create the following pages: `index.html`, `portfolio.html` and `contact.html`.

* Using Bootstrap, recreate your portfolio site with the following items:

   * A navbar

   * A responsive layout

   * Responsive images

* The Bootstrap portfolio should minimize use of media queries.

![](./Assets/04-web-APIs-homework-demo.gif)


### Hints

* Use Bootstrap's grid system (containers, rows, and columns)

* On an `xs` screen, content should take up the entire screen. On `sm` and larger screens, you should have some margins on the left and right side of the screen. Check out various sites on your mobile device versus your computer to see examples of these differences.


## Minimum Requirements

* Functional, deployed application

* GitHub repository with README describing project


## Bonus

* Using Bootstrap, make a sticky footer and use sub-rows and sub-columns on your portfolio site _(Hint: Check out the Bootstrap documentation)_


### Mobile-Responsive Portfolio Instructions

How do you deliver this? Here are some guidelines:

* Use the files from your `Basic-Portfolio` (your first homework solution): `index.html`, `portfolio.html` and `contact.html`.

* If you chose the `Wireframe` exercise for your first homework assignment, talk to a TA, who will provide you with a template for your portfolio.

* Write your media queries at the bottom of your stylesheet.

* Use three `@media screen` tags, each with one of these `max-width`s: `980px`, `768px` and `640px`.

   * You use `980px` because you never want any of the content to be cut off. Since the desktop layout is about 960px wide, you want the media queries to kick in before your content gets cut off.

   * `768px` is about the width of a tablet and `640px` is about the width of a phone in landscape.

* Make the layout match the following screenshots:

   * `index.html`: [980px](./Assets/Images/980-index.jpg), [768px](./Assets/Images/768-index.jpg), [640px](./Assets/Images/640-index.jpg)

   * `portfolio.html`: [980px](./Assets/Images/980-portfolio.jpg), [768px](./Assets/Images/768-portfolio.jpg), [640px](./Assets/Images/640-portfolio.jpg)

   * `contact.html`: [980px](./Assets/Images/980-contact.jpg), [768px](./Assets/Images/768-contact.jpg), [640px](./Assets/Images/640-contact.jpg)

* Make the position of the header `static` (the default positioning) when the screen is `640px` wide. The header design takes up a lot of room; you don't want it to stick to the top of a small screen and leave no room for the rest of your site.

* Be sure to include the `viewport` tag in all your HTML files, otherwise your media-queries won't function as expected on mobile devices. _(Hint: You won't need to use exact pixels for anything other than the container)_


### Hints

* Use the Chrome extensions [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh) and [Browser Width](https://chrome.google.com/webstore/detail/browser-width/mlnegepkjlccabakompdmbcmdieaideh) to see the browser dimensions in Chrome.


## Minimum Requirements

* Functional, deployed application

* GitHub repository with README describing project


## Bonus

* Incorporate CSS animations in your portfolio. [More info here](http://www.w3schools.com/css/css3_animations.asp).


## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your code base in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!


## Submission on BCS

You are required to submit the following:

* The URL of the deployed application

* The URL of the GitHub repository


---
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
