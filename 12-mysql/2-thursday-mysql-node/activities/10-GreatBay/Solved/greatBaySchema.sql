DROP DATABASE IF EXISTS greatBay_DB;
CREATE DATABASE greatBay_DB;

USE greatBay_DB;

CREATE TABLE users(
  username VARCHAR(100) NOT NULL,
  password VARCHAR(45) NOT NULL,
  PRIMARY KEY (username)
);

CREATE TABLE auctions(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid INT default 0,
  highest_bid INT default 0,
  username VARCHAR(100) NOT NULL,
  FOREIGN KEY (username) REFERENCES users(username),
  PRIMARY KEY (id)
);

SELECT * FROM users;
SELECT * FROM auctions;