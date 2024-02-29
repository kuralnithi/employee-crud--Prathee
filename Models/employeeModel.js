const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: String,

  email: String,

  role: String,

  age: Number,

  experience: Number,

  ctc: Number,

  location: String,

});

const employeeModel = mongoose.model("employeeModel", employeeSchema);

module.exports = employeeModel;
