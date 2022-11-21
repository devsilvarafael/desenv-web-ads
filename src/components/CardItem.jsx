import styles from "styles/components/card-item.module.css";

import { BsCart2 } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

export const CardItem = ({ data, id }) => {
  return data?.map((game) => (
    <div className={styles.card}>
      <h4 className={styles.cardTitle}>{game.title}</h4>
      <img src={game.image} alt={game.title} className={styles.cardImg} />
      <p className={styles.cardPrice}>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(game.price)}
      </p>
      <span className={styles.icon}>
        <BsCart2 />
      </span>
    </div>
  ));
};
