import { Router } from "express";
import {getFunction}  from "../controllers/authController.js";

const authRouter = Router();
authRouter.get("/", getFunction);

export default authRouter;