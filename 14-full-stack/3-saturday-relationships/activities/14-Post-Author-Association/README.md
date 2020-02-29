# Directory

`14-Post-Author-Association/Unsolved`

# Instructions

The goal of this exercise is to modify the Post and Author models so that they are associated with each other.

In groups:

1. Run `npm install`

1. Open the `config` directory and update the `config.json` file's `development` object to match your own local MySQL database.

1. Navigate to the `post.js` file.

1. You will need to set an `associate` property to the `Post` model after it's defined. There's an example of this type of association being done [here](https://github.com/sequelize/express-example/blob/master/models/task.js)

## Notes

- This may take a few tries to implement correctly in your own Post model (There's a lot of curly braces there!). You can verify your code works by starting your node server and then checking MySQL Workbench or the MySQL VS Code extension. If the Posts table now has a foreign key of AuthorId, you were successful.

- After this activity we have just one more step to complete the app and get it fully functioning.

# Bonus

If you complete the exercise before time's up, navigate to the `author.js` file and add a `hasMany` association from the `Author` model to the `Post` Model. An example of this type of association can be found [here](https://github.com/sequelize/express-example/blob/master/models/user.js)
