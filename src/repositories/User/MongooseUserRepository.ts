import { User } from "../../entities/User";
import { userModel } from "../../models/userModel";
import { Either, right, left } from "../../utils/Either";
import { UserNotFoundError } from "./errors/UserNotFoundError";
import { IUserRepository } from "./IUserRepository";

export class MongooseUserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<Either<UserNotFoundError, User>> {
    const user = await userModel.findOne({ email });
    return user ? right(new User(user)) : left(new UserNotFoundError());
  }

  async create(user: User): Promise<void> {
    await userModel.create(user);
  }
}
