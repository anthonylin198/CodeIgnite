const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  progress: {},
  isAuthenticated: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema); // if the collection already exists
