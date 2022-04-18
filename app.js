const express = require("express");
const res = require("express/lib/response");
const app = express();
app.use(express.json());

// returns result if the page is refreshed
// app.use((req, res, next) => {
//   console.log("Time: ", Date.now());
//   next();
// });

const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
];
//getting data
app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("the course with given id is not there");
  res.send(course);
});

//posting course

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
