import Userdb from "../models/userModel.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    //validate request
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ message: "field should not be empty" });
    }

    //searching on the database
    const userEmail = await Userdb.findOne({ email: req.body.email });
    if (!userEmail) return res.status(400).json("Invalid email or password");

    const validPassword = await bcrypt.compare(
      req.body.password,
      userEmail.password
    );
    if (!validPassword)
      return res.status(400).json("Invalid email or password");

    //jwt operation and response
    const token = user.generateAuthToken();

    res.status(200).send({ message: "Sucessful login..." });
  } catch (error) {
    res.status(400).send("Some error inside the code");
  }
};
