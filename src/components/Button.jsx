import styles from "styles/components/button.module.css";

export const Button = (props) => {
  return (
    <button {...props} className={styles.btn}>
      {props.children}
    </button>
  );
};
