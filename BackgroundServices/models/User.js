const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    fullname: { type: String, require: true },
    email: { type: String, require: true },
    age: { type: Number },
    country: { type: String },
    address: { type: String },
    password:{type:String, required:true},
    status: { type: Number, default:0},
    role: { type: String, default:"user"},
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
