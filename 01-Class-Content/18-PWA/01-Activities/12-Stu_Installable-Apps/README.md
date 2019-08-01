# Making Your App Installable

In this activity you will install your PWA on your computer and mobile device.

## Instructions

### Part One: Installing On Desktop

   1. Open Chrome Menu

   ![Install 1](Images/install-1.png)

   2. Install

   ![Install 1](Images/install-2.png)

   3. See Your App Successfully Installed

   ![Install 1](Images/install-3.png)

### Part Two: Installing On Mobile

* In order to install your app on your phone you are first going to push it to Heroku.

   1. Create A Heroku App by running `heroku create`

   ![Create App](Images/heroku-1.png)

   2. Install `mlab`

   3. Run `heroku addons:create mongolab`

   ![Create App](Images/heroku-2.png)

   4. After updating both files, add and commit your code.

### Part Three: Push and Seed The Application

   1. Run `git push heroku master` followed by `heroku run npm run seed` in your terminal.

   ![Heroku Seed](Images/heroku-4.png)

### Part Four: Install The Application

   1. Visit the deployed application in your web browser.

   2. Click the share button on your mobile device.

   ![Click Share](Images/download1.png)

   3. Add The App To Your Homescreen

   ![Download](Images/download2.png)

   4. See the app installed on your device!

   ![Verify App Install](Images/download3.png)
