# MongoDB

## About

- NoSQL Database
- Non-relational
- No schema, put whatever you want in it
- Stores BSON (binary compressed JSON)
- Can use nested data structures

## Terminology

### Structure

| MongoDB    | SQL          |
| ---------- | ------------ |
| Database   | Database     |
| Collection | Table        |
| Document   | Record / Row |

### CRUD

| Operation | MongoDB | Mongoose | SQL    | Sequelize | HTTP   |
| --------- | ------- | -------- | ------ | --------- | ------ |
| Create    | insert  | create   | insert | create    | POST   |
| Read      | find    | find     | select | find      | GET    |
| Update    | update  | update   | update | update    | UPDATE |
| Delete    | delete  | delete   | delete | destroy   | DELETE |

# Mongoose

## About

- ODM (Object Document Map)
- Like Sequelize, but for MongoDB
- Allows you to reference collections easily, handy built in query methods
- Adds schemas, enforcing structure on Mongo

## Miscellaneous

- Make schema with `new Schema`
- Can add custom methods onto model
- "join" using .populate()