import { z } from "zod";

export const loginSchema = z.object({
  fullName: z.string().regex(/^(?=.*[^\s]).+[^\s]$/, {
    message: "Enter your name",
  }),
});
