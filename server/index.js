const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PRT || 3030;
const College = require("./modals/College")

const collegesRoute = require("./routes/CollegeRoutes");

// Enable CORS
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL);

app.get("/", (req, res) => {
  res.json("test api");
});


app.post("/api/colleges", async (req, res) => {
  try {
    const parameters = req.body.parameter;
    const totalScore = parameters.reduce((sum, parameter) => sum + parameter.Score, 0);
    
    // Create a new object by spreading req.body and adding TotalScore
    const finalObj = { ...req.body, TotalScore: totalScore };
    const newCollege = new College(finalObj);
    const savedCollege = await newCollege.save();
    res.status(201).json(savedCollege);
  } catch (error) {
    console.error("Error creating college:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/colleges", async (req, res) => {
  try {
    const colleges = await College.find().sort({ TotalScore: -1 });
    res.json(colleges);
  } catch (error) {
    console.error("Error fetching colleges:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/colleges/:id", async (req, res) => {
  try {
    const college = await College.findOne({ id: req.params.id });
    if (!college) {
      return res.status(404).json({ message: "College not found" });
    }
    res.json(college);
  } catch (error) {
    console.error("Error fetching college by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/api/colleges/:id", async (req, res) => {
  try {
    const deletedCollege = await College.findOneAndRemove({ id: req.params.id });
    if (!deletedCollege) {
      return res.status(404).json({ message: "College not found" });
    }
    res.json({ message: "College deleted successfully" });
  } catch (error) {
    console.error("Error deleting college:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
