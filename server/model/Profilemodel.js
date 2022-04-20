import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  age: {
    type: Number,
  },
  sex: String,
});

//here Userdb is class and has pascal naming convention
const Userdb = mongoose.model("userdb", courseSchema);

export default Userdb;
