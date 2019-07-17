const inquirer = require("inquirer");
const {
  employeeFormatter,
  managersFormatter,
  salaryFormatter,
  titleFormatter,
  departmentFormatter
} = require("./lib/formatters");

const {
  selectCurrentManagers,
  selectRandomEmployees,
  selectEmployee,
  selectSalaryHistory,
  selectTitleHistory,
  selectDepartments,
  selectDepartmentsWithoutManagers,
  createEmployee,
  addEmployeeTitle,
  addEmployeeSalary,
  updateEmployee,
  updateOldEmployeeSalary,
  updateOldEmployeeTitle
} = require("./lib/queries");

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "empuser",
  password: "emppass",
  database: "employees"
});

connection.connect();

const mainMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "reportType",
        message: "Select a report to run",
        choices: [
          { name: "Employee Search", value: "search" },
          { name: "Random Employees", value: "random" },
          { name: "Current Managers", value: "managers" },
          { name: "Salary History", value: "salary" },
          { name: "Title History", value: "title" },
          { name: "Department List", value: "departments" },
          { name: "Departments Without Managers", value: "noManager" },
          { name: "Create Employee", value: "createEmployee" },
          { name: "Quit", value: "quit" }
        ]
      }
    ])
    .then(choice => {
      switch (choice.reportType) {
      case "search":
        inquirer
          .prompt([
            {
              type: "input",
              name: "search",
              message: "Enter part of last name to search"
            }
          ])
          .then(answer => {
            connection.query(selectEmployee(answer.search), function(
              error,
              results,
              fields
            ) {
              if (error) throw error;
              employeeFormatter(results);
              process.exit();
            });
          });
        break;
      case "random":
        connection.query(selectRandomEmployees(), function(
          error,
          results,
          fields
        ) {
          if (error) throw error;
          employeeFormatter(results);
          process.exit();
        });
        break;
      case "managers":
        connection.query(selectCurrentManagers(), function(
          error,
          results,
          fields
        ) {
          if (error) throw error;
          managersFormatter(results);
          process.exit();
        });
        break;
      case "salary":
        inquirer
          .prompt([
            {
              type: "input",
              name: "id",
              message: "Enter employee id"
            }
          ])
          .then(answer => {
            connection.query(selectSalaryHistory(answer.id), function(
              error,
              results,
              fields
            ) {
              if (error) throw error;
              salaryFormatter(results);
              process.exit();
            });
          });
        break;
      case "title":
        inquirer
          .prompt([
            {
              type: "input",
              name: "id",
              message: "Enter employee id"
            }
          ])
          .then(answer => {
            connection.query(selectTitleHistory(answer.id), function(
              error,
              results,
              fields
            ) {
              if (error) throw error;
              titleFormatter(results);
              process.exit();
            });
          });
        break;
      case "departments":
        connection.query(selectDepartments(), function(
          error,
          results,
          fields
        ) {
          if (error) throw error;
          departmentFormatter(results);
          process.exit();
        });
        break;
      case "noManager":
        connection.query(selectDepartmentsWithoutManagers(), function(
          error,
          results,
          fields
        ) {
          if (error) throw error;
          departmentFormatter(results);
          process.exit();
        });
        break;
      case "createEmployee":
        inquirer
          .prompt([
            {
              type: "input",
              name: "birthDate",
              message: "Birth date (YYYY-MM-DD)"
            },
            {
              type: "input",
              name: "firstName",
              message: "First name"
            },
            {
              type: "input",
              name: "lastName",
              message: "Last name"
            },
            {
              type: "input",
              name: "title",
              message: "Title"
            },
            {
              type: "input",
              name: "salary",
              message: "Salary"
            }
          ])
          .then(answers => {
            connection.query(
              createEmployee(
                answers.birthDate,
                answers.lastName,
                answers.firstName
              ),
              function(error, results, fields) {
                if (error) throw error;
                const employeeNum = results.insertId;
                console.log(`Employee number ${employeeNum} created.`);
                connection.query(
                  addEmployeeTitle(employeeNum, answers.title),
                  function(error, results, fields) {
                    if (error) throw error;
                    console.log("Employee title added.");
                    connection.query(
                      addEmployeeSalary(employeeNum, answers.salary),
                      function(error, results, fields) {
                        if (error) throw error;
                        console.log("Employee salary added.");
                        process.exit();
                      }
                    );
                  }
                );
              }
            );
          });
        break;
      case "quit":
        connection.end();
        process.exit();
      }
    })
    .catch(console.error);
};

// select all current managers

mainMenu();
