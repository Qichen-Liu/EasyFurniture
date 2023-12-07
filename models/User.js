const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    avatar: {
      type: String,
      required: true,
      default: "",
    },
    displayName: {
      type: String,
      require: true,
      default: "",
    },
    email: {
      type: String,
      require: true,
      default: "",
    },
  },
  { collection: "User" },
);

module.exports = mongoose.model("User", userSchema);
