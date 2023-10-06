// Local Modules
import {
  ProductsModel
} from '../models';

export default class CategoryService {
  static getAllBouquets() {
    return ProductsModel.getAllBouquets();
  }

  static addBouquet(payload) {
    return ProductsModel.addBouquet(payload);
  }

  static updateBouquet(id, payload) {
    return ProductsModel.updateBouquet(id, payload);
  }

  static deleteBouquet(id) {
    return ProductsModel.deleteBouquet(id);
  }

  static getAllGifts() {
    return ProductsModel.getAllGifts();
  }

  static addGift(payload) {
    return ProductsModel.addGift(payload);
  }

  static updateGift(id, payload) {
    return ProductsModel.updateGift(id, payload);
  }

  static deleteGift(id, payload) {
    return ProductsModel.deleteGift(id, payload);
  }

  static getAllWreaths() {
    return ProductsModel.getAllWreaths();
  }

  static addWreath(payload) {
    return ProductsModel.addWreath(payload);
  }

  static updateWreath(id, payload) {
    return ProductsModel.updateWreath(id, payload);
  }

  static deleteWreath(id, payload) {
    return ProductsModel.deleteWreath(id, payload);
  }

  static getAllByUsersId(usersId, categoryName) {
    return ProductsModel.getAllByUsersId(usersId, categoryName);
  }

  static getBouquetById(id) {
    return ProductsModel.getBouquetById(id);
  }

  static getGiftById(id) {
    return ProductsModel.getGiftById(id);
  }

  static getWreathById(id) {
    return ProductsModel.getWreathById(id);
  }

  static getBouquetByLimit(limit) {
    return ProductsModel.getBouquetByLimit(limit);
  }

  static getGiftByLimit(limit) {
    return ProductsModel.getGiftByLimit(limit);
  }

  static getWreathByLimit(limit) {
    return ProductsModel.getWreathByLimit(limit);
  }
}
