const mongoose = require("mongoose");

const userBadgeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    badgeName: { type: String, required: true }, // e.g., "Top Creator", "Super Recruiter"
    badgeIcon: { type: String, required: true },
    reason: { type: String, default: "" },
  },
  { timestamps: true },
);

const userBadgeModel = mongoose.model("UserBadge", userBadgeSchema);
module.exports = userBadgeModel;
