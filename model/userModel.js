const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is a required field !"],
  },
  password: {
    type: String,
    required: [true, "password is a required field !"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
