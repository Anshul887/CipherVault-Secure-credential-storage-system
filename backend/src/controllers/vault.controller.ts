import {
  Response
}
from "express";

import {
  AuthRequest
}
from "../middleware/auth.middleware";

import {
  VaultService
}
from "../services/vault.service";

import {
  AuditService
}
from "../services/audit.service";

export class VaultController {

  static async create(
    req: AuthRequest,
    res: Response
  ) {

    const {
      name,
      description
    } = req.body;

    const vault =
      await VaultService.create(

        req.userId!,

        name,

        description
      );

    await AuditService.log(

      req.userId!,

      `Created vault ${name}`
    );

    res.status(201).json(
      vault
    );
  }

  static async getAll(
    req: AuthRequest,
    res: Response
  ) {

    const page =
      Number(req.query.page) || 1;

    const limit =
      Number(req.query.limit) || 10;

    const search =
      req.query.search as string;

    const vaults =
      await VaultService.getAll(

        req.userId!,

        page,

        limit,

        search
      );

    res.json(vaults);
  }

  static async update(
    req: AuthRequest,
    res: Response
  ) {

    const vault =
      await VaultService.getById(
        req.params.id
      );

    if (
      !vault ||
      vault.userId !== req.userId
    ) {

      return res
      .status(403)
      .json({

        message:
        "Access denied"
      });
    }

    const updated =
      await VaultService.update(

        req.params.id,

        req.body
      );

    await AuditService.log(

      req.userId!,

      `Updated vault ${updated.name}`
    );

    res.json(updated);
  }

  static async delete(
    req: AuthRequest,
    res: Response
  ) {

    const vault =
      await VaultService.getById(
        req.params.id
      );

    if (
      !vault ||
      vault.userId !== req.userId
    ) {

      return res
      .status(403)
      .json({

        message:
        "Access denied"
      });
    }

    await VaultService.delete(
      req.params.id
    );

    await AuditService.log(

      req.userId!,

      `Deleted vault`
    );

    res.json({
      message:
      "Vault deleted"
    });
  }
}
