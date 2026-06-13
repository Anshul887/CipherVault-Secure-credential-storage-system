import {
  Request,
  Response,
  NextFunction
} from "express";

export const authorize =
  (...roles: string[]) =>
  (
    req: any,
    res: Response,
    next: NextFunction
  ) => {

    if (
      !roles.includes(req.role)
    ) {

      return res.status(403).json({
        message: "Forbidden"
      });

    }

    next();
  };
