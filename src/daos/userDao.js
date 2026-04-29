import MongoDao from "./mongoDao";

import { UserModel } from "./models/user.js";

class UserDao extends MongoDao {
  constructor(model) {
    super(model);
  }

  getEmailById = async (email) => {
    try {
      return await this.model.findOne({ email });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const userDao = new UserDao(UserModel)
