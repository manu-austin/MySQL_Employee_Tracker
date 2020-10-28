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
    inquirer.prompt({
        type: "input",
        message: "What is the name of the department?",
        name: "newDept"
    }).then(function(val) {
        connection.query("INSERT INTO department (name) VALUES (?)", [val.newDept], function(err, res) {
            if (err) throw err;
            console.table(res)
            promptUser();
        })
    })
};


function addEmployee() {
    inquirer.prompt({
        type: "input",
        message: "What is the first name?",
        name: "firstName"
    }, {
        type: "input",
        message: "What is the last name?",
        name: "lastName"
    }, {
        type: "input",
        message: "What is the role ID #?",
        name: "roleID"
    }, {
        type: "input",
        message: "What is the manager ID #?",
        name: "managerID"
    }, ).then(function(val) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [val.firstName, val.lastName, val.roleID, val.managerID], function(err, res) {
            if (err) throw err;
            console.table(res)
            promptUser();
        })
    })
};

function addRole() {
    inquirer.prompt({
            type: "input",
            message: "What is the role's name?",
            name: "title"
        }, {
            type: "input",
            message: "How is it paid?",
            name: "salary"
        }, {
            type: "input",
            message: "What is the department ID #?",
            name: "department_id"
        },

    ).then(function(val) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [val.title, val.salary, val.department_id], function(err, res) {
            if (err) throw err;
            console.table(res)
            promptUser();
        })
    })
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
    inquirer.prompt({
            type: "input",
            message: "What is the employee ID?",
            name: "employeeID"
        }, {
            type: "input",
            message: "What is the employee new role?",
            name: "newRole"
        },

    ).then(function(val) {
        connection.query('UPDATE employee SET role_id=? WHERE id= ?', [val.employeeID, val.newRole], function(err, res) {
            if (err) throw err;
            console.table(res)
            promptUser();
        })
    })
};




function exit() {
    console.log("Thank you! Have a great rest of your day!");
    process.exit();
};

promptUser();