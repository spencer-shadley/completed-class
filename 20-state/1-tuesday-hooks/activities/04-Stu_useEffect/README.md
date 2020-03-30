In this activity we will practice using the useState and useEffect Hooks in React by transforming a stateful class component into a functional component with React Hooks.

# Instructions

- Replace your React application's src folder with [Unsolved/src](Unsolved/src).

- If you created a new React app, you will need to install `axios` and `react-router-dom`.

- If you created a new React app you will need to add bootstrap CSS to `public/index.html`

  ```html
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"
  />
  ```

- Start the application in dev mode by running `npm run start` in your terminal.

- Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

- Update this application to accomplish the following:

  - Create a functional component in place of the class component

  - Replace `this.state` and all instances of `this.setState` using the `useState` Hook

  - Replace all component lifecycle methods with their Hook counterparts

  - Remove the search button and utilize the `useEffect` Hook to query every time the user inputs anything into the search bar
