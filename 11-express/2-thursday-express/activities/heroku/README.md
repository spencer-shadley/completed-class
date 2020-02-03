# Instructions

Login into your Heroku account. If necessary, create a new account or if you forgot your password reset it.

# Troubleshooting Guide

- **"add -A, git commit -m":** Make sure all of your code is up on GitHub so that Heroku can read it

- **Images and/or CSS not appearing:** All filenames and paths are case sensitive. Ensure that all links in HTML are using case-sensitive paths that match the folder directories casing.

- **Not using relative paths:** Make sure to use relative paths for your CSS, JS, or image files.

- **Not knowing where the site is deployed:** You need to login to the site to see the new app deployed on your menu. Go to Settings and scroll until you see the "Heroku Domain".

- **Heroku Login not working on Windows:** For first time Windows Users, you need to use `cmd.exe` to login to Heroku. If you do not do this, bash will likely prevent you from logging in and you will be unable to proceed with Heroku Steps.

- **More than five Heroku apps:** As you progress in the course, you will have many more Heroku apps. Once you get to five apps, Heroku requires users to authenticate their identity with a credit card. This credit card won't be charged, but its a requirement to have more than five active apps.

- **Not using environment variable for port:** Update you're getting the port the app is listening on from `process.env.PORT`.

- **Not having start script in `package.json`:** Make sure you have a start script in the `scripts` block of your `package.json` file and ensure you can run `npm start` to start up your server.

- **Not having production dependencies in `package.json`:** Ensure that any required packages are listed in the `dependencies` block in the `package.json` file.

# Resources

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
- [Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
- [Scotch.io Heroku Node Tutorial](https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku)
