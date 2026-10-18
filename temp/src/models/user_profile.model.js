const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    fullName: { type: String, required: true, trim: true },
    avatarUrl: { type: String, default: "" },
    bio: { type: String, default: "" },
    cvUrl: { type: String, default: "" },
    skills: [{ type: String, index: true }], // Searchable array index

    // Counter Caching (Feed & List Screen Performance ke liye)
    followersCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
  },
  { timestamps: true },
);

// Full-text Search Index for Candidate Discovery
userProfileSchema.index({ fullName: "text", skills: "text" });

const userProfileModel = mongoose.model("UserProfile", userProfileSchema);
module.exports = userProfileModel;
