import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: [true, "project title needed"],
    trim: true,
  },
  projectBody: {
    type: String,
    trim: true,
  },
  projectLink: {
    type: String,
    required: [true, "project title needed"],
    trim: true,
  },
});

const Carddb = mongoose.model("gitdata", cardSchema);

// export default Carddb;
