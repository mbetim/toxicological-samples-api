import { RequestHandler } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle: RequestHandler = async (req, res, next) => {
    try {
      const userResponse = await this.createUserUseCase.execute(req.body);

      if (userResponse.isLeft()) throw userResponse.value;

      res.json({ user: userResponse.value });
    } catch (err) {
      next(err);
    }
  };
}
