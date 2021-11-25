import { User } from "../../entities/User";
import { userModel } from "../../models/userModel";
import { Either, right, left } from "../../utils/Either";
import { UserNotFoundError } from "./errors/UserNotFoundError";
import { IUserRepository } from "./IUserRepository";

export class MongooseUserRepository implements IUserRepository {
  async findById(id: string): Promise<Either<UserNotFoundError, User>> {
    const user = await userModel.findOne({ id });

    return user ? right(new User(user, id)) : left(new UserNotFoundError());
  }

  async findByEmail(
    email: string,
    { selectPassword = false } = {}
  ): Promise<Either<UserNotFoundError, User>> {
    const user = await userModel.findOne({ email }).select(selectPassword ? "+password" : "");

    return user ? right(new User(user, user.id)) : left(new UserNotFoundError());
  }

  async create(user: User): Promise<void> {
    await userModel.create(user);
  }
}
