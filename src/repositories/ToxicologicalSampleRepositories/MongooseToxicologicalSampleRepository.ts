import { ToxicologicalSample } from "../../entities/ToxicologicalSample";
import { toxicologicalSampleModel } from "../../models/toxicologicalSampleModel";
import { IToxicologicalSampleRepository } from "./IToxicologicalSampleRepository";

export class MongooseToxicologicalSampleRepository implements IToxicologicalSampleRepository {
  async create(toxicologicalSample: ToxicologicalSample): Promise<void> {
    await toxicologicalSampleModel.create(toxicologicalSample);
  }
}
