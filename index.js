const express = require("express");
const { ConnectDb } = require("./Database/db.config");
const cors = require("cors");
const employeeRouter = require("./Routes/employee.router");
const userRouter = require("./Routes/user.router");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", employeeRouter);
app.use("/api", userRouter);

app.listen(5000, () => {
  console.log("server listening on port", 5000);
});

ConnectDb();
