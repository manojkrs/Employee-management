import Employee from "../Models/EmployeeModel.js";

// create new employee

const store = async (req, res) => {
  try {
    const { name, email, jobTitle, department } = req.body;
    const data = await Employee.create({
      name: name,
      email: email,
      jobTitle: jobTitle,
      department: department,
    });
    
    if (data)
      return res.status(200).json({ msg: "Employee added successfully." });
    else
      return res
        .status(400)
        .json({ msg: "Failed to add message to the database" });
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

// list of all Employess
const index = async (req, res) => {
  try {
    const employees = await Employee.find();
    
    if (employees !== null && employees.length > 0) {
      return res.status(200).json(employees);
    } else {
      return res.status(404).json({ msg: "No employees found." });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error." });
  }
};



// particular employee details
const getemployes = async (req, res) => {


  try {
    const employeeId = req.params.id;
    
    const getemployes = await Employee.findById( employeeId );
   
    if (getemployes) {
      res.status(200).json({ msg: getemployes });
    } else {
      res.status(404).json({ msg: "Employee not found." });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error." });
  }
};


// update the employee details
const update = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const { name, email, jobTitle, department } = req.body;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      employeeId,
      {
        name: name,
        email: email,
        jobTitle: jobTitle,
        department: department,
      },
      { new: true }
    );

    if (updatedEmployee) {
      return res.status(200).json({ msg: "Employee updated successfully." });
    } else {
      return res.status(404).json({ msg: "Employee not found." });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error." });
  }
};

// delete the employee data in DB
const deletedEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const deletedEmployee = await Employee.findByIdAndRemove(employeeId);

    if (deletedEmployee) {
      return res.status(200).json({ msg: "Employee deleted successfully." });
    } else {
      return res.status(404).json({ msg: "Employee not found." });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error." });
  }
};

export { store, getemployes, deletedEmployee,index ,update};
