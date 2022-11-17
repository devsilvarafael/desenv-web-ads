import Modal from "react-modal";

import { Form } from "./Form";

export const FormWithModal = ({ open, closeModal }) => {
  return (
    <Modal isOpen={open}>
      <Form closeModal={closeModal} />
    </Modal>
  );
};
