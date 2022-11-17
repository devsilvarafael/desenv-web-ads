import { useRouter } from "next/router";

import { useState } from "react";

import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import { useUserContext } from "src/contexts/UserContext";
import { FormWithModal } from "./Form/FormWithModal";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "./Button";
import { Input } from "./Input";

import styles from "styles/components/login.module.css";

export const Login = () => {
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const { account } = useUserContext();

  function handleChange(event) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  function checkUser() {
    if (
      account.username === userLogin.username &&
      account.password === userLogin.password
    ) {
      return router.push("/store");
    }

    toast.error("Login inválido", {
      autoClose: 2000,
      position: "top-center",
    });
  }

  return (
    <section className={styles.loginContainer}>
      <Input
        icon={<FaUserAlt />}
        label="Usuário"
        placeholder="seuemail@gmail.com"
        type="text"
        value={userLogin.username}
        name="username"
        onChange={handleChange}
      />
      <Input
        icon={<RiLockPasswordFill />}
        label="Senha"
        type="text"
        value={userLogin.password}
        name="password"
        placeholder="********"
        onChange={handleChange}
      />

      <ToastContainer />

      <div className={styles.buttonGroup}>
        <Button onClick={() => checkUser()}>Login</Button>
        <Button onClick={() => setOpenModal(true)}>Cadastro</Button>
        {openModal && (
          <FormWithModal
            open={openModal}
            closeModal={() => setOpenModal(false)}
          />
        )}
      </div>
    </section>
  );
};
