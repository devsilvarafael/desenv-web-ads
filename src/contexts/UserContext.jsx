import { createContext, useContext, useState } from "react";

const DEFAULT_VALUES = {
  state: {
    document: "",
    username: null,
    password: null,
    address: "",
  },
  setState: () => {},
};

const UserContext = createContext(DEFAULT_VALUES);

export const GlobalUserContext = ({ children }) => {
  const [account, setAccount] = useState(DEFAULT_VALUES.state);
  return (
    <UserContext.Provider value={{ account, setAccount }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
