import { Router } from "express";

import {userSchemaValidationSignUp} from "../middlewares/userSchemaValidationMiddleware.js"
import {  signIn, signUp } from "../controllers/authController.js";


const authRouter = Router();
authRouter.get("/");
authRouter.post("/sign-up", userSchemaValidationSignUp,  signUp)
authRouter.post("/sign-in",  signIn)

export default authRouter;