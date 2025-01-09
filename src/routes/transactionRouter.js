import { Router } from "express";
import { getTransaction, transaction } from "../controllers/transactionController.js";
import { transactionValidation } from "../middlewares/transactionValidation.js";
import validarToken from "../middlewares/authMiddleware.js";



const transactionRouter = Router();
//transactionRouter.get("/transaction", getTransaction );

transactionRouter.post("/transactions",transactionValidation, validarToken,transaction )
/*
authRouter.post("/sign-in",  )
*/
export default transactionRouter;