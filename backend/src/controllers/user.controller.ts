import {
  Response
} from "express";

import {
  prisma
} from "../config/prisma";

import {
  AuthRequest
} from "../middleware/auth.middleware";

export const profile =
async (
  req: AuthRequest,
  res: Response
) => {

  const user =
    await prisma.user
      .findUnique({

        where: {
          id:
          req.userId
        },

        select: {

          id:true,

          name:true,

          email:true,

          role:true
        }
      });

  res.json(user);
};
