const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true, 
    trim: true,     
    unique: true,    
    match: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 
  },
  password: { type: String, required: true ,minlength:6,maxlength:12},
  role: { type: String, enum: ["Admin", "User"], default: "User" },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", userSchema);
