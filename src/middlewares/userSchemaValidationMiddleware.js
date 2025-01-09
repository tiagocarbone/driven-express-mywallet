import { userSchemaSignIn, userSchemaSignUp} from "../schemas/userSchema.js";

export function userSchemaValidationSignUp(req, res, next) {
  const validation = userSchemaSignUp.validate(req.body);

  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}

export function userSchemaValidationSignIn(req, res, next) {
  const validation = userSchemaSignIn.validate(req.body);

  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}



