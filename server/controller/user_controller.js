import Userdb from "../model/user_model.js";

//create and save new users
export const create = async (req, res) => {
  //validate request

  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
    return;
  }

  //new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
    sex: req.body.sex,
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
export const find = (req, res) => {
  Userdb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error occured while retrieving information",
      });
    });
};

//update the new user identified user by user id
export const update = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "To update content can not be empty" });
    return;
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `cannot update user with id: ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update user information" });
    });
};

//delete a user with specific user id
export const deleteUser = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
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
