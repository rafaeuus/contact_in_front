import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateContactData, updateContactSchema } from "./validator";
import { useContacts } from "../../../hooks/useContacts";

export const FormsUpdateContact = () => {
  const { updateContact, contactFocus } = useContacts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateContactData>({
    resolver: zodResolver(updateContactSchema),
  });

  return (
    <form onSubmit={handleSubmit(updateContact)}>
      <input
        {...register("name")}
        id="name"
        placeholder="Atualizar nome"
        defaultValue={contactFocus.name}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <input
        {...register("email")}
        id="email"
        placeholder="Atualizar e-mail"
        defaultValue={contactFocus.email && contactFocus.email}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        {...register("phone")}
        id="phone"
        placeholder="Atualizar telefone"
        defaultValue={contactFocus.phone && contactFocus.phone}
      />
      {errors.phone && <span>{errors.phone.message}</span>}

      <button type="submit">Salvar alterações</button>
    </form>
  );
};
