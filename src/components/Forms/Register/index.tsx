import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../../hooks/useAuth";
import { RegisterData, registerSchema } from "./validator";
import drinkingCoffee from "../../../pages/Home/assets/drinkingCoffee.png";

export const FormsRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const { createUser } = useAuth();

  return (
    <>
      <div className="form-register">
        <img src={drinkingCoffee} alt="Pessoas" />
        <div>
          <div>
            <h2>Olá, seja bem vindo!</h2>
            <span>Crie sua conta</span>
          </div>
          <form onSubmit={handleSubmit(createUser)}>
            <input
              {...register("name")}
              id="name"
              placeholder="Digite o seu nome completo"
            />
            {errors.name && <span>{errors.name.message}</span>}

            <input
              {...register("email")}
              id="email"
              placeholder="Digite o seu e-mail"
              type="email"
            />
            {errors.email && <span>{errors.email.message}</span>}

            <input
              {...register("password")}
              id="password"
              placeholder="Digite a sua senha"
              type="password"
            />
            {errors.password && <span>{errors.password.message}</span>}

            <input
              {...register("confirmPassword")}
              id="confirmPassword"
              placeholder="Confirme sua senha"
              type="password"
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}

            <input
              {...register("phone")}
              id="phone"
              placeholder="Digite o seu telefone"
            />
            {errors.phone && <span>{errors.phone.message}</span>}

            <button type="submit">Cadastrar</button>
          </form>
          <span>Crie sua própria agenda virtual!</span>
        </div>
      </div>
    </>
  );
};
