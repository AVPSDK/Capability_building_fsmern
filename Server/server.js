const mysql = require("mysql2");
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");

const path = require("path");
const app = express();

app.use("/public", express.static("public"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Database connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aditya@122416",
    database: "clothhouse",
    insecureAuth: true
});

con.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database.");
    }
});

// Multer storage settings
const storage = multer.diskStorage({
    destination: path.join(__dirname, './public/'),
    filename: function(req, file, callback) {
        const filename = Date.now() + '-' + file.originalname;
        callback(null, filename);
    }
});

const upload = multer({ storage: storage });
const multi = upload.fields([{ name: 'image' }]);

// Add Category API
app.post("/api/addcategoryprocess", multi, (req, res) => {
    try {
        const category_name = req.body.category_name;
        const image = req.files?.image?.[0]?.filename;
        const description = req.body.description;

        if (!category_name || !image || !description) {
            return res.status(400).send({ message: "All fields are required!" });
        }

        const query = "INSERT INTO tbl_category (category_name, category_img, description) VALUES (?, ?, ?)";
        con.query(query, [category_name, image, description], (err, result) => {
            if (err) {
                console.error("Database Insert Error:", err);
                return res.status(500).send({ message: "Database insert error", error: err });
            }
            res.send({ message: "Category inserted successfully", result });
        });
    } catch (error) {
        //console.error("Server Error:", error);
        res.status(500).send({ message: "Internal Server Error", error });
    }
});

// View Category API
app.get("/api/viewcategory", (req, res) => {
    const query = "SELECT * FROM tbl_category";
    con.query(query, (err, result) => {
        if (err) {
            console.error("Database Fetch Error:", err);
            return res.status(500).send({ message: "Database fetch error", error: err });
        }
        res.send(result);
    });
});






// Start the server
const PORT = 1337;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});