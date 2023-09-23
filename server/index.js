const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

// Enable CORS
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://siddantheedu:mjPr0HC6E2cQEiXd@cluster0.bbxuxk5.mongodb.net/",
    { useNewUrlParser: true }
  )
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

//fetch data from the request
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json("test api");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
