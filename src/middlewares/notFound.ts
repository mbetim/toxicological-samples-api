import { RequestHandler } from "express";
import HttpException from "../utils/HttpException";

export const notFound: RequestHandler = (req, res, next) =>
  next(new HttpException(`Not found - ${req.originalUrl}`, 404));
