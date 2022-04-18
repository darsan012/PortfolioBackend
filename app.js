const express = require("express");
const res = require("express/lib/response");
const courses = require("./src/routes/route");
const app = express();

app.use(express.json());
app.use("/api/courses", courses);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
