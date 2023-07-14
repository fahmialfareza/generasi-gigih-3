import { getProvinceByIDRepo } from "../../repositories/provinces/province.js";
import {
  addUserRepo,
  getUserByIDRepo,
} from "../../repositories/users/users.js";

// This is business logic to get user detail by id and his/her province
export const getUserByIDUsecase = (id) => {
  // Get the detail of user from the user repository
  const user = getUserByIDRepo(id);
  if (!user) {
    return null;
  }

  // Get the province of user from the province repository
  const province = getProvinceByIDRepo(user?.province_id);
  if (!province) {
    return null;
  }

  // It will return the user data and province of user detail data
  return { ...user, province };
};

export const addUserUsecase = (name, province_id) => {
  // validate is province_id is valid
  getProvinceByIDRepo(province_id);

  return addUserRepo(name, province_id);
};
