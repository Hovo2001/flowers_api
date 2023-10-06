// Local Modules
import { CategoryService, Service } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class CategoryController {
  // Mail sender
  static async sendMail(req, res, next) {
    try {
      const { name, email, text } = req.body;

      await Service.sendMail(name, email, text);
      SuccessHandlerUtil.handleList(res, next, { succes: true });
    } catch (error) {
      next(error);
    }
  }

  // Bouquets methods
  static async getAllBouquets(req, res, next) {
    try {
      const result = await CategoryService.getAllBouquets();
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async addBouquet(req, res, next) {
    try {
      const payload = req.body;

      console.log(payload);
      
      payload.product_status = 'bouquets'
      payload.price = Number(payload.price)
      payload.size = Number(payload.size)
      if (payload.sale) {
        payload.sale = Number(payload.sale)
        payload.sale_price = payload.price - (payload.price * payload.sale) / 100;
        payload.sale_price = Math.round(payload.sale_price);
      }
      const result = await CategoryService.addBouquet(payload);
      SuccessHandlerUtil.handleAdd(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async updateBouquet(req, res, next) {
    try {
      const { id } = req.params;
      const payload = req.body;
      payload.price = Number(payload.price)
      payload.size = Number(payload.size)
      if (payload.sale) {
        payload.sale = Number(payload.sale)
        payload.sale_price = payload.price - (payload.price * payload.sale / 100);
        payload.sale_price = Math.round(payload.sale_price);
      }
      const result = await CategoryService.updateBouquet(id, payload);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async deleteBouquet(req, res, next) {
    try {
      const { id } = req.params;
      const result = await CategoryService.deleteBouquet(id);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async getBouquetById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await CategoryService.getBouquetById(id);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async getBouquetByLimit(req, res, next) {
    try {
      const { limit } = req.params;
      const result = await CategoryService.getBouquetByLimit(limit);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  // Gifts
  static async getAllGifts(req, res, next) {
    try {
      const result = await CategoryService.getAllGifts();
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async addGift(req, res, next) {
    try {
      const payload = req.body;
      payload.product_status = 'gifts'
      payload.price = Number(payload.price)
      payload.size = Number(payload.size)
      if (payload.sale) {
        payload.sale = Number(payload.sale)
        payload.sale_price = payload.price - (payload.price * payload.sale / 100);
        payload.sale_price = Math.round(payload.sale_price);

      }
      const result = await CategoryService.addGift(payload);
      SuccessHandlerUtil.handleAdd(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async updateGift(req, res, next) {
    try {
      const { id } = req.params;
      const payload = req.body;
      payload.price = Number(payload.price)
      payload.size = Number(payload.size)
      if (payload.sale) {
        payload.sale = Number(payload.sale)
        payload.sale_price = payload.price - (payload.price * payload.sale) / 100;
        payload.sale_price = Math.round(payload.sale_price);
      }
      const result = await CategoryService.updateGift(id, payload);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async deleteGift(req, res, next) {
    try {
      const { id } = req.params;
      const result = await CategoryService.deleteGift(id);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async getGiftById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await CategoryService.getGiftById(id);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async getGiftByLimit(req, res, next) {
    try {
      const { limit } = req.params;
      const result = await CategoryService.getGiftByLimit(limit);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  // Wreaths
  static async getAllWreaths(req, res, next) {
    try {
      const result = await CategoryService.getAllWreaths();
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async addWreath(req, res, next) {
    try {
      const payload = req.body;
      payload.product_status = 'wreaths'
      payload.price = Number(payload.price)
      payload.size = Number(payload.size)
      if (payload.sale) {
        payload.sale = Number(payload.sale)
        payload.sale_price = payload.price - (payload.price * payload.sale) / 100;
        payload.sale_price = Math.round(payload.sale_price);
      }
      const result = await CategoryService.addWreath(payload);
      SuccessHandlerUtil.handleAdd(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async updateWreath(req, res, next) {
    try {
      const { id } = req.params;
      const payload = req.body;
      payload.price = Number(payload.price)
      payload.size = Number(payload.size)
      if (payload.sale) {
        payload.sale = Number(payload.sale)
        payload.sale_price = payload.price - (payload.price * payload.sale) / 100;
        payload.sale_price = Math.round(payload.sale_price);

      }
      const result = await CategoryService.updateWreath(id, payload);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async deleteWreath(req, res, next) {
    try {
      const { id } = req.params;
      const result = await CategoryService.deleteWreath(id);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async getWreathById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await CategoryService.getWreathById(id);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async getWreathByLimit(req, res, next) {
    try {
      const { limit } = req.params;
      const result = await CategoryService.getWreathByLimit(limit);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  // ALL
  static async getAllByUsersId(req, res, next) {
    try {
      const { usersId, categoryName } = req.params;
      const result = await CategoryService.getAllByUsersId(usersId, categoryName);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
}
