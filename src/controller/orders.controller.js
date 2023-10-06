// Local Modules
import { SuccessHandlerUtil } from '../utils';
import { OrdersService } from '../services';

export default class OrdersController {
  static async add(req, res, next) {
    try {
      const payload = req.body;

      const user = await OrdersService.add(payload);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async getByCompanyName(req, res, next) {
    try {
      const { companyName } = req.params;

      const user = await OrdersService.getByCompanyName(companyName);
      SuccessHandlerUtil.handleList(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async getPriceOrder(req, res, next) {
    try {
      const { price } = req.body;
      
      const user = await OrdersService.getPriceOrder(price);
      SuccessHandlerUtil.handleList(res, next, user);
    } catch (error) {
      next(error);
    }
  }
}
