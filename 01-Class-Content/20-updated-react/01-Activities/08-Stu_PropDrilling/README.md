# Prop Drilling

In this activity we will review passing props down the component tree in React.

## Instructions

* Replace your React application's src folder with [Unsolved/src](Unsolved/src).

* Install axios by running `npm install axios` in your terminal.

* **Recommended:** Add the Bootstrap and Font Awesome CDNs to your application's `index.html` file:

  ```html
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" />
  ```

* Start the application in dev mode by running `npm start` in your terminal.

* Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

* The `API.loadUsers()` function returns an array of users that follow this format:

  ```js
  [
    {
      firstname: "will",
      lastname: "smith",
      email: "will.smith@example.com",
      language: "JavaScript",
      image: "https://randomuser.me/api/portraits/med/men/65.jpg",
    }
  ]
  ```

* Update this application to accomplish the following:

  * The card on the gallery page should contain an image of the user, their programming language, and arrow buttons that allow for navigation through different users.

  * The props should be passed through each component layer in the following manner:

    * title (firstname & lastname): Gallery > CardContainer > Card > CardHeading > CardTitle > CardTitleText

    * image: Gallery > CardContainer > Card > CardImage

    * email: Gallery > CardContainer > Card > CardBody

    * language: Gallery > CardContainer > Card > CardBody

    * handleClick: Gallery > CardContainer > Card > CardBtn

  * Each arrow click should *not* make an additional API call.

### Hints

* Remember, `useState` is a great way to store information that your application may later need.
