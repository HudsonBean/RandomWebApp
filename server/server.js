//Services
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const fs = require("fs");

//Variables
const app = express();
const PORT = process.env.PORT || 8080;

//Functions

//Main

//Set client proxy
var file = "../client/package.json";
var package = JSON.parse(fs.readFileSync(file));
package.proxy = `http://localhost:${PORT}`;
fs.writeFileSync(file, JSON.stringify(package));

// Middleware
app.use(express.json());
app.use(cors());

// Start server
// prettier-ignore
app.listen(PORT, ()=>{console.log(`Server running at \x1b[34;1;4mhttp://localhost:${PORT}/\x1b[0m`);})

// Routing
// GETs
app.get("/api/dev", (req, res) => {
  res.status(200).json({ body: "Hello From Server!" });
});

// POSTs
