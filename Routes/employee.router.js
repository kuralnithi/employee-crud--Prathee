const express = require("express");
const {
  createEmployee,
  getEmployee,
  deleteEmployee,
} = require("../Controllers/employee.controller");

const router = express.Router();

router.post("/createemployee", createEmployee);
router.get("/getemployee", getEmployee);
router.post("/deleteemployee", deleteEmployee);

module.exports = router;
