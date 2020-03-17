# About

Try out this optional homework if you'd like to just review and practice all that we've learned so far.

This HW is designed to build a small CRUD application using Node, Express, Handlebars and Sequelize.

Each part will walk you through building the application, starting at the database, then backend and finally front-end.

Try to code this yourself, ignoring the code unless you are **completely** stuck

## Part 1 - Basic Server

### Start a Server

- Before we can do anything we need a server which can stand-up

- Create a new git repository

- Run `npm init` to initialize your module

- Create a `server.js` file on the root of that application which prints "Hello, world!" when started with Express

- Make sure this works before continuing to the next part!

`server.js`

```js
const express = require(`express`);

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => console.log(`Hello, world!`));
```

### Routes

#### Add Routes

- Add a route to `server.js` that says "hey, you hit my route!" when the client makes a GET request to "/myroute"

  - Start your server, open a browser and navigate to "/myroute" to make sure you get that data back

- Add another route to `server.js` that sends this HTML `<h1>I'm HTML!</h1>` back to the client when a GET request is made to "/myhtml"

  - Hint: All you need is `res.send` to send HTML (don't use handlebars, make a file, or anything like that)

  - Start your server, open a browser and navigate to "/myhtml" to make sure you get nice large "I'm HTML" back

`server.js`

```js
const express = require(`express`);

const PORT = process.env.PORT || 3000;

const app = express();

app.get(`/myroute`, (req, res) => {
  res.send(`hey, you hit my route!`);
});

app.get(`/myhtml`, (req, res) => {
  res.send(`<h1>I'm HTML!</h1>`);
});

app.listen(PORT, () => console.log(`Hello, world!`));
```

#### Organize Routes

- There can be a lot of different routes in an app. Let's make a new "routes" directory to help organize them.

  - Inside that directory let's further divide our routes into "HTML" and "API" routes. "HTML" will be for sending HTML to the browser and "API" will be for more custom data-based requests. These are two very different use cases so it makes sense to split them into separate files.

  - Inside your "routes" directory make an `html-routes.js` file and an `api-routes.js` file.

  - Move "/myhtml" to `html-routes.js` and "/myroute" to `api-routes.js`

  - These files depend on `express` started in `server.js`, we will need `server.js` to pass us the `app` to be able to handle these routes. Wrap your routes in `module.exports = app => {}` so that we can import (require) them in `server.js`

  - Import (`require`) your routes in `server.js`

  - Call the exported function from each of your routes files, passing in the express app

`server.js`

```js
'use strict';

const express = require(`express`);

const apiRoutes = require(`./routes/api-routes.js`);
const htmlRoutes = require(`./routes/html-routes.js`);

const PORT = process.env.PORT || 3000;

const app = express();

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, () => console.log(`Hello, world!`));
```

`routes/html-routes.js`

```js
'use strict';

module.exports = app => {
  app.get(`/myhtml`, (req, res) => {
    res.send(`<h1>I'm HTML!</h1>`);
  });
};
```

`routes/api-routes.js`

```js
'use strict';

