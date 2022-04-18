const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const Joi = require("joi");

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
router.get("/", (req, res) => {
  res.send("Success...");
});

router.get("/api/courses", (req, res) => {
  res.send(courses);
});

router.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("the course with given id is not there");
  res.send(course);
});

//creating course
router.post("/", (req, res) => {
  //validating input
  const result = inputValidation(req.body);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

//function for validating input
function inputValidation(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
}

module.exports = router;
