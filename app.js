const express = require("express");
const app = express();

// returns result if the page is refreshed
app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.get("/", (req, res) => {
  res.send("Successful response.");
});

// app.listen(2000,()=>console.log("listening on port 3000"))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
