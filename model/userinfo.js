const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    phone: {
      type: Number,
      required: true,
    },
    fullname: {
      type: String,
    },
    address: {
      house_no: {
        type: String,
      },
      street: {
        type: String,
      },
      pincode: {
        type: Number,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserInfo", UserSchema);
