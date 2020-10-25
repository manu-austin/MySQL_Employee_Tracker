// dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

//local file with the connection informaiton for the MySQL database
const connection = require("./config/connection");