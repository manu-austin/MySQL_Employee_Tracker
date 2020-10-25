// Set up MySQL connection.
const mysql = require("mysql");

// connection to MySQL database
const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "One80326",
    database: "employee_tracker_db"
});

// Make connection.
connection.connect((err) => {
    if (err) {
        console.error(`Error connecting to DB: ${err.stack}`);
        return;
    }
    console.log(`Connected to DB with ID ${connection.threadId}`);
});

// Export connection
module.exports = connection;