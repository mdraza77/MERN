const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://raza01:Mdraza01@complete-backend.ttcog1s.mongodb.net/backend",
    );
    console.log("Database Connected");
  } catch (error) {
    console.error("Error while connecting with Database", error.message);
  }
};

module.exports = connectToDB;
