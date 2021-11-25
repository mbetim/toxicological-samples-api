import mongoose from "mongoose";
import { ToxicologicalSample } from "../entities/ToxicologicalSample";

export type ToxicologicalSampleDocument = ToxicologicalSample & mongoose.Document;

const toxicologicalSampleSchema = new mongoose.Schema(
  {
    codigo_amostra: { type: String, required: true, unique: true },
    Cocaína: { type: Number, required: true, min: 0 },
    Anfetamina: { type: Number, required: true, min: 0 },
    Metanfetamina: { type: Number, required: true, min: 0 },
    MDA: { type: Number, required: true, min: 0 },
    MDMA: { type: Number, required: true, min: 0 },
    THC: { type: Number, required: true, min: 0 },
    Morfina: { type: Number, required: true, min: 0 },
    Codeína: { type: Number, required: true, min: 0 },
    Heroína: { type: Number, required: true, min: 0 },

    result: { type: String, required: true, enum: ["Positivo", "Negativo"] },
    createdBy: { type: String, ref: "User", required: true },
  },
  { timestamps: true }
);

export const toxicologicalSampleModel = mongoose.model<ToxicologicalSampleDocument>(
  "ToxicologicalSample",
  toxicologicalSampleSchema,
  "toxicological-samples"
);
