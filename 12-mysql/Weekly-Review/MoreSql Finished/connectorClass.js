// This is my javascript file. 
// This is where I am going to write some sample Query Parameters to test.
// Using MySQL workbench to test query parameters is a fantastic idea! 

'use strict';

const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    };


    viewAllHouses() {
        return this.connection.query(
            `
            SELECT 
                house.id,
                house.name
            FROM 
                house
            `
        );
    };

    viewAllRoles() {
        return this.connection.query(
            `
            SELECT
                role.id,
                role.title,
                role.salary,
                house.name AS House
            FROM
                role
            LEFT JOIN
                house ON role.house_id = house.id
            ORDER BY
                role.id
            `
        );
    };

    createHouse(house) {
        return this.connection.query(
            `
            INSERT INTO
                house
            SET
                ?
            `, house
        );
    };
};


module.export = new DB(connection);