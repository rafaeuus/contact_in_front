import { useContacts } from "../../hooks/useContacts";
import { ReceiveContact } from "../../providers/ContactsProvider";
import { StyledCard } from "./style";

interface CardProps {
  contact: ReceiveContact;
  toggleModal: () => void;
}

export const Card = ({ contact, toggleModal }: CardProps) => {
  const { setContactFocus, deleteContact } = useContacts();

  return (
    <StyledCard>
      <span className="name">Nome: {contact.name}</span>
      <span className="email">
        Email: {contact.email ? contact.email : "Não cadastrado"}
      </span>
      <span className="phone">
        Telefone: {contact.phone ? contact.phone : "Não cadastrado"}
      </span>
      <button
        onClick={() => {
          setContactFocus(contact);
          toggleModal();
        }}
      >
        Atualizar
      </button>
      <button
        className="button-delete"
        onClick={() => deleteContact(contact.id)}
      >
        Apagar
      </button>
    </StyledCard>
  );
};
