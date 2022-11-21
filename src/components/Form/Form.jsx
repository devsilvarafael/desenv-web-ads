import { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useUserContext } from "../../contexts/UserContext";
import { Button } from "../Button";
import { Input } from "../Input";

import formInputs from "./FormInputsData";

export const Form = ({ closeModal }) => {
  const { setAccount } = useUserContext();

  const [newRegister, setNewRegister] = useState({
    document: "",
    username: "",
    password: "",
    address: "",
  });

  function handleChange(event) {
    setNewRegister({
      ...newRegister,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    setAccount(newRegister);

    toast.success("Cadastro realizado com sucesso", {
      autoClose: 2000,
      position: "top-center",
    });

    closeModal(true);
  }

  return (
    <div>
      <h3>Cadastro</h3>

      <form onSubmit={(event) => event.preventDefault()}>
        {formInputs.map((field, index) => (
          <Input
            placeholder={field.textField}
            type="text"
            name={field.name}
            onChange={handleChange}
            value={newRegister.names}
          />
        ))}

        <ToastContainer />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <Button onClick={handleSubmit}>Cadastrar</Button>
          <Button onClick={() => closeModal(true)}>Cancelar</Button>
        </div>
      </form>
    </div>
  );
};
