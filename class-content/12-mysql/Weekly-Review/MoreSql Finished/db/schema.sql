-- On this file I am going to design my tables.

-- GAME OF THRONES!! 

-- How would I start? 

DROP DATABASE IF EXISTS got_characters;
CREATE DATABASE got_characters;

USE got_characters;

CREATE table house (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary INT NOT NULL,
    house_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_house FOREIGN KEY (house_id) REFERENCES house(id) ON DELETE CASCADE
);

