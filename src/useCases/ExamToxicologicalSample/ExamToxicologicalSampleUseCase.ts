import Joi from "joi";
import { ToxicologicalSample } from "../../entities/ToxicologicalSample";
import { User } from "../../entities/User";
import { IToxicologicalSampleRepository } from "../../repositories/ToxicologicalSampleRepositories/IToxicologicalSampleRepository";
import { ExamToxicologicalSampleDTO } from "./ExamToxicologicalSampleDTO";

const sampleSchema = Joi.object({
  codigo_amostra: Joi.number().min(0).required(),
  Cocaína: Joi.number().min(0).required(),
  Anfetamina: Joi.number().min(0).required(),
  Metanfetamina: Joi.number().min(0).required(),
  MDA: Joi.number().min(0).required(),
  MDMA: Joi.number().min(0).required(),
  THC: Joi.number().min(0).required(),
  Morfina: Joi.number().min(0).required(),
  Codeína: Joi.number().min(0).required(),
  Heroína: Joi.number().min(0).required(),
  Benzoilecgonina: Joi.number().min(0).required(),
  Cocaetileno: Joi.number().min(0).required(),
  Norcocaína: Joi.number().min(0).required(),
});

export class ExamToxicologicalSampleUseCase {
  constructor(private toxicologicalSampleRepository: IToxicologicalSampleRepository) {}

  async exec(user: User, data: ExamToxicologicalSampleDTO): Promise<ToxicologicalSample> {
    await sampleSchema.validateAsync(data);

    const toxicologicalSample = new ToxicologicalSample({ ...data, createdBy: user.id });

    await this.toxicologicalSampleRepository.create(toxicologicalSample);

    return toxicologicalSample;
  }
}
