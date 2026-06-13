import { z } from "zod";

export const createVaultSchema =
  z.object({

    name: z
      .string()
      .min(3)
      .max(50),

    description:
      z.string()
      .optional()
  });

export const updateVaultSchema =
  z.object({

    name: z
      .string()
      .min(3)
      .optional(),

    description:
      z.string()
      .optional()
  });
