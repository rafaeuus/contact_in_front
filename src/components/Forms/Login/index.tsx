import { useForm } from "react-hook-form";
import { LoginData, loginSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../../hooks/useAuth";
import drinkingCoffee from "../../../pages/Home/assets/drinkingCoffee.png";

export const FormsLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { signIn } = useAuth();

  return (
    <>
      <div className="form-login">
        <img src={drinkingCoffee} alt="Pessoas" />
        <div className="form">
          <div>
            <h2>Bem vindo de volta</h2>
            <span>Faça login para continuar</span>
          </div>
          <form onSubmit={handleSubmit(signIn)}>
            <input
              {...register("email")}
              id="email"
              placeholder="Digite o e-mail"
            />
            {errors.email && <span>{errors.email.message}</span>}
            <input
              {...register("password")}
              id="password"
              placeholder="Digite a senha"
              type="password"
            />
            {errors.password && <span>{errors.password.message}</span>}
            <button type="submit">Login</button>
          </form>
          <span>Crie sua própria agenda virtual!</span>
        </div>
      </div>
    </>
  );
};
