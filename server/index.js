const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;
const router = express.Router();
const College = require("../models/College");

// Enable CORS
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://siddantheedu:mjPr0HC6E2cQEiXd@cluster0.bbxuxk5.mongodb.net/",
    { useNewUrlParser: true }
  )
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json("test api");
});

app.use('/api/colleges', collegesRoute);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
