import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//here Userdb is class and has pascal naming convention
const Logindb = mongoose.model("logindb", loginSchema);

export default Logindb;
