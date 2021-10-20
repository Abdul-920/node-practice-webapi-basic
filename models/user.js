const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    userRole: {
      type: String,
      enum: ["Parent", "Child"],
      default: "Parent",
    },
    families: [{
      type: Schema.Types.ObjectId,
      ref: 'Family',
    }]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
