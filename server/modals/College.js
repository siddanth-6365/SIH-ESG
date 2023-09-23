const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  city: String,
  state: String,
  parameters: [{ type: Schema.Types.ObjectId, ref: "Parameter" }], // Reference to Parameter documents
});

const College = mongoose.model("College", collegeSchema);

module.exports = College;
