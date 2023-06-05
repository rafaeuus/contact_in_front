import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateContactData, createContactSchema } from "./validator";
import { useContacts } from "../../../hooks/useContacts";

export const FormsCreateContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateContactData>({
    resolver: zodResolver(createContactSchema),
  });

  const { createContact } = useContacts();

  return (
    <form onSubmit={handleSubmit(createContact)}>
      <input {...register("name")} id="name" placeholder="Nome do contato" />
      {errors.name && <span>{errors.name.message}</span>}

      <input
        {...register("email")}
        id="email"
        placeholder="E-mail do contato (opcional)"
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        {...register("phone")}
        id="phone"
        placeholder="Telefone do contato (opcional)"
      />
      {errors.phone && <span>{errors.phone.message}</span>}

      <button type="submit">Criar</button>
    </form>
  );
};
