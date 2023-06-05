import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Deve ser um e-mail")
    .max(250, "O email deve conter no máximo 250 caracteres"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .max(120, "A senha deve conter no máximo 120 caracteres")
    // .regex(new RegExp(".*[A-Z].*"), "A senha deve conter uma letra maiúscula")
    .regex(new RegExp(".*[a-z].*"), "A senha deve conter uma letra minúscula")
    .regex(new RegExp(".*\\d.*"), "A senha deve conter um número"),
});

export type LoginData = z.infer<typeof loginSchema>;
