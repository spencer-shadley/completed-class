# Instructions

- It's time to test your skills in creating databases and tables as you create a database called `top_songsDB` which will eventually house all of the music data contained within `TopSongs.csv`

- Pseudocode in pairs database(s) and table(s) that would represent this data well

- Write a SQL query to create a database

- Write a SQL query to create a table with the appropriate columns to hold data from `TopSongs.csv`

- All of your code should be written and saved within a filed called `schema.sql` so that you can use this same code later should the need ever arise

## Hint

- The columns are (ID, Artist, Song, Release Year, Global Popularity Score, USA Popularity Score, UK Popularity Score, European Popularity Score, Rest of the World Popularity Score)

  - Popularity Score is determined based on volume of sales

- Try to have your table's columns match those within the CSV file as closely as possible or else you may find the next step in this assignment more difficult than it would otherwise be

## Bonus

- Install the [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv) VS Code extension

  - Try out [RBQL](https://rbql.org/) (in the status bar with the file open select "Query")

- Create a `seeds.sql` file that contains the data for the first three songs found within `TopSongs.csv`

- Look into how MySQL Workbench can import and export data files. What file types does it accept? How does it convert the data?
