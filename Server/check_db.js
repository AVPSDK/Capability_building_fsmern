const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aditya@122416",
    database: "clothhouse"
});

con.connect(err => {
    if (err) {
        console.error("❌ Connection Failed:", err.message);
        process.exit(1);
    }
    console.log("✅ Connected. Fetching categories...\n");

    con.query("SELECT * FROM tbl_category", (err, result) => {
        if (err) {
            console.error("❌ Error fetching data:", err.message);
        } else {
            if (result.length === 0) {
                console.log("📂 Table 'tbl_category' is empty.");
            } else {
                console.log("📂 Categories found:", result.length);
                console.table(result);
            }
        }
        con.end();
    });
});
