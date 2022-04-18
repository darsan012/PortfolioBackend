const express = require("express");
const dotenv = require("dotenv");
const app = express();
//calling the route from router.js
const route = require("./server/routes/router");

//setting up port
dotenv.config({ path: "config.env" });
const port = process.env.PORT || 3000;

app.use("/", route);

//listening the request
app.listen(port, () => console.log(`listening on port ${port}...`));
