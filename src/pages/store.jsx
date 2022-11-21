import { useEffect, useState } from "react";

import styles from "styles/store.module.css";

import { CardContainer } from "src/components/CardContainer";
import { CardItem } from "src/components/CardItem";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Store() {
  const [data, setData] = useState([]);

  async function fetchGames() {
    await fetch("/games.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }

  useEffect(() => {
    fetchGames();
  }, []);

  function removeProduct() {
    const id = window.prompt("Digite o id do produto a ser removido");

    const currentProducts = [...data];

    const productIndex = currentProducts.findIndex(
      (product) => product.id === Number(id)
    );

    if (productIndex >= 0) {
      currentProducts.splice(productIndex, 1);
      setData(currentProducts);
    } else {
      toast.error("Erro na remoção do produto", { autoClose: 2000 });
    }
  }

  return (
    <div className={styles.storeContainer}>
      <h3 className={styles.title}>Bem-vindo a loja! =)</h3>
      <button onClick={removeProduct}>Remover Produto</button>
      <ToastContainer />
      <CardContainer>
        <CardItem data={data} />
      </CardContainer>
    </div>
  );
}
