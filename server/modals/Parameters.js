const mongoose = require("mongoose");

const parameterSchema = new mongoose.Schema({
  name: String,
  about: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

const Parameter = mongoose.model("Parameter", parameterSchema);

module.exports = Parameter;
