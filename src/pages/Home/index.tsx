import { useState } from "react";
import { FormsRegister } from "../../components/Forms/Register";
import { FormsLogin } from "../../components/Forms/Login";
import { StyledHome } from "./style";

export const Home = () => {
  const [makeRegister, setMakeRegister] = useState(false);

  return (
    <StyledHome>
      <div>
        <h1>Contact.in</h1>
        <div className="top-box">
          <span>{makeRegister ? "Já possui conta?" : "Novo usuário?"}</span>
          <button onClick={() => setMakeRegister(!makeRegister)}>
            {makeRegister ? "Fazer login" : "Cadastre-se"}
          </button>
        </div>
      </div>
      {makeRegister ? <FormsRegister /> : <FormsLogin />}
    </StyledHome>
  );
};
