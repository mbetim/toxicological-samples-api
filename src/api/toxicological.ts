import express from "express";
import authMiddleware from "../middlewares/authMiddleware";
import { examToxicologicalSampleController } from "../useCases/ExamToxicologicalSample";
import { getAllToxicologicalSamplesController } from "../useCases/GetAllToxicologicalSamples";

const router = express.Router();

router.post("/samples", authMiddleware, examToxicologicalSampleController.handle);

router.get("/samples", authMiddleware, getAllToxicologicalSamplesController.handle);

export default router;
