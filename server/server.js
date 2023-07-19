//Packages
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

//Variables
const app = express();
const PORT = 8080;
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Copsreloaded62$",
  database: "RandomWebApp",
});

//Functions

//Main

// Middleware
app.use(express.json());
app.use(cors());

// Start server
app.listen(PORT, () => {
  console.log(
    `Server is active at \x1b[34;1;4mhttp://localhost:${PORT}/\x1b[0m`
  );
});

// Routing
app.get("/api/dev", (req, res) => {
  connection.query("select * from _dev;", (err, results, fields) => {
    res.status(200).json({
      body: "Database user: " + results[0].message,
    });
  });
});
