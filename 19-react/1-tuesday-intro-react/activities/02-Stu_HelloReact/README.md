# Hello React

In this activity, we will dissect a simple React application.

## Instructions

- If you haven't already, generate a starter React app using Create React App. You can do this by running `create-react-app react-practice`. We will run all of the activity code today inside of this boilerplate, as to avoid constantly reinstalling the same node modules.

- Once you have a `react-practice` React app generated, delete the `src` directory inside of your starter app and replace it with the [src](Unsolved/src) provided with this activity.

- Start the app by running `npm run start` in your terminal, take a moment to study the HTML code being rendered in the browser at [http://localhost:3000](http://localhost:3000).

### React Developer Tools

- Install the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

- In your `create-react-app` server ([http://localhost:3000](http://localhost:3000)) open the Chrome dev tools, click the "Components" tab

  - Check out the React DOM tree presented

### `index.js`

- Open the `src/index.js` file and go over the code. Notice that we're importing the `ReactDOM` library. Try to answer the following questions:

  - What is the purpose of `ReactDOM.render`? What is it doing?

  - Is this where our components are rendered to the DOM?

  - Where is the `JSX`?

### `App.js`

- Open the `src/App.js` file, what's going on in this file? Try to answer the following questions:

  - What does the `App.render` function return?

  - Why do we import the React library? We aren't using the React keyword anywhere. Is it possible to remove this and still have our code work?

### `HelloReact.js`

- Then go into the `src` directory and with your group, try to answer the following questions:

  - What's happening inside of `src/components/HelloReact.js`? How does it relate to the content being rendered to the browser?

### Structure

- Instead of splitting our files up into `App`, `components/HelloReact` and `index`, is it possible to just write our entire Hello World app in the `index.js` file?

## Bonus

- Try updating the code and watch it change

- Try adding another component and `render`ing it as part of `App.js`

- Try adding yet another component and `render`ing it as part of `HelloReact.js`
