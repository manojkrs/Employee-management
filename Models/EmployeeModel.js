import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
    },
    email: {
      type: "String",
    },
    jobTitle: {
      type: "String",
    },
    department: {
      type: "String",
    },
  },
  {
    timestamps: true,
  }
);

const EmployeeModel = mongoose.model("employee", EmployeeSchema);
export default EmployeeModel;
