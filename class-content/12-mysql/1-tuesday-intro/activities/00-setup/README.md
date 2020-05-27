# Instructions

## Part 1 - Installation

Installing things is a skill in itself! You'll need to install things frequently as a developer and understand how to debug the install (i.e. probably Google lots of stuff.)

- Install MySQL

  - [Windows Guide](../../../supplemental/mysql-windows-guide.md)
  - [Mac Guide](../../../supplemental/mysql-mac-guide.md)

- Install [Workbench](https://www.mysql.com/products/workbench)

### Bonus

- If you finish early, help out your classmates

## Part 2 - Setup Localhost Connection

- Now it is your turn to set up a localhost connection! This may seem as if it will be an easy task, but there are some common errors and hurdles that might stand in your way as you work to create your first ever MySQL connection.

- Start out by opening up MySQL Workbench and hitting the (+) button next to the text which reads "MySQL Connections". Sequel Pro will also have a (+) on the bottom left for new connections.

- Enter the following credentials into the on-screen prompt...

  - Connection Name: Local Instance MySQL

  - Connection Method: Standard (TCP/IP)

  - Hostname: localhost

  - Port: 3306

  - Username: &lt;Your MySQL Username> (Defaults to "root")

  - Password: &lt;Your MySQL Password> (Defaults to empty)

  - Keep the Default Schema field empty

- Hit "Test Connection" and, if the connection is successful, hit okay and double-click on the newly created field under the "MySQL Connections" text on the home page

  - If the connection fails, raise your hand and one of us will come around to help you out. Until we come by, however, take this time to go online and see if there is anything online which might tell you what went wrong. Do not worry if you cannot find anything though, we will make sure to figure this out.

### Bonus

- If your connection was successful, help those around you in creating their connections

- Look into how you can create and use databases using SQL commands

- Look into the reasons why MySQL uses port 3306 as its default
