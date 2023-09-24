const express = require('express');
const router = express.Router();
const College = require('../models/College');

// Create a new college
router.post('/create', async (req, res) => {
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

    res.json({ message: 'College created successfully' });
  } catch (error) {
    console.error('Error creating college:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
