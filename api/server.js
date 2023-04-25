"use strict";
const express = require("express");
const PORT = 8080;
const HOST = "0.0.0.0";
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json()); // JSON 데이터를 해석할 때 사용
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 데이터를 해석할 때 사용

const connection = mysql.createConnection({
  host: "a4bf189edb8a34245b2c700e57d0cf66-1092108306.ap-northeast-2.elb.amazonaws.com",
  user: "devuser",
  password: "devuser",
  database: "harmony_db",
});

app.get("/getData", function (req, res) {
  connection.query("SELECT * FROM todolist", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.post("/addData", function (req, res) {
  const data = req.body.inputValue;
  // console.log(req.body.inputValue);
  const sql = `INSERT INTO todolist (text) VALUES (?);`;
  connection.query(sql, data, (err, result) => {
    if (err) {
      console.error("Error saving data: ", err);
      res.status(500).send("Error saving data!");
      return;
    }
    connection.query(
      "SELECT * FROM todolist",
      function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      }
    );
  });
});

app.get("/deleteData", function (req, res) {
  // const data = req.body.inputValue;
  // console.log(req.body);
  connection.query(
    "DELETE FROM table_name WHERE id = 1",
    (error, results, fields) => {
      if (error) throw error;
      res.send("Successfully deleted the row");
    }
  );
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
