import { toxicologicalSampleRepository } from "../../repositories/ToxicologicalSampleRepositories";
import { ExamToxicologicalSampleController } from "./ExamToxicologicalSampleController";
import { ExamToxicologicalSampleUseCase } from "./ExamToxicologicalSampleUseCase";

const examToxicologicalSampleUseCase = new ExamToxicologicalSampleUseCase(
  toxicologicalSampleRepository
);

export const examToxicologicalSampleController = new ExamToxicologicalSampleController(
  examToxicologicalSampleUseCase
);
