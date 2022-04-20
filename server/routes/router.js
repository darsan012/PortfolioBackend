import { Router } from "express";
import {
  create,
  find,
  update,
  deleteUser,
} from "../controller/user_controller.js";

const route = Router();

//api
route.post("/", create);
route.get("/", find);
route.put("/:id", update);
route.delete("/:id", deleteUser);

// module.exports = route;
export default route;
