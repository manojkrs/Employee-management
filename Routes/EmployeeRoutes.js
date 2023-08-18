import express from "express";
import {  store, getemployes, deletedEmployee , index,update} from "../Controllers/EmployeeController.js";


const router = express.Router();

router.post("/store", store);
router.get("/employes",index)
router.get("/detail/:id",getemployes)
router.delete("/destroy/:id",deletedEmployee)
router.patch("/update/:id",update)
export default router;
