const mysql = require("mysql2/promise");

const Data = mysql.createPool({
    host: "localhost",
    port: 8889,      
    user: "root",
    password: "root",
    database: "database",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = Data;