const mysql = require("mysql2")

// create the connection to database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "latihan_db",
})

module.exports = db