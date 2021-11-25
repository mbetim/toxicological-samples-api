import Joi from "joi";
import jwt from "jsonwebtoken";
import { auth } from "../../constants/configs";
import { User } from "../../entities/User";
import { UserNotFoundError } from "../../repositories/User/errors/UserNotFoundError";
import { IUserRepository } from "../../repositories/User/IUserRepository";
import { compareHashes } from "../../utils/compareHashes";
import { Either, left, right } from "../../utils/Either";
import { UserLoginDTO } from "./UserLoginDTO";

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export class UserLoginUseCase {
  constructor(private userRepository: IUserRepository) {}

  async exec(
    data: UserLoginDTO
  ): Promise<Either<UserNotFoundError, { user: User; token: string }>> {
    const values = await loginSchema.validateAsync(data);

    const userResponse = await this.userRepository.findByEmail(values.email, {
      selectPassword: true,
    });

    if (userResponse.isLeft()) return left(userResponse.value);

    const user = userResponse.value;

    if (!compareHashes(values.password, user.password ?? "")) return left(new UserNotFoundError());

    delete user.password;
    return right({
      user,
      token: jwt.sign({ id: user.id }, auth.jwtSecret, { expiresIn: auth.expiresIn }),
    });
  }
}
