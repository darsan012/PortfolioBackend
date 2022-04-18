const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("connection succeded..");
});

route.get("/api/courses", (req, res) => {
  res.send("courses are not defined yet..");
});

module.exports = route;
