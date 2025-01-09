import { Router } from "express";
import { deleteTransaction, getTransaction, postTransaction, putTransaction } from "../controllers/transactionController.js";
import { transactionValidation } from "../middlewares/transactionValidation.js";
import validarToken from "../middlewares/authMiddleware.js";



const transactionRouter = Router();
//transactionRouter.get("/transaction", getTransaction );

transactionRouter.post("/transactions",transactionValidation, validarToken,postTransaction );
transactionRouter.get("/transactions", validarToken, getTransaction);
transactionRouter.put("/transactions/:id", transactionValidation, validarToken , putTransaction)
transactionRouter.delete("/transactions/:id", validarToken , deleteTransaction)
/*
authRouter.post("/sign-in",  )
*/
export default transactionRouter;