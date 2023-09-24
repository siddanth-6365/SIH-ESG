const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  city: String,
  state: String,
  collegeAddress: String,
  parameters: [
    {
      name: String,
      Score: Number,
    },
  ],
});

const College = mongoose.model("College", collegeSchema);

module.exports = College;
