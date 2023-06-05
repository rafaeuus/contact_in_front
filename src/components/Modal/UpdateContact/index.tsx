import { Modal } from "..";
import { FormsUpdateContact } from "../../Forms/UpdateContact";
import { useContacts } from "../../../hooks/useContacts";

interface UpdateContactProps {
  toggleModal: () => void;
}

export const UpdateContact = ({ toggleModal }: UpdateContactProps) => {
  const { contactFocus } = useContacts();

  return (
    <Modal toggleModal={toggleModal}>
      <h2>Atualizar {contactFocus.name}</h2>
      <FormsUpdateContact />
    </Modal>
  );
};
