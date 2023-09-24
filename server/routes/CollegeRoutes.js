const express = require("express");
const router = express.Router();
const College = require("../modals/College");

router.post("/create", async (req, res) => {
  try {
    const { name, id, city, state, collegeAddress, parameters } = req.body;

    const college = new College({
      id,
      name,
      city,
      state,
      collegeAddress,
      parameters,
    });

    await college.save();

    res.json({ message: "College created successfully" });
  } catch (error) {
    console.error("Error creating college:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
