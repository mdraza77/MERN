const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
  } catch (error) {
    console.log("Error while connectiing to Database", error);
  }
};

module.exports = connectToDB;
