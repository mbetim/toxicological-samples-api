import { uid } from "uid";
import { User } from "./User";

interface ToxicologicalSampleConstructorProps {
  Cocaína: ToxicologicalSample["Cocaína"];
  Anfetamina: ToxicologicalSample["Anfetamina"];
  Metanfetamina: ToxicologicalSample["Metanfetamina"];
  MDA: ToxicologicalSample["MDA"];
  MDMA: ToxicologicalSample["MDMA"];
  THC: ToxicologicalSample["THC"];
  Morfina: ToxicologicalSample["Morfina"];
  Codeína: ToxicologicalSample["Codeína"];
  Heroína: ToxicologicalSample["Heroína"];
  Benzoilecgonina: ToxicologicalSample["Benzoilecgonina"];
  Cocaetileno: ToxicologicalSample["Cocaetileno"];
  Norcocaína: ToxicologicalSample["Norcocaína"];

  result?: ToxicologicalSample["result"];

  createdBy: ToxicologicalSample["createdBy"];
  createdAt?: ToxicologicalSample["createdAt"];
}

export class ToxicologicalSample {
  public readonly codigo_amostra: string;

  public Cocaína: number;
  public Anfetamina: number;
  public Metanfetamina: number;
  public MDA: number;
  public MDMA: number;
  public THC: number;
  public Morfina: number;
  public Codeína: number;
  public Heroína: number;
  public Benzoilecgonina: number;
  public Cocaetileno: number;
  public Norcocaína: number;

  public readonly result: "Positivo" | "Negativo";

  public createdBy: User | string;
  public createdAt: Date;

  constructor(props: ToxicologicalSampleConstructorProps, codigo_amostra?: string) {
    this.codigo_amostra = codigo_amostra ?? uid(8);

    this.Cocaína = props.Cocaína;
    this.Anfetamina = props.Anfetamina;
    this.Metanfetamina = props.Metanfetamina;
    this.MDA = props.MDA;
    this.MDMA = props.MDMA;
    this.THC = props.THC;
    this.Morfina = props.Morfina;
    this.Codeína = props.Codeína;
    this.Heroína = props.Heroína;
    this.Benzoilecgonina = props.Benzoilecgonina;
    this.Cocaetileno = props.Cocaetileno;
    this.Norcocaína = props.Norcocaína;

    this.result = props.result ?? this.validateSample();

    this.createdBy = props.createdBy;
    this.createdAt = props.createdAt ?? new Date();
  }

  private validateSample(): "Positivo" | "Negativo" {
    const drugsThreshold = {
      Anfetamina: 0.2,
      Metanfetamina: 0.2,
      MDA: 0.2,
      MDMA: 0.2,
      THC: 0.05,
      Morfina: 0.2,
      Codeína: 0.2,
      Heroína: 0.2,
    };

    if (
      this.Cocaína >= 0.5 &&
      (this.Benzoilecgonina >= 0.05 || this.Cocaetileno >= 0.05 || this.Norcocaína >= 0.05)
    )
      return "Positivo";

    for (const [drugName, drugThresholdValue] of Object.entries(drugsThreshold)) {
      if (this[drugName as keyof typeof drugsThreshold] >= drugThresholdValue) {
        return "Positivo";
      }
    }

    return "Negativo";
  }
}
