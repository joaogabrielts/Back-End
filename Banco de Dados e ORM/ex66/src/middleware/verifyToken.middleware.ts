import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken";

export class verifyToken {
  static execute(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError("token is required", 401);
    }

    const secret = process.env.JWT_SECRET as string; 

    jwt.verify(token, secret);

    res.locals.decode = jwt.decode(token);

    next()
  }
}
