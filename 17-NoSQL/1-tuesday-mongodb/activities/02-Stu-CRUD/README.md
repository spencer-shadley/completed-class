# Creating, Inserting and Finding in MongoDB

## Instructions

- Use the command line to create a classroom database.

- Insert entries for yourself and a few other classmates in a `students` collection.

- Each document should have:

  - A field of `name` with the person's name.

  - A field of `os` which will contain the Operating System of the computer they are using: 'Win', 'Win', etc

  - A field of `favoriteColor` to represent that person's favorite color

  - A field of `hobbies` with an array of the hobbies the person likes to do.

- Use find commands to get:

  - Everyone

  - A person by name

  - All Windows users

  - A person who uses windows and has a favorite color of blue

* Delete all mac users

## 💡 Hint(s)

- Use the [Mongo guides](https://docs.mongodb.com/guides/) if you are stuck.

## 🏆 Bonus - Operators

If you finish early, check out the MongoDB documentation and figure out how to:

- find users by an entry in an array

- Update the "name" field for a person to instead use a nickname

- Add a new hobby for a student

- Drop the students collection

- Drop the database
