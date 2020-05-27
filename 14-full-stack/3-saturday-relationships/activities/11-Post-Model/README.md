# Directory

`11-Post-Model/Unsolved`

# Instructions

The goal of this exercise is to create a Post model using Sequelize.

1. Run `npm install`

2. Create a new MySQL database and name it `blogger`. Don't create any tables, these will be created by Sequelize.

3. Open the `config` directory and update the `config.json` file's `development` object to match your own local MySQL database.

4. Go to the `models` directory and open the `post.js` file.

5. Create a Sequelize `Post` model here. The model should have a title property of type `DataTypes.STRING`, a body property of `DataTypes.TEXT`, and a category property of `DataTypes.STRING`.
   (<http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types>)

6. To check if this worked, run `npm run watch` in your terminal. Then check if a Posts table has been created using either MySQL Workbench or the MySQL VS Code extension.

## Note

We still have some code to add in the next exercise to get this app fully functioning, just concentrate on creating the Post model and verifying that you were successful for now.

# Bonus

If you complete the activity before time's up, try adding the following:

1. Flags to the title and body to prevent NULL values from being entered.

2. A validation to the title so that it must be between 1 and 160 characters.

3. A validation to the body so that it must be at least 1 character long.

4. A flag to the category so that it has a default value of "Personal" if a value is not supplied.
