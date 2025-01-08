import { Router } from "express";
import {getFunction, signUp}  from "../controllers/authController.js";
import userSchemaValidationMiddleware from "../middlewares/userSchemaValidationMiddleware.js";

const authRouter = Router();
authRouter.get("/", getFunction);
authRouter.post("/sign-up", userSchemaValidationMiddleware, signUp)

export default authRouter;