import { ToxicologicalSample } from "../../entities/ToxicologicalSample";

export interface IToxicologicalSampleRepository {
  findAll(): Promise<ToxicologicalSample[]>;

  create(toxicologicalSample: ToxicologicalSample): Promise<void>;
}
