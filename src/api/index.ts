import express from "express";
import auth from "./auth";
import toxicological from "./toxicological";

const router = express.Router();

router.use("/auth", auth);
router.use("/toxicological", toxicological);

export const api = router;
