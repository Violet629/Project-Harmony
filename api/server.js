"use strict";
const express = require("express");
const PORT = 8080;
const HOST = "0.0.0.0";
const app = express();
const cors = require("cors");
const mysql = require("mysql");
app.use(cors());

const connection = mysql.createConnection({
  host: "a4bf189edb8a34245b2c700e57d0cf66-1092108306.ap-northeast-2.elb.amazonaws.com",
  user: "devuser",
  password: "devuser",
  database: "harmony_db",
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", function (req, res) {
  connection.query("SELECT * FROM users", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
