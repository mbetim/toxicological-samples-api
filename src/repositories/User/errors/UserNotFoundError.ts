import { IError } from "../../../utils/IError";

export class UserNotFoundError extends Error implements IError {
  status = 404;

  constructor(message = "Usuário não encontrado") {
    super(message);

    this.name = "UserNotFoundError";
  }
}
