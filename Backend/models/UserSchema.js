const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
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
  home: {
    type: Boolean,
    default: false,
  },
  commonsetting: {
    type: Boolean,
    default: false,
  },
  banner: {
    type: Boolean,
    default: false,
  },
  pages: {
    type: Boolean,
    default: false,
  },
  blogs: {
    type: Boolean,
    default: false,
  },
  leads: {
    type: Boolean,
    default: false,
  }
});

mongoose.model("USER", userSchema);
