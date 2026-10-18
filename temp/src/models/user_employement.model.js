const mongoose = require("mongoose");

const userEmploymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
      index: true,
    },
    designation: { type: String, required: true, trim: true }, // Assigned Title
    isHrOrRecruiter: { type: Boolean, default: false }, // Permissions Flag
    companyVerifiedTick: { type: Boolean, default: false }, // Approved special tick

    joiningDate: { type: Date, required: true },
    endDate: { type: Date, default: null }, // Null = Currently Working

    offerLetterUrl: { type: String, default: "" },
    farewellPost: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },

    status: {
      type: String,
      enum: ["pending", "active", "left", "terminated", "rejected"],
      default: "pending",
      index: true,
    },
  },
  { timestamps: true },
);

// Fast Lookup for Active Employment
userEmploymentSchema.index({ user: 1, status: 1 });
userEmploymentSchema.index({ company: 1, status: 1 });

const userEmploymentModel = mongoose.model(
  "UserEmployment",
  userEmploymentSchema,
);
module.exports = userEmploymentModel;
