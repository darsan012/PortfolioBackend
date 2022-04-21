import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv/config";

const jwtSecretKey = process.env.jwtSecretKey;

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email format",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  age: Number,
  sex: String,
  isAdmin: Boolean,
});

//for authentication token
courseSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, is_Admin: this.isAdmin }, //payload
    jwtSecretKey
  );
  return token;
};

//here Userdb is class and has pascal naming convention
const Userdb = mongoose.model("userdb", courseSchema);

export default Userdb;
