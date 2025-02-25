import jwt from "jsonwebtoken";
import { IUser } from "../interfaces/user.interfaces";

export class UserServices {
  login() {
    const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET as string, {
      expiresIn: "10h",
    });
    return { accessToken: token };
  }

  getUser(): IUser {
    const user: IUser = { id: 1, name: "Gabriel", email: "gariel@gmail.com" };
    return user;
  }
}
