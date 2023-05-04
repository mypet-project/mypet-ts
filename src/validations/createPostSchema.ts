import { z } from "zod";

export const createPostSchema = z.object({
  name: z.string().min(1, "O título é obrigatório"),
  img: z.string().min(1, "A imagem é obrigatória"),
  description: z.string().min(1, "A imagem é obrigatória"),
  adoption: z.string(),
});

export type TCardFormValues = z.infer<typeof createPostSchema>;
