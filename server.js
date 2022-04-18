const express = require("express");
const dotenv = require("dotenv/config");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("connection succeded");
});

app.listen(port, () => console.log(`listening on port ${port}...`));
