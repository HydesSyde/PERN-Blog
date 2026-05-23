import { createContext, useEffect, useState } from "react";
import { lookInSession } from "../common/session";

export const UserContext = createContext();

const UseContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const sessionUser = lookInSession("user");

    if (sessionUser) {
      setUserAuth(sessionUser);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userAuth,
        setUserAuth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UseContextProvider;
