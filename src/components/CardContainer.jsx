import styles from "styles/components/card-container.module.css";

export const CardContainer = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};
