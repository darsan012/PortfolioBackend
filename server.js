import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import connectDB from "./server/database/connection.js";

//calling the route from router.js
import route from "./server/routes/router.js";

const app = express();
app.use(express.json());

//setting up port
const port = process.env.PORT || 3000;

//mongoDB connection
connectDB();

//loading routers
app.use("/", route);

//listening the request
app.listen(port, () => console.log(`listening on port ${port}...`));
