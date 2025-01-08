import { Router } from "express";

import {userSchemaValidationSignUp} from "../middlewares/userSchemaValidationMiddleware.js"
import { getFunction, signIn, signUp } from "../controllers/authController.js";


const authRouter = Router();
authRouter.get("/", getFunction);
authRouter.post("/sign-up", userSchemaValidationSignUp,  signUp)
authRouter.post("/sign-in",  signIn)

export default authRouter;