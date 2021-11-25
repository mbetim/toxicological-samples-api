import { RequestHandler } from "express";
import { User } from "../../entities/User";
import { ExamToxicologicalSampleUseCase } from "./ExamToxicologicalSampleUseCase";

export class ExamToxicologicalSampleController {
  constructor(private examToxicologicalSampleUseCase: ExamToxicologicalSampleUseCase) {}

  handle: RequestHandler = async (req, res, next) => {
    try {
      const user = res.locals.user as User;

      const toxicologicalSample = await this.examToxicologicalSampleUseCase.exec(user, req.body);

      res.send({ toxicologicalSample });
    } catch (err) {
      next(err);
    }
  };
}
