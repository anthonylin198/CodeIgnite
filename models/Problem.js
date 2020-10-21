const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    // unique: true,
    trim: true,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "Desscription cannot be more than 200 characters"],
  },
});

module.exports =
  mongoose.models.Problem || mongoose.model("Problem", ProblemSchema); // if the collection already exists
