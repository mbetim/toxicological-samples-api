import { User } from "../../entities/User";
import { Either } from "../../utils/Either";
import { UserNotFoundError } from "./errors/UserNotFoundError";

export interface IUserRepository {
  findByEmail(
    email: string,
    options?: { selectPassword?: boolean }
  ): Promise<Either<UserNotFoundError, User>>;

  create(user: User): Promise<void>;
}
