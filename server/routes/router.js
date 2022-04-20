import { Router } from "express";
import { login } from "../controller/loginController.js";
import {
  create,
  find,
  update,
  deleteUser,
} from "../controller/usersController.js";

const route = Router();

//user
route.post("/user", create);
route.get("/user", find);
route.put("/user/:id", update);
route.delete("/user/:id", deleteUser);

//login
route.post("/login", login);

// module.exports = route;
export default route;
