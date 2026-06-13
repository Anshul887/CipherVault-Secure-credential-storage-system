import { Router }
from "express";

import {
 authMiddleware
}
from "../middleware/auth.middleware";

import {
 VaultController
}
from "../controllers/vault.controller";

const router =
 Router();

router.post(
 "/",
 authMiddleware,
 VaultController.create
);

router.get(
 "/",
 authMiddleware,
 VaultController.getAll
);

router.put(
 "/:id",
 authMiddleware,
 VaultController.update
);

router.delete(
 "/:id",
 authMiddleware,
 VaultController.delete
);

export default router;
