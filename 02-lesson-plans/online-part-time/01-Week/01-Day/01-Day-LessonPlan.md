## 1.1 - The Zen of Coding (6:30 PM) <!--links--> &nbsp;  &nbsp; [➡️](../02-Day/02-Day-LessonPlan.md)


* This lesson's slides are available on Google Drive here: [01-1 The Zen of Coding](https://docs.google.com/presentation/d/19HvuUj3w9ojU5o_c2LbM76dqH_3NQBdcHJceVJjewvM/edit?usp=sharing)

* To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Add the slide PDF file to your class repository along with other necessary files.

* **Note:** Editing access is not available for this document. If you wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

- - -

### Overview

Welcome to your first day of class! We will be working with the very basics of Terminal/Console and HTML.

`Summary: Complete Activities 1-3 in Unit 01`

##### Instructor Priorities

* Students should be exposed to the basic bash/terminal commands: `cd`, `ls`, and `mkdir`.
* Students should complete the "My First HTML Page" activity.

##### Instructor Notes

* Use the slide deck [01-1 The Zen of Coding](https://docs.google.com/presentation/d/19HvuUj3w9ojU5o_c2LbM76dqH_3NQBdcHJceVJjewvM/edit?usp=sharing) provided as an initial guide for today's class. During the first few weeks of class, we'll be using slide decks more extensively to give students a sense of structure. As we move further into the course, slide decks will be used less frequently as we dive into a more code-centric approach. Feel free to modify the slides to your own style, but be sure to cover the same activities.

* Have your TAs reference [01-Day-TimeTracker](01-Day-TimeTracker.xlsx) to help keep track of time during class.

- - -

### Class Objectives

* To introduce basic terminal/bash commands
* To create a basic HTML page

- - -

### 1. Instructor Do: Begin Slide Deck + Welcome (15 mins)

* Welcome students to class

* Open the slide deck [01-1 The Zen of Coding](https://docs.google.com/presentation/d/19HvuUj3w9ojU5o_c2LbM76dqH_3NQBdcHJceVJjewvM/edit?usp=sharing). Use it as a guide for the remaining sections, but keeping a close eye on your TAs to make sure you are keeping track of time. Be concise when you can!

* While we know some of us have already met and introduced themselves on Saturday, we want to make sure that everyone has a chance to introduce themselves. Ask students to use the raise hand function or send a message in slack if they were unable to attend Day 0 (Saturday) and have them introduce themselves on Zoom.

### 2. Students Do: Tech Check (5 mins)

* Make sure everyone is set up for the online class to start.

* Verify students are logged into Slack, can find the pinned rooms, and know how to raise hand in Zoom.

* Have TAs pull students into separate rooms if they need to troubleshoot.

### 3. Instructor Do: The Path of Learning (15 mins)

* The next series of slides is really meant to give students the "right" perspective coming in. This means letting them know that this program will not be a traditional college class. We're here to support them 100% of the way to really help them achieve their goals.

* To begin, take a few moments to assuage student fears of being a "beginner." Instead, let them know that having a humble attitude is the first requirement of being successful in this program. In a way, students should channel their inner toddler and recognize that "knowing nothing" and admitting such will allow them to dig their heels in and invest the time necessary to succeed. In a way, coding is like nothing else these students have attempted to do. Their mastery of other subjects, their educational backgrounds, and their professional successes do not guarantee that they will do well here. The only thing that will guarantee success is hard work, humility, and a relentless desire to be better. Recognizing how little you know is a  first step towards creating that urgency.

* From here, give students perspective on the "Path of Learning"—specifically warning them about three major obstacles:

  * First, learning to code is tough, intimidating, and frustrating at times. They should immediately forget about their uncle/brother-in-law/friend/step-sister who told them about so-and-so learning to build apps in 1 week. Coding is hard. It will take time. There is no way around that.

      ![3-PathofLearning_1](Images/3-PathofLearning_1.png)

  * Second, because of how hard this can be, there will be many moments where students will doubt themselves. Take this chance to help them overcome this obstacle ahead of time by building up their confidence. Tell them that you started just like they did, that it takes time but that they have what it takes, that they were selected for this program because we know they have what it takes.

      ![3-PathofLearning_2](Images/3-PathofLearning_2.png)

  * Lastly, because of the length of the program, personal issues WILL come up during the course of the program. The idealism and "can-do" attitude students enter with on day 1 will be challenged by the length of the course. Let students know that they should see each other as a family embarking on a long journey. They will become far closer to their peers than they realize. Intensity is no substitute for endurance.

* Then proceed to tell them that learning is supposed to be frustrating. It's a process, but they should stick with it.

* Then walk them through the advice on succeeding in the program.

### 4. Instructor Do: Course Structure (5 mins)

* Spend a few moments to walk students through the course structure.

* Point out that learning to code requires coding (not just sitting through lectures) so this program will very quickly become "code-centric." Let them know that there will be a mix of individual and group activities / projects.

- - -

### 5. BREAK (20 mins)

* There may be some students who decide to stay behind during break to troubleshoot problems that they had with the above material or to ask questions about the course. Try to assist those who are in need of help first so as to help them catch up with those students who did not face any issues.

- - -

### 6. Instructor Do: On the Modern Web (10 mins)

* Stay concise in this section! Don't overwhelm students. We're just giving them a taste.

* Ask students what they think "Full-Stack Development" is. Point out that they are all enrolled in a Full-Stack Development program... so it probably matters.

* Proceed to walk them through a basic Youtube search. Point out how the process of retrieving a video from Youtube requires two things, the Graphical User Interface (GUI) responding to what I type and also code on the server side that is able to search through its databases and find the right video.

* Point out how websites today are all about creating code for both this "frontend" and "backend".

* In this course, we'll be teaching them everything they need to be able to do this, meaning they will be able to build complex web applications as a single developer.

### 7. Instructor Do: Let's Get Crackin'—Intro to Console / Bash (15 mins)

* Open terminal / console. Then walk and explain to students what each of the following commands does.

  * `cd` (changes directory)

  * `cd ~` (changes to home directory)

  * `cd ..` (moves up one directory)

  * `ls` (lists files in folder)

  * `pwd` (shows current directory)

  * `mkdir <FOLDERNAME>` (creates new directory)

  * `touch <FILENAME>` (creates a file)

  * `rm <FILENAME>` (deletes file)

  * `rm -r <FOLDERNAME>` (deletes a folder, note the -r)

  * `open .` (opens the current folder. MAC SPECIFIC)

  * `open <FILENAME>` (opens a specific file. MAC SPECIFIC)

  * `explorer <FILENAME>` (opens the specific file. BASH SPECIFIC)

  * `explorer .` (opens the current folder. BASH SPECIFIC)

* Tabbing

  * Pressing the `tab` key after typing "cd fol" will autocomplete to "cd foldername", assuming foldername is unique. (Folder/Filename Autocomplete - Show students what happens when there are unique and multiple options based on what they typed.)

### 8. Groups Do: Console Commands (15 mins)

* Announce that students should switch to their breakout groups for discussions.

* Then slack out the following instructions to students (or show them the instructions via the slide):

* **Instructions:**

  * From the Terminal/Console and using only the command line, create the following:
    * A new folder with the name of first_day_stuff
    * A new HTML file with the name of first-day.html
  * Open the current folder containing the new HTML file.

  * BONUS:
    * Create multiple directories/folders with the names `one_folder` and `second_folder` in one command.
    * Create multiple files with the names `one.html` and `two.html` in one command in the first_day_stuff directory.

### 9. Instructor Do: Console Commands Solution (15 mins)

* Bring students back to the Main Room by closing all breakout rooms.

* Share your terminal window and demonstrate the following:

* Creating a new folder named first_day_stuff
* Creating a new HTML file named first-day.html
* Navigate to the newly created folder containing the new HTML file and show the class.
* Create multiple directories/folders with the names `one_folder` and `second_folder` in one command.
* Create multiple files with the names `one.html` and `two.html` in one command in the first_day_stuff directory.

### 10. Groups Do: Discuss with Group (10 mins)

* Announce that students should switch to their breakout groups for discussions.

* Slack out the following topics for them to discuss.

  * Discuss with your group the process of creating files, removing files, etc.

  * Take turns explaining to your group a high-level definition of "full-stack development."

* When the students re-enter the mainroom, have them explain the answers back to you.

* **Instructor Note**: Activity 2 is not covered in the part time course. The next section will move to Activity 3.

### 11. Instructor Do: Hello, HTML (5 mins)

* Create a new HTML file in Sublime. Have students follow along if they can, but tell them not to get too bogged down if they are having trouble keeping up. They will have a chance to work on an example of their own a little later.

* Use the code in `03-my-first-html` as a guide. Be careful not to open the bonus file yet—that's for the next activity.

  * **Don't just display this file or copy and paste the code onto your screen.** Type it out, and let your students follow along.

* As you code, be sure to point out the prominent elements like `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, `<h1>`, the links, etc.  

* Then run the page and point out to students how the elements in the program compare to those on the web page.

    ![6-HTML_2](Images/6-HTML_2.png)

* Ask if there are any questions before proceeding to the student exercise.

### 12. Students Do: Intro to HTML (10 mins)

* Keep your HTML code from the previous exercise available for them to see while they work, but don't send them the code just yet.

* Then slack out the instructions:

* **Instructions:**

  * In a new HTML file, create the basic structure of an HTML document and include the following in it:

    * DOCTYPE declaration
    * Head tag with a title tag
    * H1 tag with a title of your choice
    * Embed an image
    * Create the following three links on your page:
      * One link that is `target="_blank"` so that it opens a new tab when clicked on.
      * Make the second link bold.
      * Make the third link a placeholder so it goes nowhere.

  * HINT: You should be looking up at the screen pretty often :P

  * Bonus:
    * Create an ordered list of steps to make a sandwich.
    * Create an unordered list of 5 bands/musicians you like.
    * Create a table with 2 columns (animal class and animal name) and 4 rows of animals.
    * Use an alternate way of separating links without line breaks.
    * Embed a Youtube video of your favorite band/musician.

### 13. Instructor Do: Review HTML Solution (10 mins)

* Open the file `my-first-html-with-bonus.html`, and walk students through the solution. As you discuss the solution, be sure to point out the following:

  * Key elements like `<!DOCTYPE html>`, `<html>`, `<head>`, `<h1>`, the links.

  * Good indentation practices. In fact, if you have time, unindent everything by highlighting everything and hitting `ctrl-j` and then re-running the code. Explain that the code will still work but that it's awful to read and maintain. Build good practices now!

* Give students a few moments to ask questions.

### 14. Instructor Do: Introduce Supplemental Videos (5 mins)

* Introduce your class to the `videoguide.md` which we have crafted for them to use in order to review important coding activities (like the one they have just completed) and future homework assignments.

* Let them know that these videos will be slacked out to everyone after the class has reviewed the activity but that they should save watching the videos for when they get back home and have some free time.

* Homework videos will be slacked out after the deadline for the assignment has passed.

* Each video also has a form within the description for feedback which we would appreciate that they fill out if they think anything in the video needs improvement.

* Slack out [Lesson 1.1 - My First HTML](https://www.youtube.com/watch?v=ieb6Svbc10E).

### 15. Instructor Do: Demo Homework 1 (5 mins)

* Open recommended/easy homework `index.html` files in Chrome.

* Let students know that this will be the first homework assignment of theirs. It will be due on Wednesday/Thursday of the following week. More details will come at the next class.


### 16. End (0 mins)

- - -

### Copyright

Coding Boot Camp © 2016. All Rights Reserved.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=lo&sentiment=positive&lesson=01.01)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=lo&sentiment=negative&lesson=01.01)
