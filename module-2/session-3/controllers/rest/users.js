import { getUserByIDUsecase } from "../../usecases/users/users.js";

export const getDetailUser = (req, res) => {
  const { id } = req.params;

  // Find user with id params
  const user = getUserByIDUsecase(id);

  // If not found
  if (!user) {
    return res.status(404).json({
      message: "User not found!",
    });
  }

  res.json({
    data: user,
  });
};
