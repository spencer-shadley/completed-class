-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER AUTO_INCREMENT NOT NULL,
  language VARCHAR(20),
  rating INTEGER,
  -- Creates a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
  mastered BOOLEAN DEFAULT true,
  PRIMARY KEY (id)
);

-- Creates new rows
INSERT INTO programming_languages (language, rating)
VALUES ("Fortran", 13);

INSERT INTO programming_languages (language, rating)
VALUES ("JavaScript", 91);

INSERT INTO programming_languages (language, rating)
VALUES ("TypeScript", 100);

INSERT INTO programming_languages (language, rating)
VALUES ("MySQL", 70);

SELECT * FROM programming_languages;
