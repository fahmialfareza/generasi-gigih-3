import { v4 as uuid } from "uuid";

/* 
  The source of data is from json. If the source data is come from database, such as mysql. You can just add the mysql connection here, and then you can just query in the function.
*/
import users from "./json/users.json" assert { type: "json" };

// business logic to get the user detail data by id
export const getUserByIDRepo = (id) => {
  // you can imagine this is querying to database
  const user = users.find((user) => user.id === id);

  return user;
};

export const addUserRepo = (name, province_id) => {
  if (!name) {
    throw Error("name is not valid");
  }

  const newUser = {
    id: uuid(),
    name,
    province_id,
  };

  users.push(newUser);

  return newUser;
};
