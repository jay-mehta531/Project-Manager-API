const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
  },
  content: {
    type: String,
    required: true,
    min: 6,
  },
  authorFirstName: {
    type: String,
    required: true,
    min: 3,
  },
  authorLastName: {
    type: String,
    required: true,
    min: 3,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);
