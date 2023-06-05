import { useNavigate } from "react-router-dom";
import { LoginData } from "../components/Forms/Login/validator";
import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { RegisterData } from "../components/Forms/Register/validator";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  loading: boolean;
  createUser: (data: RegisterData) => void;
}

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("contact.in:token");

    if (!token) {
      setLoading(false);
      navigate("/");
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("contact.in:token", token);

      toast.success("Login feito com sucesso");

      navigate("dashboard");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.warn(error.response?.data.message);
      }
      console.error(error);
    }
  };

  const createUser = async (data: RegisterData) => {
    try {
      await api.post("/users", data);
      toast.success("Usuário criado com sucesso");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.warn(error.response?.data.message);
      }
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, loading, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};
