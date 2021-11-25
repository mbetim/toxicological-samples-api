import express from "express";
import { createUserController } from "../useCases/CreateUser";

const router = express.Router();

router.post("/signup", createUserController.handle);

export default router;
