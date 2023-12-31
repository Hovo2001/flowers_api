// NPM Modules
import { Model } from 'objection';

class OrdersModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'orders'; }

  $formatJson(json) {
    json = super.$formatJson(json);
    delete json.password;
    return json;
  }

  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }

  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date;
  }

  // Methods
  static async create(payload) {
    return OrdersModel.query().insert(payload);
  }

  static async getByCompanyName(companyName) {
    return OrdersModel.query().select('*').where('company_name', '=', companyName);
  }

  static async getPriceOrder(price) {
    let priceWithKm = Math.round(price/1000);
    if(priceWithKm <= 10) {
      priceWithKm = 1000;
      return { price: priceWithKm }
    }
    return { price: priceWithKm*100 }
  }
}

export default OrdersModel;
