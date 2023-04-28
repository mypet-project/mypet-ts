import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("O e-mail é obrigatório"),
  password: z.string().min(6, "A senha é obrigatória"),
});

export type TLoginFormValues = z.infer<typeof loginSchema>;
