const mongoose = require("mongoose");

const parameterSchema = new mongoose.Schema({
  name: String,
  // prevYear: Number,
  // currentYear:Number,
  // prevYearTotal:Number,
  // currentYearTotal:Number,
  // TotalUsers:Number,
  Score: Number,
  // Quantity: {
  //   weight: Number,
  //   units: String,
  // },
});

const Parameter = mongoose.model("Parameter", parameterSchema);

module.exports = Parameter;