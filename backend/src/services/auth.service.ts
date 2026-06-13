import { prisma }
from "../config/prisma";

import {
  hashPassword,
  comparePassword
}
from "../utils/bcrypt";

export class AuthService {

  static async saveRefreshToken(
    userId: string,
    token: string
  ) {

    return prisma.user.update({

      where: {
        id: userId
      },

      data: {
        refreshToken: token
      }

    });

  }

  static async findById(
    id: string
  ) {

    return prisma.user.findUnique({

      where: { id }

    });

  }
}
