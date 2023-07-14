import { getProvinceByIDRepo } from "../../repositories/provinces/province.js";
import { getUserByIDRepo } from "../../repositories/users/users.js";

export const getUserByIDUsecase = (id) => {
  const user = getUserByIDRepo(id);
  if (!user) {
    return null;
  }

  const province = getProvinceByIDRepo(user?.province_id);
  if (!province) {
    return null;
  }

  return { ...user, province };
};
