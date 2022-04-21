import Userdb from "../models/userModel.js";
import bcrypt from "bcrypt";

//create and save new users
const create = async (req, res) => {
  // try{

  // }

  try {
    if (!req.body) {
      res.status(400).send({ message: "content can not be empty" });
      return;
    }

    //salt is used so the hashed pass is different for different users
    const salt = await bcrypt.genSalt();
    const hashedPasswd = await bcrypt.hash(req.body.password, salt);

    //new user
    const user = new Userdb({
      name: req.body.name,
      email: req.body.email,
      password: hashedPasswd,
      age: req.body.age,
      sex: req.body.sex,
    });

    //save user

    await user.save();

    //for sending response to the client using token
    const token = user.generateAuthToken();
    res.header("x-auth-token", token).json({
      name: user.name,
      email: user.email,
      age: user.age,
      sex: user.sex,
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already exist" });
    }
    res.status(500).send({
      message:
        err.message || "some error occured while creating a create operation",
    });
  }
  //validate request
};

//retrieve and return all users or retrive and return single users
const find = async (req, res) => {
  try {
    const user = await Userdb.find();
    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: err.message || "error occured while retrieving information",
    });
  }
};

//update the new user identified user by user id
const update = async (req, res) => {
  try {
    //validate request
    if (!req.body) {
      res.status(400).send({ message: "To update content can not be empty" });
      return;
    }
    const id = req.params.id;
    const data = await Userdb.findByIdAndUpdate(id, req.body);
    if (!data) {
      res.status(404).send({
        message: `cannot update user with id: ${id}. Maybe user not found!`,
      });
    } else {
      res.send(data);
    }
  } catch (err) {
    res.status(500).send({ message: "Error update user information" });
  }
};

//delete a user with specific user id
const deleteUser = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: `cannot delete user with id: ${id}. Maybe user not found!`,
        });
      } else {
        res.send({
          message: "user was deleted sucessfully",
          data,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "could not delete user with id = " + id });
    });
};

export { create, find, update, deleteUser };
