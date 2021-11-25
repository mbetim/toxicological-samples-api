import { IError } from "../../../utils/IError";

export class UserAlreadyExistsError extends Error implements IError {
  status = 409;

  constructor() {
    super("Usuário já existe");

    this.name = "UserAlreadyExistsError";
  }
}
