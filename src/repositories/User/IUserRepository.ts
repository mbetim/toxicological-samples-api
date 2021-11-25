import { User } from "../../entities/User";
import { Either } from "../../utils/Either";
import { UserNotFoundError } from "./errors/UserNotFoundError";

export interface IUserRepository {
  findById(id: string): Promise<Either<UserNotFoundError, User>>;
  findByEmail(
    email: string,
    options?: { selectPassword?: boolean }
  ): Promise<Either<UserNotFoundError, User>>;

  create(user: User): Promise<void>;
}
