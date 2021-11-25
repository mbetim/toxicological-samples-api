import { userRepository } from "../../repositories/User";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const createUserUseCase = new CreateUserUseCase(userRepository);

export const createUserController = new CreateUserController(createUserUseCase);
