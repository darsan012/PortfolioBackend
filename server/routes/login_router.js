import { Router } from "express";
import { find } from "../controller/login_controller.js";

const login_route = Router();

login_route.post("/", find);

export default login_route;
