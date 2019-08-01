Unit 12: MySQL
===

This homework uses a free [employee database](https://github.com/datacharmer/test_db)
intended for testing database performance. This database is huge, and needs
to be trimmed down. 

Pre-process the data
---
### Start a MySQL 8 Docker container

```bash
mkdir data
docker run -v /path/to/data:/var/lib/mysql -p 3306:3306 \
  -e MYSQL_ALLOW_EMPTY_PASSWORD=1 \
  -e MYSQL_DATABASE="employees" \
  --name database -d mysql:8
```
### Fetch the data set

```bash
curl -O https://github.com/datacharmer/test_db/archive/master.zip
unzip master.zip
cd test_db-master
```
### Remove views
Edit the `employees.sql` file to remove the `CREATE OR REPLACE VIEW` statements.
    
### Load the data

  ```sql
  mysql -u root -h 127.0.0.1 < employees.sql
  ```
    
### Modify the tables

```sql
mysql -u root -h 127.0.0.1 employees

# greatly reduce number of employees records
DELETE td FROM employees AS td
  JOIN 
      ( SELECT t.emp_no
        FROM
             employees AS t 
          CROSS JOIN
              ( SELECT MAX(emp_no) AS maxid 
                FROM employees
              ) AS m
          JOIN
              ( SELECT RAND() AS rndm
                FROM employees AS tr
                LIMIT 300024
              ) AS r
            ON 
               t.emp_no = CEIL( rndm * maxid )
        LIMIT 200024
      ) AS x
      ON 
         x.emp_no = td.emp_no;
         
ALTER TABLE employees DROP gender;
``` 
### Dump the modified data

  ```sql
    mysqldump -d -u root -h 127.0.0.1 employees > schema.sql
    mysqldump --no-create-info --no-create-db  -u root -h 127.0.0.1 employees > seed.sql
  ```
    
### Load the data into a new database

  ```sql
    mysql -u root -h 127.0.0.1 < schema.sql
    mysql -u root -h 127.0.0.1 < seed.sql
  ```

### Create a user with privileges

  ```
    create user "empuser"@"172.17.0.1" identified WITH mysql_native_password by "emppass";
    grant all on employees.* to empuser@172.17.0.1;
    flush privileges;
  ```

