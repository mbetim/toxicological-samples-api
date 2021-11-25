import Joi from "joi";
import { User } from "../../entities/User";
import { UserAlreadyExistsError } from "../../repositories/User/errors/UserAlreadyExistsError";
import { IUserRepository } from "../../repositories/User/IUserRepository";
import { Either, left, right } from "../../utils/Either";
import { hashPassword } from "../../utils/hashPassword";
import { CreateUserDTO } from "./CreateUserDTO";

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: CreateUserDTO): Promise<Either<UserAlreadyExistsError, User>> {
    const values = await userSchema.validateAsync(data);

    const isEmailAlreadyInUse = await this.userRepository.findByEmail(values.email);
    console.log(isEmailAlreadyInUse);

    if (isEmailAlreadyInUse.isRight()) return left(new UserAlreadyExistsError());

    const user = new User({ ...values, password: hashPassword(values.password) });
    await this.userRepository.create(user);
    delete user.password;

    return right(user);
  }
}
