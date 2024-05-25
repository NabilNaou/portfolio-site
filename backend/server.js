const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const dbURI = process.env.MONGODB_URI;

mongoose
  .connect(dbURI, {})
  .then(() => {
    console.warn("Debugging: Successfully connected!");
  })
  .catch((err) => {
    console.error("Debugging: Connection error", err);
    process.exit();
  });

const studentRoutes = require("./routes/student.routes");
app.use("/api", studentRoutes);

app.get("/", (req, res) => {
  res.send("Placeholder Text");
});

app.listen(port, () => {
  console.warn(`Debugging: Server port: ${port}`);
});
