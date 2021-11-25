import { ToxicologicalSample } from "../../entities/ToxicologicalSample";

export interface IToxicologicalSampleRepository {
  create(toxicologicalSample: ToxicologicalSample): Promise<void>;
}
