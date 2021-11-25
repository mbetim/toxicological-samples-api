import { ToxicologicalSample } from "../../entities/ToxicologicalSample";
import { IToxicologicalSampleRepository } from "../../repositories/ToxicologicalSampleRepositories/IToxicologicalSampleRepository";

export class GetAllToxicologicalSamplesUseCase {
  constructor(private toxicologicalRepository: IToxicologicalSampleRepository) {}

  async exec(): Promise<ToxicologicalSample[]> {
    return await this.toxicologicalRepository.findAll();
  }
}
