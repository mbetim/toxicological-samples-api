import { toxicologicalSampleRepository } from "../../repositories/ToxicologicalSampleRepositories";
import { GetAllToxicologicalSamplesController } from "./GetAllToxicologicalSamplesController";
import { GetAllToxicologicalSamplesUseCase } from "./GetAllToxicologicalSamplesUseCase";

const getAllToxicologicalSamplesUseCase = new GetAllToxicologicalSamplesUseCase(
  toxicologicalSampleRepository
);

export const getAllToxicologicalSamplesController = new GetAllToxicologicalSamplesController(
  getAllToxicologicalSamplesUseCase
);
