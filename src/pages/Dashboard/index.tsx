import { useEffect, useState } from "react";
import { useContacts } from "../../hooks/useContacts";
import { Card } from "../../components/Card";
import { UpdateContact } from "../../components/Modal/UpdateContact";
import { CreateContact } from "../../components/Modal/CreateContact";
import { useUser } from "../../hooks/useUser";
import { UpdateUser } from "../../components/Modal/UpdateUser";
import { StyledDashboard } from "./style";

export const Dashboard = () => {
  const { getContacts, contacts, loading } = useContacts();
  const { getUser, user } = useUser();

  const [isOpenModalUpdateContact, setIsOpenModalUpdateContact] =
    useState(false);
  const [isOpenModalCreateContact, setIsOpenModalCreateContact] =
    useState(false);

  const toggleModalUpdateContact = () =>
    setIsOpenModalUpdateContact(!isOpenModalUpdateContact);
  const toggleModalCreateContact = () =>
    setIsOpenModalCreateContact(!isOpenModalCreateContact);

  const [isOpenModalUpdateUser, setIsOpenModalUpdateUser] = useState(false);
  const toggleModalUpdateUser = () =>
    setIsOpenModalUpdateUser(!isOpenModalUpdateUser);

  useEffect(() => {
    getUser();
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledDashboard>
      <div>
        <div className="head">
          <h1>Bem vindo a sua dashboard {loading ? "..." : user.name}</h1>
          <button onClick={toggleModalUpdateUser}>Editar perfil</button>
          {isOpenModalUpdateUser && (
            <UpdateUser toggleModal={toggleModalUpdateUser} />
          )}
        </div>
        <div className="contacts">
          <h2>Contatos</h2>
          <button onClick={toggleModalCreateContact}>Criar contato</button>
          {isOpenModalCreateContact && (
            <CreateContact toggleModal={toggleModalCreateContact} />
          )}
          {loading ? (
            <span>Carregando...</span>
          ) : (
            <ul>
              {contacts.map((contact) => (
                <Card
                  key={contact.id}
                  contact={contact}
                  toggleModal={toggleModalUpdateContact}
                />
              ))}
            </ul>
          )}
        </div>
        {isOpenModalUpdateContact && (
          <UpdateContact toggleModal={toggleModalUpdateContact} />
        )}
      </div>
    </StyledDashboard>
  );
};
