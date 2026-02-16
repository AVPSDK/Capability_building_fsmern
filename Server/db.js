const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "aditya@122416",
    database: "clothhouse" 
});

db.getConnection((err) => {
    if(err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to database successfully');
    }
});

module.exports = db;
