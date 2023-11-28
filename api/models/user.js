const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
  addresses: [
    {
      name: String,
      mobileno: String,
      houseno: String,
      street: String,
      landmark: String,
      city: String,
      countrey: String,
      postalcode: String,
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  CreatedAt: [
    {
      type: Date,
      default: Date.now,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
