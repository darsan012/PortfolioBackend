const string = require("joi/lib/types/string");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  author: string,
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

//here Userdb is class and has pascal naming convention
const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
