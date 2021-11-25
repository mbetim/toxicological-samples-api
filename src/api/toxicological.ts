import express from "express";
import authMiddleware from "../middlewares/authMiddleware";
import { examToxicologicalSampleController } from "../useCases/ExamToxicologicalSample";

const router = express.Router();

router.post("/samples", authMiddleware, examToxicologicalSampleController.handle);

export default router;
