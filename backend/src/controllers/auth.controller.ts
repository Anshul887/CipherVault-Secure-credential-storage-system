import { Request, Response } from "express";

import { AuthService } from "../services/auth.service";

import { generateToken } from "../utils/jwt";

export class AuthController {

  static async register(
    req: Request,
    res: Response
  ) {

    try {

      const {
        name,
        email,
        password
      } = req.body;

      const user =
        await AuthService.register(
          name,
          email,
          password
        );

      const token =
        generateToken(user.id);

      return res.status(201).json({
        token,
        user
      });

    } catch (error: any) {

      return res.status(400).json({
        message: error.message
      });

    }
  }

  static async login(
    req: Request,
    res: Response
  ) {

    try {

      const {
        email,
        password
      } = req.body;

      const user =
        await AuthService.login(
          email,
          password
        );

      const token =
        generateToken(user.id);

      return res.json({
        token,
        user
      });

    } catch (error: any) {

      return res.status(400).json({
        message: error.message
      });

    }
  }
}
