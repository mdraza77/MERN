const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/User.js");

const app = express();

app.use(express.json());

app.post("/add-user", async (req, res) => {
  try {
    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      gender: req.body.gender,
      address: req.body.address,
      status: req.body.status,
      dob: req.body.dob,
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      message: "User created successfully!",
      data: savedUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating user",
      error: error.message,
    });
  }
});

const mongoURI = "mongodb://127.0.0.1:27017/testdb";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error while connecting!", err);
  });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(5000, () =>
  console.log("Backend is running! http://localhost:5000"),
);
