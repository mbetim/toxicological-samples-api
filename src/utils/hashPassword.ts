import bcrypt from "bcrypt";

export const hashPassword = (password: string, salt = 10): string =>
  bcrypt.hashSync(password, salt);
