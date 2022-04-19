const express = require("express");
const Userdb = require("../model/model");

//create and save new users
exports.create = (req, res) => {
  //validate request

  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
    return;
  }

  //new user
  const user = new Userdb({
    name: req.body.name,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  });

  //save user
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "some error occured while creating a create operation",
      });
    });
};

//retrieve and return all users or retrive and return single users
exports.find = (req, res) => {};

//update the new user identified user by user id
exports.update = (req, res) => {};

//delete a user with specific user id
exports.delete = (req, res) => {};
