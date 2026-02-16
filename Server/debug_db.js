const mysql = require('mysql2');

// Connect without database selected first
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aditya@122416"
});

con.connect(err => {
    if (err) {
        console.error("❌ Database Connection Failed (Roots):", err.message);
        process.exit(1);
    }
    console.log("✅ Connected to MySQL Server successfully");

    // Create Database
    con.query("CREATE DATABASE IF NOT EXISTS clothhouse", (err) => {
        if (err) {
            console.error("❌ Failed to create database:", err.message);
            process.exit(1);
        }
        console.log("✅ Database 'clothhouse' checked/created.");

        // Use Database
        con.changeUser({ database: 'clothhouse' }, (err) => {
            if (err) {
                console.error("❌ Failed to switch to clothhouse:", err.message);
                process.exit(1);
            }
            console.log("✅ Switched to 'clothhouse' database.");

            // Create Table
            const createTable = `
                CREATE TABLE IF NOT EXISTS tbl_category (
                    category_id INT AUTO_INCREMENT PRIMARY KEY,
                    category_name VARCHAR(255) NOT NULL,
                    category_img VARCHAR(255),
                    description TEXT
                )
            `;
            con.query(createTable, (err) => {
                 if(err) console.error("❌ Failed to create table:", err.message);
                 else console.log("✅ Table 'tbl_category' checked/created.");
                 
                 con.end();
                 process.exit(0);
            });
        });
    });
});
