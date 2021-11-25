import dotenv from "dotenv";

dotenv.config();

export const appPort = process.env.PORT || 3000;

export const auth = {
  jwtSecret: process.env.JWT_SECRET_KEY || "",
  expiresIn: 60 * 60 * 24 * 7, // 7 days
};
