import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { UpdateUserData } from "../components/Forms/UpdateUser/validator";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextValues {
  getUser: () => Promise<void>;
  user: UserReceive;
  loading: boolean;
  updateUser: (data: UpdateUserData) => Promise<void>;
  deleteUser: () => Promise<void>;
}

interface UserReceive {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
}

export const UserContext = createContext({} as UserContextValues);

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({} as UserReceive);

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await api.get("/users");
      setUser(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.warn(error.response?.data.message);
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (data: UpdateUserData) => {
    setLoading(true);
    try {
      await api.patch("/users", data);
      await getUser();
      toast.success("Usuário atualizado com sucesso");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.warn(error.response?.data.message);
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async () => {
    try {
      await api.delete("/users");
      localStorage.clear();
      toast.success("Usuário deletado com sucesso");
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.warn(error.response?.data.message);
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
    return;
  };

  return (
    <UserContext.Provider
      value={{ getUser, user, loading, updateUser, deleteUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
