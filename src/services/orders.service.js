// Local Modules
import { OrdersModel } from '../models';

export default class OrdersService {
  static async add(payload) {
    return OrdersModel.create(payload);
  }

  static async getByCompanyName(companyName) {
    return OrdersModel.getByCompanyName(companyName);
  }
}
