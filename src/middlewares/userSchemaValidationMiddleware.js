import { userSchemaSignUp} from "../schemas/userSchema.js";

export function userSchemaValidationSignUp(req, res, next) {
  const validation = userSchemaSignUp.validate(req.body);

  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}



