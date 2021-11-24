import { NextFunction, Request, Response } from "express";
import HttpException from "../utils/HttpException";

type ErrorHandler = (err: HttpException, req: Request, res: Response, next: NextFunction) => void;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorHandler = (err, req, res, _next) => {
  res.status(err.status ?? 500).json({
    message: err.message || "Something went wrong",
    stack: process.env.NODE_ENV === "development" ? undefined : err.stack,
  });
};
