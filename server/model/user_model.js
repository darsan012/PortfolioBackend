import mongoose from "mongoose";

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
      /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
      "Invalid email format",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  age: Number,
  sex: String,
});

//here Userdb is class and has pascal naming convention
const Userdb = mongoose.model("userdb", courseSchema);

export default Userdb;
