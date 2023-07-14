import express from "express";

import usersRouter from "./routes/users.js";

const app = express();

// express now can read req.body (json)
app.use(express.json());
// app.use(express.urlencoded());

app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
