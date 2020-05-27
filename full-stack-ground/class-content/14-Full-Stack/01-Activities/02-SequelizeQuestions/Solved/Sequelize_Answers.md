# Instructions

- Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online). Flex your Google Fu!

  - Question: What is Sequelize?

    - An ORM.

  - Question: What advantages does it offer?

    - We get to write in the language we're already using
    - Encapsulates the logic of interacting with DBs, helping to minimize bugs (high chance we otherwise would accidentally introduce bugs)
    - Sequelize is probably better at writing SQL than us. Therefore, the queries will generally be more efficient.
    - Advanced functions are available out of the box - transactions, connection pooling, migrations, seeds, streams, etc.
    - It's easy to swap databases in and out. What if we decide to switch from MySQL to Microsoft SQL Server?
    - Easy to test.
    - Gives you support for syncing databases.
    - Validation, restricts to specific form of data.
    - Complex SQL queries in simple syntax,

  - Question: How do I install it? How do I incorporate it into my app?

    - `npm install sequelize --save`

  - Question: What the heck is a Sequelize model? What role will it play?

    - A representation of table data for Sequelize

  - Let's say I have the below table in MySQL.

    | Anime                           | Genre   | Release Year | Rating |
    | ------------------------------- | ------- | ------------ | ------ |
    | Enen no Shouboutai              | Action  | 2019         | 7.8    |
    | Made in Abyss                   | Mystery | 2017         | 8.8    |
    | Fullmetal Alchemist Brotherhood | Fantasy | 2010         | 9.2    |
    | Steins;Gate                     | Sci-Fi  | 2011         | 9.1    |

    - Question: How would I model it in Sequelize?

      ```js
      const tableName = sequelize.define(
        'tableName',
        {
          Anime: {
            type: Sequelize.STRING
          },
          Genre: {
            type: Sequelize.STRING
          },
          ReleaseYear: {
            type: Sequelize.INTEGER
          },
          Rating: {
            type: Sequelize.DECIMAL
          }
        },
        {
          freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
        }
      );

      // force: true will drop the table if it already exists
      tableName.sync({ force: true }).then(() => {
        // Table created
        return tableName.create({
          Anime: 'Made in Abyss',
          Genre: 'Mystery',
          ReleaseYear: 2017,
          Rating: 8.8
        });
      });
      ```

    - Question: How would I query for all the records where the Release Year was less than 5 years ago?

      ```js
      tableName.findAll({
        where: {
          ReleaseYear: { $gt: new Date().getFullYear() - 5 }
        }
      });
      ```

    - How would I query the table, order it by descending Release Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Fullmetal Alchemist Brotherhood, Steins;Gate)

      ```js
      tableName.findAll({
        offset: 2,
        limit: 2,
        order: [[sequelize.col('ReleaseYear'), 'DESC']]
      });
      ```

# Bonus: How do I use sequelize to make changes to an existing table with data in it?

    - Use sequelize migrations from the command line: <http://docs.sequelizejs.com/en/latest/docs/migrations/>
