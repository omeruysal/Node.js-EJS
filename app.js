const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

app.set("view engine", "ejs");

app.use(express.static("public"));

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "pcat",
  })
  .then(() => {
    console.log("we connected mongo");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.get("/about", (req, res) => {
  res.render("about");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on  ${port}`);
});
