import express from "express";
import { createUserController } from "../useCases/CreateUser";
import { userLoginController } from "../useCases/UserLogin";

const router = express.Router();

router.post("/signup", createUserController.handle);

router.post("/login", userLoginController.handle);

export default router;
