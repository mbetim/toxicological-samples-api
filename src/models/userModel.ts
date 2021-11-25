import mongoose from "mongoose";
import { User } from "../entities/User";

export type UserDocument = User & mongoose.Document;

const userSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
  },
  { timestamps: true }
);

export const userModel = mongoose.model<User>("User", userSchema);
