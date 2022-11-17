import styles from "styles/components/input.module.css";

export const Input = (props) => {
  return (
    <label className={styles.label}>
      <span className={styles.icon}>{props.icon}</span>
      {props.label}

      <input {...props} className={styles.input} />
    </label>
  );
};
