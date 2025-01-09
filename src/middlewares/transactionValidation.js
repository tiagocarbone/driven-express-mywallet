import {transactionSchema} from "../schemas/transactionSchema.js"

export function transactionValidation(req, res, next) {
  const validation = transactionSchema.validate(req.body);
    console.log("passou")
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}

