import { RequestHandler } from "express";
import { GetAllToxicologicalSamplesUseCase } from "./GetAllToxicologicalSamplesUseCase";

export class GetAllToxicologicalSamplesController {
  constructor(private getAllToxicologicalSamplesUseCase: GetAllToxicologicalSamplesUseCase) {}

  handle: RequestHandler = async (req, res, next) => {
    try {
      const toxicologicalSamples = await this.getAllToxicologicalSamplesUseCase.exec();
      res.send({ toxicologicalSamples });
    } catch (err) {
      next(err);
    }
  };
}
