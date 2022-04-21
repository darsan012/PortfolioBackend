import { Router } from "express";
import { login } from "../controller/loginController.js";
import {
  create,
  find,
  update,
  deleteUser,
} from "../controller/usersController.js";

import { loginMiddleWare } from "../middleware/loginMiddleWare.js";

const route = Router();

//user
route.post("/user", create);
route.get("/user", find);
route.put("/user/:id", loginMiddleWare, update);
route.delete("/user/:id", deleteUser);

//login
route.post("/login", login);

// module.exports = route;
export default route;
