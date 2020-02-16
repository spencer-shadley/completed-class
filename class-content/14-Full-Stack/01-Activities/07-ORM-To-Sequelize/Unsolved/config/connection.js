'use strict';

// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

const mysql = require('mysql');

// we placed the connections in this source object
const source = {
  // localhost
  localhost: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'todolist'
  },

  // jawsDB
  jawsDB: {
    host: '<host name>',
    port: 3306,
    user: '<name of user>',
    password: '<password>',
    database: '<name of database>'
  }
};

// we use source.[name of connection] to hook into mysql
const connection = mysql.createConnection(source.localhost);

connection.connect(err => {
  if (err) {
    console.error('error connecting', err.stack);
    return;
  }
  console.log(`connected with id ${connection.threadId}`);
});

module.exports = connection;
