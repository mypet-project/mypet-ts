import { z } from "zod";

export const editPostSchema = z.object({
  name: z
    .string(),
  description: z
  .string(),
});

export type TEditValues = z.infer<typeof editPostSchema>;
