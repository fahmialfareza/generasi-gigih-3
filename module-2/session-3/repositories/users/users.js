import users from "./json/users.json" assert { type: "json" };

export const getUserByIDRepo = (id) => {
  const user = users.find((user) => user.id === Number(id));

  return user;
};
