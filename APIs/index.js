let express = require("express");
let connection = require("./connection.js");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json()); //Convert incoming data into json
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.get("/", (req, resp) => {
  resp.send("<h1>Hello World</h1>");
});

app.get("/api/category", (req, resp) => {
  connection.query(
    "SELECT category_name, description, is_enable FROM master_category",
    (err, result) => {
      if (err) {
        return resp.json({ msg: "Error in SQL!" });
      } else {
        return resp.json({ msg: result });
      }
    }
  );
});
/*
@created by: Gautam
@Created on: 25/06/2025
@Objective: This API is to get deatils of one category
*/
app.get("/api/category/:id", (req, resp) => {
  let id = req.params.id;
  connection.query(
    `SELECT category_name, description, is_enable FROM master_category WHERE id = ${id}`,
    (err, result) => {
      if (err) {
        return resp.json({ msg: "Error in SQL!" });
      } else {
        return resp.json({ msg: result });
      }
    }
  );
});

app.post("/api/category", (req, resp) => {
  let body = req.body;
  if (!body.category_name) {
    return resp.json({ msg: "Mandatory field is missing" });
  } else {
    connection.query(
      `INSERT INTO master_category (category_name, description, is_enable) VALUES 
      ('${body.category_name}','${body.description}','${body.is_enable}')`,
      (error, result) => {
        if (error) {
          return resp.json({ msg: "Error in insert query!" });
        } else {
          return resp.json({ msg: "One record inserted successfully!" });
        }
      }
    );
  }
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
