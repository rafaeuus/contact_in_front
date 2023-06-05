import { z } from "zod";

export const createContactSchema = z.preprocess(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (data: any) =>
    data.email === ""
      ? data.phone === ""
        ? { ...data, email: null, phone: null }
        : { ...data, email: null }
      : data.phone === ""
      ? { ...data, phone: null }
      : data,
  z.object({
    name: z
      .string()
      .min(3, "O nome deve conter no mínimo 3 caracteres")
      .max(250, "O nome deve conter no máximo 250 caracteres"),
    email: z
      .string()
      .email("Deve ser um e-mail")
      .max(250, "O email deve conter no máximo 250 caracteres")
      .nullable(),
    phone: z
      .string()
      .regex(/^[0-9]+$/, "O telefone só pode conter números")
      .min(8, "O telefone deve conter no mínimo 8 caracteres")
      .max(16, "O telefone deve conter no máximo 16 caracteres")
      .nullable(),
  })
);

export type CreateContactData = z.infer<typeof createContactSchema>;
