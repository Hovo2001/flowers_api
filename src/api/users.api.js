// NPM Modules
import express from 'express';

// Local Modules
import { UsersController } from '../controller';
// import UsersValidation from '../middlewares/validation/users.validation';
import { ImageUploadMiddleware } from '../middlewares/image-upload.middleware';
// import AuthMiddleware from '../auth/auth.middlware';

const router = express.Router();

router.post('/add',
  // UsersValidation.validateAddArgs,
  UsersController.add);

router.delete('/:id', UsersController.delete);

router.get('/:usersId',
  UsersController.getUser);

router.get('/all',
  UsersController.getAllUsers);

router.put('/:id', UsersController.edit);

router.post(
  '/addPicture',
  // AuthMiddleware.authenticateFor(['admin']),
  ImageUploadMiddleware.upload(),
  UsersController.addPicture
);

router.get('/:category/:companyName/:limit', UsersController.getCompanyDataWithLimit);

export default router;
