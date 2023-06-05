import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "O nome deve conter no mínimo 3 caracteres")
      .max(250, "O nome deve conter no máximo 250 caracteres"),
    email: z
      .string()
      .email("Deve ser um e-mail")
      .max(250, "O email deve conter no máximo 250 caracteres"),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "A senha deve conter no mínimo 8 caracteres")
      .max(120, "A senha deve conter no máximo 120 caracteres")
      .regex(new RegExp(".*[A-Z].*"), "A senha deve conter uma letra maiúscula")
      .regex(new RegExp(".*[a-z].*"), "A senha deve conter uma letra minúscula")
      .regex(new RegExp(".*\\d.*"), "A senha deve conter um número"),
    confirmPassword: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "A senha deve conter no mínimo 8 caracteres")
      .max(120, "A senha deve conter no máximo 120 caracteres")
      .regex(new RegExp(".*[A-Z].*"), "A senha deve conter uma letra maiúscula")
      .regex(new RegExp(".*[a-z].*"), "A senha deve conter uma letra minúscula")
      .regex(new RegExp(".*\\d.*"), "A senha deve conter um número"),
    phone: z
      .string()
      .nonempty("Telefone é obrigatório")
      .regex(/^[0-9]+$/, "O telefone só pode conter números")
      .min(8, "O telefone deve conter no mínimo 8 caracteres")
      .max(16, "O telefone deve conter no máximo 16 caracteres"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type RegisterData = z.infer<typeof registerSchema>;
