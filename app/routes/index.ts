import express from "express";

import UserController from "../controllers/UserController";

import { wrapper } from "../server/Middlewares";

const router = express.Router();

router.get("/users", wrapper(UserController.users));

export default router;
