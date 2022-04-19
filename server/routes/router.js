const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");

route.get("/", (req, res) => {
  res.send("connection succeded..");
});

route.get("/api/courses", (req, res) => {
  res.send("courses are not defined yet..");
});

//api
route.post("/api/courses", controller.create);
route.get("/api/courses", controller.find);
route.put("/api/courses/:id", controller.update);
route.delete("/api/courses/:id", controller.delete);

module.exports = route;
