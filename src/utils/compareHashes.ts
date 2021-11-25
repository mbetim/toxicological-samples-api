import bcrypt from "bcrypt";

export const compareHashes = (hash1: string, hash2: string): boolean => {
  return bcrypt.compareSync(hash1, hash2);
};
