//Services
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

//Variables
const app = express();
const PORT = process.env.PORT || 8080;

//Functions

//Main

// Middleware
app.use(express.json());
app.use(cors());

// Start server
// prettier-ignore
app.listen(PORT, ()=>{console.log(`Server running at \x1b[34;1;4mhttp://localhost:${PORT}/\x1b[0m`);})

// Routing
// GETs
app.get("/api/dev", (req, res) => {
  res.status(200).json("Hello From Server!");
});

// POSTs
