// This is my javascript file. 
// This is where I am going to write some sample Query Parameters to test.
// Using MySQL workbench to test query parameters is a fantastic idea! 

'use strict';

const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllHouses() {
        return this.connection.query(

        );
    };

    viewAllRoles() {
        return this.connection.query(

        );
    };
}

module.export = new DB(connection);