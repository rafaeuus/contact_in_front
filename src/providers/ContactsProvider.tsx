import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export interface CreateContact {
  name: string;
  email?: string | null;
  phone?: string | null;
}

export interface ReceiveContact {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  createdAt: string;
  userId: string;
}

interface ContactsContextValues {
  getContacts: () => Promise<void>;
  contacts: ReceiveContact[];
  loading: boolean;
  updateContact: (data: CreateContact) => Promise<void>;
  contactFocus: ReceiveContact;
  setContactFocus: React.Dispatch<React.SetStateAction<ReceiveContact>>;
  createContact: (data: CreateContact) => Promise<void>;
  deleteContact: (id: string) => Promise<void>;
}

interface ContactsProviderProps {
  children: ReactNode;
}

export const ContactsContext = createContext({} as ContactsContextValues);

export const ContactsProvider = ({ children }: ContactsProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<ReceiveContact[]>([]);
  const [contactFocus, setContactFocus] = useState({} as ReceiveContact);

  const getContacts = async () => {
    setLoading(true);
    try {
      const response = await api.get("/contacts");
      setContacts(response.data);
      setLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.warn(error.response?.data.message);
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateContact = async (data: CreateContact) => {
    setLoading(true);
    try {
      await api.patch(`/contacts/${contactFocus.id}`, data);
      await getContacts();
      toast.success("Contato atualizado com sucesso");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.warn(error.response?.data.message);
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createContact = async (data: CreateContact) => {
    setLoading(true);
    try {
      await api.post("/contacts", data);
      await getContacts();
      toast.success("Contato criado com sucesso");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.warn(error.response?.data.message);
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id: string) => {
    setLoading(true);
    try {
      await api.delete(`/contacts/${id}`);
      await getContacts();
      toast.success("Contato apagado com sucesso");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.warn(error.response?.data.message);
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        getContacts,
        contacts,
        loading,
        updateContact,
        contactFocus,
        setContactFocus,
        createContact,
        deleteContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
