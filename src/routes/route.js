const express = require("express");
const router = express.Router();

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
// router.get("/", (req, res) => {
//   res.send("Successful response.");
// });

router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("the course with given id is not there");
  res.send(course);
});

//posting course
module.exports = router;
