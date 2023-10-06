// NPM Modules
import { Model } from 'objection';
import knex from 'knex';
import knexConfigs from '../../knex.configs';

const pg = knex(knexConfigs.development);

class ProductsModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'products'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        companyName: { type: 'string', minLength: 1, maxLength: 255 },
        flowerName: { type: 'string', minLength: 1, maxLength: 255 },
        picture: { type: 'string', minLength: 1, maxLength: 255 },
        price: { type: 'integer' }
      }
    };
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

  //Bouquets
  static getAllBouquets() {
    return ProductsModel.query().select('*').where('product_status', '=', 'bouquets').orderBy('id').returning('*');
  }

  static addBouquet(payload) {
    return ProductsModel.query().insert(payload).returning('*');
  }

  static updateBouquet(id, payload) {
    return ProductsModel.query().update(payload).where('id', '=', id).andWhere('product_status', '=', 'bouquets').returning('*');
  }

  static deleteBouquet(id) {
    return ProductsModel.query().del().where('id', '=', id).andWhere('product_status', '=', 'bouquets').returning('*');
  }

  static getBouquetById(id) {
    return ProductsModel.query().select('*').where('id', '=', id).andWhere('product_status', '=', 'bouquets').returning('*');
  }

  static async getBouquetByLimit(limit) {
    return ProductsModel.query().select('*').where('product_status', '=', 'bouquets').orderBy('id', 'desc').limit(limit);
  }


  // Gifts
  static getAllGifts() {
    return ProductsModel.query().select('*').where('product_status', '=', 'gifts').orderBy('id');
  }

  static getGiftById(id) {
    return ProductsModel.query().select('*').where('id', '=', id).andWhere('product_status', '=', 'gifts').orderBy('id');
  }

  static async getGiftByLimit(limit) {
    return ProductsModel.query().select('*').where('product_status', '=', 'gifts').orderBy('id', 'desc').limit(limit);
  }

  static addGift(payload) {
    return ProductsModel.query().insert(payload).returning('*');
  }

  static updateGift(id, payload) {
    return ProductsModel.query().update(payload).where('id', '=', id).andWhere('product_status', '=', 'gifts').returning('*');
  }

  static deleteGift(id) {
    return ProductsModel.query().del().where('id', '=', id).andWhere('product_status', '=', 'gifts').returning('*');
  }


  // Wreaths
  static getAllWreaths() {
    return ProductsModel.query().select('*').where('product_status', '=', 'wreaths').orderBy('id');
  }

  static getWreathById(id) {
    return ProductsModel.query().select('*').where('id', '=', id).andWhere('product_status', '=', 'wreaths');
  }

  static async getWreathByLimit(limit) {
    return ProductsModel.query().select('*').where('product_status', '=', 'wreaths').orderBy('id', 'desc').limit(limit);
  }

  static addWreath(payload) {
    return ProductsModel.query().insert(payload).returning('*');
  }

  static updateWreath(id, payload) {
    return ProductsModel.query().update(payload).where('id', '=', id).andWhere('product_status', '=', 'wreaths').returning('*');
  }

  static deleteWreath(id) {
    return ProductsModel.query().del().where('id', '=', id).andWhere('product_status', '=', 'wreaths').returning('*');
  }

  static async getAllByUsersId(usersId, categoryName) {
    const allProducts = await pg('products')
    .select(
          'products.id',
          'info', 
          'company_name', 
          // 'product_status', 
          'description', 
          'sale_price', 
          'price', 
          'availability', 
          'categoryName', 
          'size', 
          'sale', 
          'picture', 
          'flowerName', 
          'products.users_id', 
          // 'companyName'
          )
    .join('users', 'products.users_id', 'users.id')
    .where('products.users_id', '=', usersId)
    .andWhere('products.categoryName', '=', categoryName)
    .orderBy('products.users_id');

    return allProducts;
  }
}

export default ProductsModel;
