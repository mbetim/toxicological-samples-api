import { RequestHandler } from "express";
import { UserLoginUseCase } from "./UserLoginUseCase";

export class UserLoginController {
  constructor(private userLoginUseCase: UserLoginUseCase) {}

  handle: RequestHandler = async (req, res, next) => {
    try {
      const userResponse = await this.userLoginUseCase.exec(req.body);

      if (userResponse.isLeft()) throw userResponse.value;

      res.send(userResponse.value);
    } catch (err) {
      next(err);
    }
  };
}
