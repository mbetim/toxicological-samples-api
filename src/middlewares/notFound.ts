import { RequestHandler } from "express";
import HttpException from "../utils/HttpException";

export const notFound: RequestHandler = (req, res, next) =>
  next(new HttpException(`Endpoint não encontrado - ${req.method} ${req.originalUrl}`, 404));
