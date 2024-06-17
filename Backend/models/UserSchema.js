const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  Role: {
    type: String,
    default: "user",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("USER", userSchema);
