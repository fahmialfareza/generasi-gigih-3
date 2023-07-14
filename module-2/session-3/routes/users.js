import express from "express";

import { getDetailUser } from "../controllers/rest/users.js";

const router = express.Router();

// Params is to get details of data
router.get("/:id", getDetailUser);

export default router;
