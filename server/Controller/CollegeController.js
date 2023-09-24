const College = require("../modals/College");

const createCollege = async (req, res) => {
  try {
    const { name, city, state, collegeAddress, parameters } = req.body;

    const college = new College({
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
};

module.exports = {
  createCollege,
};
