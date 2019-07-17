// Requiring our dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// Configuring our connection to our database; make sure it matches your local instance
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

// Connecting to our database, running makeTable which will start the app
connection.connect(function(err) {
  if (err) throw err;
  console.log("connection successful!");
  makeTable();
});

function makeTable() {
  // Displaying an initial list of products for the user, calling promptSupervisor
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    promptSupervisor();
  });
}

function promptSupervisor() {
  // Giving the user some options for what to do next
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["View Product Sales by Department", "Create New Department", "Quit"]
      }
    ])
    .then(function(val) {
      // Checking to see what option the user chose and running the appropriate function
      if (val.choice === "View Product Sales by Department") {
        viewSales();
      }
      else if (val.choice === "Create New Department") {
        addDepartment();
      }
      else {
        console.log("Goodbye!");
        process.exit(0);
      }
    });
}

function addDepartment() {
  // Asking the user about the department they would like to add
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the department?"
      },
      {
        type: "input",
        name: "overhead",
        message: "What is the overhead cost of the department?",
        validate: function(val) {
          return val > 0;
        }
      }
    ])
    .then(function(val) {
      // Using the information the user provided to create a new department
      connection.query(
        "INSERT INTO departments (department_name, over_head_costs) VALUES (?, ?)",
        [val.name, val.overhead],
        function(err) {
          if (err) throw err;
          // If successful, alert the user, run makeTable again
          console.log("ADDED DEPARTMENT!");
          makeTable();
        }
      );
    });
}

function viewSales() {
  // Selects a few columns from the departments table, calculates a total_profit column
  connection.query(
    " SELECT " +
    "   d.department_id, " +
    "   d.department_name, " +
    "   d.over_head_costs, " +
    "   SUM(IFNULL(p.product_sales, 0)) as product_sales, " +
    "   SUM(IFNULL(p.product_sales, 0)) - d.over_head_costs as total_profit " +
    "FROM products p " +
    "   RIGHT JOIN departments d ON p.department_name = d.department_name " +
    "GROUP BY " +
    "   d.department_id, " +
    "   d.department_name, " +
    "   d.over_head_costs",
    function(err, res) {
      console.table(res);
      promptSupervisor();
    }
  );
}
