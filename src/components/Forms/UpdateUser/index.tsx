import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "../../../hooks/useUser";
import { UpdateUserData, updateUserSchema } from "./validator";

export const FormsUpdateUser = () => {
  const { user, updateUser } = useUser();

  const defaultValues = {
    name: user.name,
    email: user.email,
    phone: user.phone,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserData>({
    resolver: zodResolver(updateUserSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(updateUser)}>
      <input {...register("name")} id="name" placeholder="Atualizar nome" />
      {errors.name && <span>{errors.name.message}</span>}

      <input {...register("email")} id="email" placeholder="Atualizar e-mail" />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        {...register("phone")}
        id="phone"
        placeholder="Atualizar telefone"
      />
      {errors.phone && <span>{errors.phone.message}</span>}

      <button type="submit">Salvar alterações</button>
    </form>
  );
};
