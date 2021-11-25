import { ToxicologicalSample } from "../../entities/ToxicologicalSample";
import { toxicologicalSampleModel } from "../../models/toxicologicalSampleModel";
import { IToxicologicalSampleRepository } from "./IToxicologicalSampleRepository";

export class MongooseToxicologicalSampleRepository implements IToxicologicalSampleRepository {
  async findAll(): Promise<ToxicologicalSample[]> {
    const samples = await toxicologicalSampleModel.find();
    return samples.map((sample) => new ToxicologicalSample(sample, sample.id));
  }

  async create(toxicologicalSample: ToxicologicalSample): Promise<void> {
    await toxicologicalSampleModel.create(toxicologicalSample);
  }
}
