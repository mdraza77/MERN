const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      length: 30,
    },
    email: {
      type: String,
      length: 50,
    },
    contact: {
      type: String,
      length: 15,
    },
    gender: {
      type: String,
      enum: ["M", "F", "O"],
      default: null,
    },
    address: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
    dob: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
