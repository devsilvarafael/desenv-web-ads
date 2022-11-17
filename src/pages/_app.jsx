import "../../styles/globals.css";
import { GlobalUserContext } from "../contexts/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalUserContext>
      <Component {...pageProps} />
    </GlobalUserContext>
  );
}

export default MyApp;
