import {
  addUserUsecase,
  getUserByIDUsecase,
} from "../../usecases/users/users.js";

// Controller that handler to get the detail of user
export const getDetailUser = (req, res) => {
  const { id } = req.params;

  // Find user with id params, and it will call the usecase function to get the business logic
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

// Controller that handler to get the detail of user
export const addUser = (req, res) => {
  try {
    const { name, province_id } = req.body;

    // Find user with id params, and it will call the usecase function to get the business logic
    const user = addUserUsecase(name, province_id);

    // If not found
    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    res.json({
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
