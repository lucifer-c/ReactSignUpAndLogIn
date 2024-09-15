const express = require("express");
const mongoose = require("mongoose");
const controller = require("./controllers");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signUp", controller.signUp);
app.post("/signIn", controller.signIn);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Successfully connected to MongoDB"); // Log after successful connection
    app.listen(process.env.PORT, () => {
      console.log(`The app is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
