const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: String,
  publishedYear: Number,
});

//here Userdb is class and has pascal naming convention
const Userdb = mongoose.model("userdb", courseSchema);

module.exports = Userdb;
