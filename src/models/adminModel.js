import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv/config";

const adminSecretKey = process.env.adminSecretKey;

const adminSchema = new mongoose.Schema({
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
  isAdmin: Boolean,
});

//for authentication token
courseSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, is_Admin: this.isAdmin }, //payload
    adminSecretKey
  );
  return token;
};

//here Admindb is class and has pascal naming convention
const Admindb = mongoose.model("admindb", adminSchema);

export default Admindb;
