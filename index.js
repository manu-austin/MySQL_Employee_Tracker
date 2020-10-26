// dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

//local file with the connection informaiton for the MySQL database
const connection = require("./config/connection");


// first screen when we start node index.js
function promptUser() {
    inquirer.prompt([{
        type: "list",
        message: "What would you like to do?",
        name: "choices",
        choices: [
            "Add department",
            "Add employee",
            "Add role",
            "View employees",
            "View roles",
            "View deparments",
            "Update employee roles",
            "I am done!"
        ]
    }]).then(function(val) {
        switch (val.choices) {

            case "Add department":
                addDepartment();
                break;
            case "Add employee":
                addEmployee();
                break;
            case "Add role":
                addRole();
                break;

            case "View employees":
                viewEmployees();
                break;
            case "View roles":
                viewRoles();
                break;
            case "View deparments":
                viewDepartments();
                break;

            case "Update employee roles":
                updateEmployeeRoles();
                break;

            case "I am done!":
                exit();
                break;

        }
    })
};


function addDepartment() {
    console.log("addDepartment")
};

function addEmployee() {
    console.log("addEmployee")
};

function addRole() {
    console.log("addRole")
};


function viewEmployees() {
    connection.query("SELECT * FROM employee",
        function(err, res) {
            if (err) throw err
            console.table(res);
            promptUser();
        })
};

function viewRoles() {
    connection.query("SELECT * FROM  role",
        function(err, res) {
            if (err) throw err
            console.table(res);
            promptUser();
        })
};

function viewDepartments() {
    connection.query("SELECT * FROM department",
        function(err, res) {
            if (err) throw err
            console.table(res);
            promptUser();
        })
};

function updateEmployeeRoles() {
    console.log("updateEmployeeRoles")
};




function exit() {
    console.log("Thank you! Have a great rest of your day!");
    process.exit();
};

promptUser();