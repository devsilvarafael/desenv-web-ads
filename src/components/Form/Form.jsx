import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { Button } from "../Button";

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
  }

  return (
    <div>
      <h3>Cadastro</h3>

      <form onSubmit={(event) => event.preventDefault()}>
        {formInputs.map((field, index) => (
          <label key={index}>
            {field.textField}
            <input
              type="text"
              name={field.name}
              onChange={handleChange}
              value={newRegister.names}
            />
          </label>
        ))}
        <Button onClick={handleSubmit}>Cadastrar</Button>
        <Button onClick={() => closeModal(true)}>Cancelar</Button>
      </form>
    </div>
  );
};
