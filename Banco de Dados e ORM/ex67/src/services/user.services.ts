import jwt from "jsonwebtoken";
import { IUser, TUserRegisterBody } from "../interfaces/user.interfaces";
import { generateId, userDataBase } from "../database/user.services";
import bcrypt from "bcrypt";
import { AppError } from "../errors/appError";

export class UserServices {
  async login(body: TUserRegisterBody) {
    const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET as string, {
      expiresIn: "24h",
    });

    const user = userDataBase.find(
      (user) => user.email === body.email
    ) as IUser;

    const compare = await bcrypt.compare(body.password, user.password);
    //await bcrypt.compare(dado, hash);

    if (!compare) {
      throw new AppError("Email and password doesn't", 403);
    }

    return {
      accessToken: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
  async register(body: TUserRegisterBody) {
    const hashPassword = await bcrypt.hash(body.password, 10);
    //await bcrypt.hash(dado, nivelDeComplexidade, opcoes);
    const newUser = {
      id: generateId(),
      name: body.name,
      email: body.email,
      password: hashPassword,
    };
    userDataBase.push(newUser);
    return newUser;
  }

  getUser() {
    const user = { id: 1, name: "Gabriel", email: "gariel@gmail.com" };
    return user;
  }
}
