import {
  Request,
  Response
} from "express";

import jwt from "jsonwebtoken";

import {
  AuthService
} from "../services/auth.service";

import {
  generateAccessToken,
  generateRefreshToken
} from "../utils/jwt";

export class AuthController {

  static async login(
    req: Request,
    res: Response
  ) {

    const {
      email,
      password
    } = req.body;

    const user =
      await AuthService.login(
        email,
        password
      );

    const accessToken =
      generateAccessToken(
        user.id,
        user.role
      );

    const refreshToken =
      generateRefreshToken(
        user.id
      );

    await AuthService
      .saveRefreshToken(
        user.id,
        refreshToken
      );

    res.cookie(
      "refreshToken",
      refreshToken,
      {
        httpOnly: true,

        secure: false,

        sameSite: "strict"
      }
    );

    res.json({
      accessToken,
      user
    });
  }

  static async refresh(
    req: Request,
    res: Response
  ) {

    const token =
      req.cookies.refreshToken;

    if (!token) {

      return res.status(401)
        .json({
          message:
            "No refresh token"
        });

    }

    try {

      const payload =
        jwt.verify(
          token,
          process.env
            .JWT_REFRESH_SECRET!
        ) as any;

      const user =
        await AuthService
          .findById(
            payload.userId
          );

      if (
        !user ||
        user.refreshToken !== token
      ) {

        return res.status(401)
          .json({
            message:
              "Invalid refresh token"
          });

      }

      const accessToken =
        generateAccessToken(
          user.id,
          user.role
        );

      res.json({
        accessToken
      });

    } catch {

      return res.status(401)
        .json({
          message:
            "Invalid refresh token"
        });

    }
  }
}
