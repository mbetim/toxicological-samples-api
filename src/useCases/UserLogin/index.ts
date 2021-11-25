import { userRepository } from "../../repositories/User";
import { UserLoginController } from "./UserLoginController";
import { UserLoginUseCase } from "./UserLoginUseCase";

const userLoginUseCase = new UserLoginUseCase(userRepository);

export const userLoginController = new UserLoginController(userLoginUseCase);
