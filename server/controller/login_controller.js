import express from "express";
import Userdb from "../model/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv/config";

const jwtSecretKey = process.env.jwtSecretKey;

console.log(jwtSecretKey);

export const find = async (req, res) => {
  try {
    //authenticate user
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ message: "field should not be empty" });
    }
    const email = req.body.email;
    const password = req.body.password;

    const userEmail = await Userdb.findOne({ email: email });
    if (bcrypt.compare(password, userEmail.password)) {
      const token = jwt.sign(email, jwtSecretKey);
      res.status(201).send({ message: "Sucessful login...", token });
    } else {
      res.send("Invalid login details");
    }

    //jwt operation
  } catch (error) {
    res.status(400).send("user not found");
  }
};
