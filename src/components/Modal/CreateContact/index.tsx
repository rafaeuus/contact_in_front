import { Modal } from "..";
import { FormsCreateContact } from "../../Forms/CreateContact";

interface CreateContactProps {
  toggleModal: () => void;
}

export const CreateContact = ({ toggleModal }: CreateContactProps) => {
  return (
    <Modal toggleModal={toggleModal}>
      <h2>Criar contato</h2>
      <FormsCreateContact />
    </Modal>
  );
};
