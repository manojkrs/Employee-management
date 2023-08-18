import express from "express";
import dotenv from "dotenv";
import { MongoConnect } from "./DB.js";
import cors from "cors";

import EmployeeRouter from "./Routes/EmployeeRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
// DataBase Connectioins
MongoConnect();

app.get("/", (req, res) => {
  res.send("<h1>Welcome To Your Node Server</h1>");
});

const PORT = process.env.PORT || 5000;
// console.log("port", PORT);
app.listen(PORT, () => console.log(`Listening to localhost:${PORT}`));

//API endpoints

// Employee Routes
app.use("/employee", EmployeeRouter);
