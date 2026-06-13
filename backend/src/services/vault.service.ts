import { prisma }
from "../config/prisma";

export class VaultService {

  static async create(
    userId: string,
    name: string,
    description?: string
  ) {

    return prisma.vault.create({

      data: {

        name,

        description,

        userId

      }

    });
  }

  static async getAll(
    userId: string,
    page: number,
    limit: number,
    search?: string
  ) {

    return prisma.vault.findMany({

      where: {

        userId,

        ...(search && {

          name: {

            contains: search,

            mode: "insensitive"
          }
        })

      },

      skip:
        (page - 1) * limit,

      take: limit,

      orderBy: {

        createdAt: "desc"
      }

    });
  }

  static async getById(
    vaultId: string
  ) {

    return prisma.vault.findUnique({

      where: {

        id: vaultId
      }

    });
  }

  static async update(
    vaultId: string,
    data: any
  ) {

    return prisma.vault.update({

      where: {

        id: vaultId
      },

      data

    });
  }

  static async delete(
    vaultId: string
  ) {

    return prisma.vault.delete({

      where: {

        id: vaultId
      }

    });
  }
}
