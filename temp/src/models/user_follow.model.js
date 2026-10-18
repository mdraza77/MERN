const mongoose = require("mongoose");

const userFollowSchema = new mongoose.Schema(
  {
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    targetType: {
      type: String,
      enum: ["user", "company"],
      required: true,
    },
    targetUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    targetCompany: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      default: null,
    },
  },
  { timestamps: true },
);

// Compound Unique Indexes: Duplicate follow request ko database layer par hi block karta hai
userFollowSchema.index(
  { follower: 1, targetUser: 1 },
  {
    unique: true,
    partialFilterExpression: { targetUser: { $type: "objectId" } },
  },
);

userFollowSchema.index(
  { follower: 1, targetCompany: 1 },
  {
    unique: true,
    partialFilterExpression: { targetCompany: { $type: "objectId" } },
  },
);

const userFollowModel = mongoose.model("UserFollow", userFollowSchema);
module.exports = userFollowModel;
