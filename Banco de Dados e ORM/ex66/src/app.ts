import "dotenv/config";
import express, { json } from "express";
import helmet from "helmet";
//import jwt from "jsonwebtoken";
import { handleErrors } from "./middleware/handleError.middleware";
import "express-async-errors"
import { userRouter } from "./routes/user.routes";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/users", userRouter)

app.use(handleErrors.execute)

/* 
  jwt.sign(payload, secretKey);
  
  payload - pode receber uma "string" ou um objeto, e consiste no valor que será criptografado no token, podendo ser decodificado mais tarde.
secretKey - trata-se do segredo que torna o token único e seguro.
  */
