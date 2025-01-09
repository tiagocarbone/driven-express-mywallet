import { Router } from "express";

import {userSchemaValidationSignIn, userSchemaValidationSignUp} from "../middlewares/userSchemaValidationMiddleware.js"
import {  signIn, signUp } from "../controllers/authController.js";


const authRouter = Router();
authRouter.get("/");
authRouter.post("/sign-up", userSchemaValidationSignUp,  signUp)
authRouter.post("/sign-in", userSchemaValidationSignIn, signIn)

export default authRouter;