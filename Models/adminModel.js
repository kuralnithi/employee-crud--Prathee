const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  username: String,

  emailid: String,

  password: String,

  resetPasswordToken: String,

  resetPasswordTokenExpiery: String,
});

const adminModel = mongoose.model("adminModel", adminSchema);

module.exports = adminModel;
