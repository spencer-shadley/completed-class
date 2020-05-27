# Instructions

Reconfigure the Star Wars app to use the Sequelize ORM

## Steps to Sequelize the Star Wars App

- Install the `sequelize` and `mysql2` npm packages.
- Delete `config/orm.js`. In your app folder, create a model directory with a `character.js` file in the model
- In `character.js`, model out the character table, as detailed in the `schema.sql` file located in the root of this project directory.
- Remove all references to the old orm file and replace it with `character.js`
- Use Sequelize methods in place of the orm calls to retrieve and insert data.
- Update `connection.js` to use `sequelize` instead of the `mysql` package.

## Hint

- Note that a question mark will appear in certain `get` routes. This `?` character indicates an _optional parameter_—these routes will load even if the parameter wrapped in `:?` is absent from the request.
  - _A question mark in an Express route indicates an optional parameter._