module.exports = app => {
  app.get(`/myroute`, (req, res) => {
    res.send(`hey, you hit my route!`);
  });
};
```

## Part 2 - Database and Sequelize

Now that we have a server running with some routes setup, we can work on setting up our database. The client will talk to our server and our server will talk to a database.

Full flow: client > server > sequelize > SQL > database

### Sequelize Setup

- To use sequelize we will need to first create models which represent our data

- The next step would normally be to create a `models` directory, however, it can be tedious to deal with configuration and imports when we have many models. Instead, we can auto-generate the setup and configuration of our models using `sequelize-cli`.

- Install our `sequelize` dependencies

  - `npm install --save-dev sequelize-cli`

- Initialize our config

  - `npx sequelize init:config`

- Initialize our models

  - `npx sequelize init:models`

- Update `config.json` with your password

- Update `config.json` to use a database called `todoList`

`config/config.json`

```js
{
  "development": {
    "username": "root",
    "password": "password",
    "database": "todoList",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
```

`models/index.js`

```js
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
```

### Sequelize Models

- Sequelize uses models to represent data. Each model will correspond to a table in SQL, although we don't have to worry about that. We only need to work with nice JavaScript object models.

- Now that we have a nice `index.js` we can eventually import (require) that one file and it will look at every model in `models`, calling it as a function and passing in an initialized `sequelize` instance and `DataTypes`

#### Create a Database

- The only SQL we need to write is creating a database. ONLY a database, not a table, data or anything else.

- Create a new `db` directory that we can include our database schema in. Later we could also add a `seeds.sql` file to easily populate the database with data.

  - Inside the `db` directory, create a `schema.sql` file

  - In `schema.sql` write SQL to create a new database called "todoList"

- If you happen to have an existing database called "todoList" drop it with `DROP DATABASE todoList`

- Run `schema.sql` in VS Code using the "MySQL" extension or in MySQL Workbench

  - Refresh your database server and verify you have a new database called "todoList"

`db/schema.sql`

```sql
CREATE DATABASE todoList;
```

#### Create a TODO Model

- Create a new model in `models` called `todo.js`

  - This model should be defined as `Todo`

  - The model should have two properties

    - `text` a `STRING`

    - `isComplete` a `BOOLEAN` with a `defaultValue` of `false`

`models/todo.js`

```js
module.exports = (sequelize, DataTypes) =>
  sequelize.define(`Todo`, {
    text: {
      type: DataTypes.STRING
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
```

#### Setup the TODO Model in your Server

- In `server.js` import (`require`) `models` into a variable called `db`

- Synchronize `db` so that `sequelize` will create a matching table

- Only start the server once the `sync` has successfully completed

- Start your server, refresh your database server in VS Code's MySQL extension or with MySQL Workbench and verify:

  - when you start your server it spits out some SQL

  - a new table exists called "Todos" exists in your "todoList" database

  - "Todos" has columns "id" (a non-nullable auto-incrementing integer), "text", "isComplete", "createdAt" and "updatedAt" columns

`server.js`

```js
const express = require(`express`);

const db = require(`./models`);

const apiRoutes = require(`./routes/api-routes.js`);
const htmlRoutes = require(`./routes/html-routes.js`);

const PORT = process.env.PORT || 3000;

const app = express();

apiRoutes(app);
htmlRoutes(app);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Hello, world!`));
});
```

#### Add API Routes to Create and Read Data

Now that we have a working server that connects to `sequelize` let's add some real API routes

##### Route Setup

- Open `routes/api-routes.js` and add two routes:

  - A GET route that responds to "/alltodos"

    - Add this route, have it return `["fake", "todos"]` and verify you can see this using your browser

  - A POST route that adds a new TODO at the URL "/addtodo"

    - Add this route, have it return "I preteneded to add a TODO" and verify that you can get this reponse using POSTMAN

`routes/api-routes.js`

```js
module.exports = app => {
  app.get(`/alltodos`, (req, res) => {
    res.json([`fake`, `todos`]);
  });

  app.post(`/addtodo`, (req, res) => {
    res.send(`I pretended to add a TODO`);
  });

  app.get(`/myroute`, (req, res) => {
    res.send(`hey, you hit my route!`);
  });
};
```

### Adding Real Data

Let's now make the routes actually work, starting with creating data

- Import (`require`) your models so that they can be used in `api-routes.js`

- Update "/addtodo" to create a new `Todo`

  - Have the `text` be "temp todo"

  - Send back a status code of `201` and data of the newly created TODO when complete

- Test it out - try sending a POST request with POSTMAN and see if you are able to get back a new TODO

`routes/api-routes.js`

```js
const db = require(`../models`);

module.exports = app => {
  app.post(`/addtodo`, (req, res) => {
    db.Todo.create({
      text: `temp TODO`
    })
      .then(dbTodo => {
        const statusCreated = 201;
        res.status(statusCreated).send(dbTodo);
      })
      .catch(err => {
        console.error(err);
        res.json(err);
      });
  });

  app.get(`/myroute`, (req, res) => {
    res.send(`hey, you hit my route!`);
  });
};
```

### Getting Data

Let's show the data to the user, update "/alltodos" to read from the database

- Return all TODOs in the database to the user when "/alltodos" is hit

- Test it out, create a few TODOs using POSTMAN and your POST request and then try going to your browser and seeing if it returns those TODOs

`routes/api-routes.js`

```js
const db = require(`../models`);

module.exports = app => {
  app.get(`/alltodos`, (req, res) => {
    db.Todo.findAll({}).then(dbTodos => {
      res.json(dbTodos);
    });
  });

  app.post(`/addtodo`, (req, res) => {
    db.Todo.create({
      text: `temp TODO`
    })
      .then(dbTodo => {
        const statusCreated = 201;
        res.status(statusCreated).send(dbTodo);
      })
      .catch(err => {
        console.error(err);
        res.json(err);
      });
  });

  app.get(`/myroute`, (req, res) => {
    res.send(`hey, you hit my route!`);
  });
};
```

### Bonus - Update and Delete

See if you can add two more routes to update and delete Todos

- No hints and no sample code will be given for this part

## Part 3 - Handlebars

Now that we have a working server hooked up to a database, let's visualize it so our user can use it. For this, we'll use handlebars.

Handlebars is our "View", Sequelize is our "Model" and the business logic is our "Controller", composing our MVC app.

### Views Structure Setup

- Handlebars has a specific directory structure it expects. Let's make:

  - A `views` directory

  - A `views/layouts` directory

- Now that we have our structure let's make a default layout for handlebars to render its views into called `main.handlebars`

  - Create a file called `layouts/main.handlebars`. This is the template which all of our views will render into.

  - Inside `main.handlebars` make a basic HTML template and include the `handlebars` body render

- Now that we have a layout which can be rendered into, let's create a view

  - Create a `todos.handlebars` inside `views`

  - For the contents of `todos.handlebars` add some html to display _something_ (example, `<h1>I'm definitely a real TODO</h1>`)

`views/layouts/main.handlebars`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>TODOs</title>
  </head>

  <body>
    {{{ body }}}
  </body>
</html>
```

`views/layouts/todos.handlebars`

```html
<h1>I'm definitely a real TODO</h1>
```

### Setup the Server to Use Handlebars

Now that we have our structure, let's update the server to use `handlebars` as its rendering engine

- Update `server.js` to use `handlebars` as its rendering engine

`server.js`

```js
const express = require(`express`);
const expressHandlebars = require(`express-handlebars`);

const db = require(`./models`);

const apiRoutes = require(`./routes/api-routes.js`);
const htmlRoutes = require(`./routes/html-routes.js`);

const PORT = process.env.PORT || 3000;

const app = express();

app.engine(`handlebars`, expressHandlebars({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

apiRoutes(app);
htmlRoutes(app);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Hello, world!`));
});
```

### Render a View

Now that we have our views and layouts created, we can render them when a user requests a specific route

- Update `routes/html-routes.js` to have a new route called "view-todos"

  - Verify that you are able to add this route and send _something_ back to the client

  - Then update the route to render `todos.handlebars`

`html-routes.js`

```js
module.exports = app => {
  app.get(`/view-todos`, (req, res) => {
    res.render(`todos`);
  });

  app.get(`/myhtml`, (req, res) => {
    res.send(`<h1>I'm HTML!</h1>`);
  });
};
```

### Render a View with Data

Now that we have handlebars and sequelize working, let's integrate them. Handlebars really shines when given data to render. Let's read our TODOs from sequelize and feed them into handlebars.

- Update `routes/html-routes.js` to render fake TODO data (example, `[{text: 'todo 1'}, {text: 'todo 2'}]`)

- Update `todos.handlebars` to loop through each item in the array and create a list item, reading the `text` from it

- Verify that you are able to see this in your browser

`routes/html-routes.js`

```js
module.exports = app => {
  app.get(`/view-todos`, (req, res) => {
    res.render(`todos`, { todos: [{ text: `todo 1` }, { text: `todo 2` }] });
  });

  app.get(`/myhtml`, (req, res) => {
    res.send(`<h1>I'm HTML!</h1>`);
  });
};
```

`views/todos.handlebars`

```html
<h1>My TODOs:</h1>
<ul>
  {{#each todos}}
  <li>{{this.text}}</li>
  {{/each}}
</ul>
```

### Render a View with Data from the Database

We're really close to having everything working together! The last major step is to connect handlebars and sequelize. Let's update handlebars to read data from our database.

- Update the "view-todos" route to first make a call to the sequelize database, and pass that data into handlebars to render

  - Hint: You've basically already done this in your `api-routes.js`

- Add a few TODOs using POSTMAN and then verify that going to "view-todos" in your browser renders those TODOs

- Hint: You may run into this error `Access has been denied to resolve the property "text" because it is not an "own property" of its parent`. To fix this, `map` each todo to its `dataValues` which will remove all functions.

  ```js
  const sanitizedTodos = dbTodos.map(todo => todo.dataValues);
  ```

`routes/html-routes.js`

```js
const db = require(`../models`);

module.exports = app => {
  app.get(`/view-todos`, (req, res) => {
    db.Todo.findAll({})
      .then(dbTodos => {
        const sanitizedTodos = dbTodos.map(todo => todo.dataValues);
        console.log(sanitizedTodos);
        res.render(`todos`, { todos: sanitizedTodos });
      })
      .catch(err => {
        console.error(err);
        res.json(err);
      });
  });

  app.get(`/myhtml`, (req, res) => {
    res.send(`<h1>I'm HTML!</h1>`);
  });
};
```

`views/todos.handlebars`

```html
<h1>My TODOs:</h1>
<ul>
  {{#each todos}}
  <li>{{this.text}}</li>
  {{/each}}
</ul>
```

## Part 4 - Enable User Interactions

We have everything we need all setup and working together! Now, we just need to add fit and finish.

- Add other information in the TODO list, such as the creation date

- Create your front-end directory, called `public` on the root

  - Inside `public` create an `assets` directory (anything static will go here)

  - Inside `assets` create a `js` and `css` directory

    - You will add any CSS or JavaScript files that the client (browser) will consume here

  - use `express.static` to serve files from `public` automatically

- Add a form so that a user can add their own `TODO`

- Add a checkbox for each TODO that allows toggling the `isComplete` status

- Add a delete button next to each `TODO` to allow deleting the `TODO`

- Make it look pretty with CSS

- Hints

  - We have done all of this in previous activities, feel free to look at other activities as references

## Part 5 - Deploy

Once you've finished (or before you've finished), deploy your app to Heroku.

Steps to doing this are [here](../../../14-full-stack/supplemental/SequelizeHerokuDeploymentProcess.md)
