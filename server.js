const express = require("express");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());

const connectDB = require("./server/database/connection");

//calling the route from router.js
const route = require("./server/routes/router");

//setting up port
dotenv.config({ path: "config.env" });
const port = process.env.PORT || 3000;

//mongoDB connection
connectDB();

//loading routers
app.use("/", route);

//listening the request
app.listen(port, () => console.log(`listening on port ${port}...`));
