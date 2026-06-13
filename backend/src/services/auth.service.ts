import { prisma } from "../config/prisma";
import {
  hashPassword,
  comparePassword
} from "../utils/bcrypt";

export class AuthService {

  static async register(
    name: string,
    email: string,
    password: string
  ) {

    const existingUser =
      await prisma.user.findUnique({
        where: { email }
      });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashed =
      await hashPassword(password);

    const user =
      await prisma.user.create({
        data: {
          name,
          email,
          password: hashed
        }
      });

    return user;
  }

  static async login(
    email: string,
    password: string
  ) {

    const user =
      await prisma.user.findUnique({
        where: { email }
      });

    if (!user) {
      throw new Error(
        "Invalid credentials"
      );
    }

    const match =
      await comparePassword(
        password,
        user.password
      );

    if (!match) {
      throw new Error(
        "Invalid credentials"
      );
    }

    return user;
  }
}
