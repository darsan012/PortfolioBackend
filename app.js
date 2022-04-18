require("dotenv/config");
const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");

const connectionString = process.env.CONNECTION_STRING_ATLAS;

const courses = require("./src/routes/route");
const app = express();

app.use(express.json());
app.use("/api/courses", courses);
// console.log(process.env.CONNECTION_STRING_ATLAS);
// database connection
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connection sucess .....");
  })
  .catch((err) => {
    console.log(err);
  });
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
