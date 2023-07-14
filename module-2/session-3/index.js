import express from "express";

import { getDetailUser } from "./controllers/rest/users.js";

const app = express();

// express now can read req.body (json)
app.use(express.json());
// app.use(express.urlencoded());

// Params is to get details of data
app.get("/users/:id", getDetailUser);

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
