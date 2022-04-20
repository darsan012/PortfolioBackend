import express from "express";
import Userdb from "../model/user_model.js";
import bcrypt from "bcrypt";

export const find = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ message: "field should not be empty" });
    }
    const email = req.body.email;
    const password = req.body.password;

    const userEmail = await Userdb.findOne({ email: email });
    if (bcrypt.compare(password, userEmail.password)) {
      res.status(201).send({ message: "Sucessful login..." });
    } else {
      res.send("Invalid login details");
    }
  } catch (error) {
    res.status(400).send("user not found");
  }
};
