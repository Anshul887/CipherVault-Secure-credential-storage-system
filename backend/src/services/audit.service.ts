import { prisma }
from "../config/prisma";

export class AuditService {

  static async log(

    userId: string,

    action: string

  ) {

    return prisma.auditLog.create({

      data: {

        userId,

        action

      }

    });
  }
}
