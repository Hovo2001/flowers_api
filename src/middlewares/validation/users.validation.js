import { UsersSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class UsersValidation {
  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, UsersSchema.signupSchema, next);
  }
}

export default UsersValidation;
