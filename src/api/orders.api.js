// NPM Modules
import express from 'express';

// Local Modules

import { OrdersController } from '../controller';
import OrdersValidation from '../middlewares/validation/orders.validation';
// import AuthMiddleware from '../auth/auth.middlware';

const router = express.Router();

router.post('/add',
  OrdersValidation.validateAddArgs,
  OrdersController.add);

router.get('/:companyName', OrdersController.getByCompanyName);

export default router;
