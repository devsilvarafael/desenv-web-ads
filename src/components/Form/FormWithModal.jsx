import Modal from "react-modal";

import { Form } from "./Form";

const customModalStyle = {
  content: {
    width: 500,
    height: 460,
    left: "36%",
    top: "22%",
    borderRadius: "0.5rem",
  },
};

export const FormWithModal = ({ open, closeModal }) => {
  return (
    <Modal isOpen={open} style={customModalStyle}>
      <Form closeModal={closeModal} />
    </Modal>
  );
};
