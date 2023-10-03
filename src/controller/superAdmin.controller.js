// Local Modules
import process from 'process';
import fs from 'fs';
import { superAdminServices } from '../services';
import { SuccessHandlerUtil } from '../utils';
// NPM Modules
// import config from '../config/variables.config';

const HOST_OF_SERVER = process.env.SERVER_HOST;

export default class UsersController {
  static async createAdmin(req, res, next) {
    try {
      const { username, password } = req.body;
      const create_admiin = await superAdminServices.createAdmin({ username, password });

      SuccessHandlerUtil.handleAdd(res, next, create_admiin);
    } catch (error) {
      next(error);
    }
  }

  
  static async getAllProducts(req, res, next) {
    try {
      
      const result = await superAdminServices.getAllProducts();

      SuccessHandlerUtil.handleAdd(res, next, result);
    } catch (error) {
      next(error);
    }
  }
}
