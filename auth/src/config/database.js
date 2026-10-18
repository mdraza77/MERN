import mongoose from "mongoose";
import config from "./config.js";

const connectToDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Failed to connect", error);
  }
};

export default connectToDB;
