// const express = require("express");
// const route = express.Router();
// const controller = require("../controller/controller");

import express from "express";
import { Router } from "express";
import { create, find, update, deleteUser } from "../controller/controller.js";

const route = Router();
route.get("/", (req, res) => {
  res.send("connection succeded..");
});

//api
route.post("/api/courses", create);
route.get("/api/courses", find);
route.put("/api/courses/:id", update);
route.delete("/api/courses/:id", deleteUser);

// module.exports = route;
export default route;
