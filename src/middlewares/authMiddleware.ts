import jwt from "jsonwebtoken";
import { RequestHandler } from "express";
// Utils
import HttpException from "../utils/HttpException";
import { auth } from "../constants/configs";
import { userRepository } from "../repositories/User";

interface JWTDecoded {
  id: string;
  iat: number;
  exp: number;
}

const authMiddleware: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return next(new HttpException("Nenhum token fornecido", 401));

  const parts = authHeader.split(" ");

  if (parts.length !== 2) return next(new HttpException("Erro no token", 401));

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) return next(new HttpException("Token não formatado", 401));

  try {
    const decoded = jwt.verify(token, auth.jwtSecret) as JWTDecoded;

    const userResponse = await userRepository.findById(decoded.id);

    if (userResponse.isLeft()) return next(new HttpException("Token inválido", 401));

    res.locals.userId = decoded.id;
    res.locals.user = userResponse.value;
    return next();
  } catch (err) {
    next(new HttpException("Token inválido", 401));
  }
};

export default authMiddleware;
