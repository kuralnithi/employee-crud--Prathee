const employeeModel = require("../Models/employeeModel");

exports.createEmployee = async (req, res) => {
  try {
    const employee = await req.body.data;

    console.log("createEmployee", employee);
    const newEmployee = await employeeModel.findOneAndUpdate(
      { email: employee.email },
      employee,
      { upsert: true , new: true }
    );
    if (!newEmployee)
      return res.status(404).json({ message: "Error creating employee" });

    console.log("new employee", newEmployee);

    const Employee = await employeeModel.find({});

    return res
      .status(200)
      .json({ message: "employee created successfully", data: Employee });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "error creating employee" });
  }
};

exports.getEmployee = async (req, res) => {
  try {
    const Employee = await employeeModel.find({});

    if (!Employee)
      return res
        .status(404)
        .json({ message: "employee not found while searching" });

    console.log(Employee);

    return res
      .status(200)
      .json({ message: "employee returned successfully", data: Employee });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "error getting employee" });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const { _id } = await req.body.data;
    console.log("eeeeeee", req.body.data.email);
    const DeletedEmployee = await employeeModel.findOneAndDelete(
      { _id: _id },
      { new: true }
    );

    if (!DeletedEmployee)
      return res
        .status(404)
        .json({ message: "employee not found while updating" });
    console.log(DeletedEmployee);

    const Employee = await employeeModel.find({});

    return res
      .status(200)
      .json({ message: "employee deleted successfully", data: Employee });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "error deleting employee" });
  }
};
