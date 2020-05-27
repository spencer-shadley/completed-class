## MySQL Server Installation Guide (Windows)

- Go [here](https://dev.mysql.com/downloads/windows/installer/8.0.html)

- Select Windows (x86, 32-bit), MSI Installer (mysql-installer-web-community-8.0.19.0.msi) (18.6 M)

- Click “No thanks, just start my download.”

- Navigate to where the file was downloaded and double-click to run the installer. If you get prompted for an update, proceed with the upgrade.

- When you get to the License Agreement screen, Accept the license terms and click “Next”

- Click the “+” next to “MySQL Servers” to expand it, expand “MySQL Server”, expand “MySQL Server 8.0”, and finally select “MySQL Server 8.0.19 – X64” and click the right arrow to add it to the “Products/Features To Be Installed” section.

- Click “Execute”

- When the status says “Complete”, click “Next”.

- At the product configuration screen, click “Next” again.

- Select “Standalone MySQL Server / Classic MySQL Replication” and click “Next”

- For Type and Networking, don’t change anything and click “Next”

- **IMPORTANT**: Make sure to select “Use Legacy Authentication Method (Retain MySQL 5.x Compatibility) and click “Next”

- Create a root password. WARNING. Do not forget this password! After entering a password, click “Next”

- When you get to the Windows Service screen, don’t change anything and click “Next”

- Finally, click “Execute” to apply the changes.

- You can verify that the installation was correct by going to Git Bash and typing “mysql –V”. The path followed by the version should show up.

## MySQL Workbench Install (Windows)

- Go [here](https://dev.mysql.com/downloads/workbench/)

- Select Microsoft Windows in the dropdown.

- Scroll down and in `Other Downloads:` find Windows (x86, 64-bit), MSI Installer and click “Download”.

- Click “No thanks, just start my download.”

- Open the executable file and go through the installation process.

## Try it out!

- Double click this card

  ![local-connection](./local-connection.png)

- This should open the workbench

  ![workbench](./workbench.png)

- You can now write SQL queries and press the lightning icon to execute your query

  ![lightning](./lightning.png)

- Example SQL statements [here](../1-tuesday-intro/01-animalsDB/animalsDB.sql) and copy/pasted below for convenience:

```sql
-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS animals_db;
-- Creates the "animals_db" database --
CREATE DATABASE animals_db;

-- Makes it so all of the following code will affect animals_db --
USE animals_db;

-- Creates the table "people" within animals_db --
CREATE TABLE people (
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  has_pet BOOLEAN NOT NULL,
  -- Makes a sting column called "pet_name" --
  pet_name VARCHAR(30),
  -- Makes an numeric column called "pet_age" --
  pet_age INTEGER
);

-- Creates new rows containing data in all named columns --
INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", TRUE, "Rockington", 100);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", TRUE, "Rockington", 100);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Jacob", TRUE, "Misty", 10);

INSERT INTO people (name, has_pet)
VALUES ("Peter", false);

-- Updates the row where the column name is peter --
UPDATE people
SET has_pet = true, pet_name = "Franklin", pet_age = 2
WHERE name = "Peter";
```
