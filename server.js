import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/database/connection.js";
import cors from "cors";

//calling the route from router.js
import route from "./src/routes/router.js";

const app = express();
app.use(express.json());

//cors are used for connecting to the react app
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

//setting up port
const port = process.env.PORT;

//mongoDB connection
connectDB();

//loading routers
app.use("/api", route);

//listening the request
app.listen(port, () => console.log(`listening on port ${port}...`));
