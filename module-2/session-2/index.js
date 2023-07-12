import express from "express";
import { v4 as uuidv4 } from "uuid";

import users from "./users.json" assert { type: "json" };

const app = express();

// express now can read req.body (json)
app.use(express.json());
// app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.json({
    data: "GET Request",
  });
});

app.post("/", (req, res) => {
  res.json({
    data: "POST Request",
  });
});

app.put("/", (req, res) => {
  res.json({
    data: "PUT Request",
  });
});

app.delete("/", (req, res) => {
  res.json({
    data: "DELETE Request",
  });
});

app.get("/about", (req, res) => {
  res.json({
    data: "ABOUT GET",
  });
});

// Params is to get details of data
app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  // Find user with id params
  const user = users.filter((user) => user.id === Number(id));

  // If not found
  if (user.length === 0) {
    return res.status(404).json({
      message: "User not found!",
    });
  }

  res.json({
    data: user,
  });
});

// Query params is to get search, filter
app.get("/users", (req, res) => {
  const { name, province } = req.query;
  let data = [];

  // Request headers
  const { authorization } = req.headers;
  // Example if the auth !== anris it will forbidden to access the resource
  if (authorization !== "anris") {
    return res.status(403).json({
      message: "Forbidden to access",
    });
  }

  // If province and name not null
  if (province && name) {
    // find by province and user
    data = users.filter(
      (user) => user.province.includes(province) && user.name.includes(name)
    );
  } else if (province) {
    // find by province
    data = users.filter((user) => user.province.includes(province));
  } else if (name) {
    // find by name
    data = users.filter((user) => user.name.includes(name));
  } else {
    // get all users data
    data = users;
  }

  // If not found
  if (data.length === 0) {
    return res.status(404).json({
      message: "User not found!",
    });
  }

  res.json({
    data: data,
  });
});

// Add user
app.post("/users", (req, res) => {
  let newUser = req.body;

  // add new user to users data
  newUser = {
    id: uuidv4(),
    ...newUser,
  };
  users.push(newUser);

  // Add the headers (custom headers), and will overwrite the current if exists
  res.set("X-Powered-By", "Alfian");
  res.status(201).json({
    data: newUser,
  });
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
