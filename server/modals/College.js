const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  id: String,
  name: String,
  city: String,
  state: String,
  collegeAddress: String,
  parameter: [
    {
      name: String,
      Score: Number,
    },
  ],
  TotalScore:Number,
});

const College = mongoose.model("College", collegeSchema);

module.exports = College;