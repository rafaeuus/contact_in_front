import { Modal } from "..";
import { useUser } from "../../../hooks/useUser";
import { FormsUpdateUser } from "../../Forms/UpdateUser";

interface UpdateUserProps {
  toggleModal: () => void;
}

export const UpdateUser = ({ toggleModal }: UpdateUserProps) => {
  const { user, deleteUser } = useUser();

  return (
    <Modal toggleModal={toggleModal}>
      <div className="update">
        <h2>Atualizar {user.name}</h2>
        <button onClick={deleteUser}>Excluir Perfil</button>
      </div>
      <FormsUpdateUser />
    </Modal>
  );
};
