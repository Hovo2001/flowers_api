// Local Modules
import bCrypt from 'bcryptjs';
import { UsersModel } from '../models';

export default class UsersService {
  static async add(payload) {
    const password = await bCrypt.hash(payload.password, 10);
    delete payload.password;
    return UsersModel.create({ ...payload, password });
  }

  static async edit(id, payload) {
    return UsersModel.edit(id, payload);
  }

  static async getUser(company_name) {
    return UsersModel.findByCompanyName(company_name);
  }

  static async getAllUsers() {
    return UsersModel.getAllUsers();
  }

  static async delete(id) {
    return UsersModel.delete(id);
  }

  static async getCompanyDataWithLimit(category, companyName, limit) {
    return UsersModel.getCompanyDataWithLimit(category, companyName, limit);
  }
}
