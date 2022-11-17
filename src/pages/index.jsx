import { Login } from "src/components/Login";

import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Login />
    </div>
  );
}
