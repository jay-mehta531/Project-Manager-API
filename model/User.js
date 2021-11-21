const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 6,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 3,
  },
  password: {
    type: String,
    required: true,
    min: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
