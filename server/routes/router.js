// const express = require("express");
// const route = express.Router();
// const controller = require("../controller/controller");

import express from "express";
import { Router } from "express";
import {
  create,
  find,
  update,
  deleteUser,
} from "../controller/Profilecontroller.js";

const route = Router();

//api
route.post("/", create);
route.get("/", find);
route.put("/:id", update);
route.delete("/:id", deleteUser);

// module.exports = route;
export default route;
