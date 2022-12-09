import React, { useState, FC } from "react";
import { useNavigate } from "react-router";

import { axInst } from "../Util/axInst";

// Init context object
const context = {
  loggedIn: false,
  login: (email: string, password: string) => {},
  logout: () => {},
};

// React component we return in AuthContextProvider
export const AuthContext = React.createContext(context);

// Driver Function
const AuthContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  const loginHandler = async (email: string, password: string) => {
    try {
      const { data } = await axInst.post("/login", {
        email,
        password,
      });

      document.cookie = `SESSION=${data}`;

      setLoggedIn(true);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const logoutHandler = async () => {
    try {
      await axInst.get(`/log-out/${document.cookie.slice(8)}`);

      document.cookie = "SESSION=; Max-Age=-99999999;"; 
      setLoggedIn(false);
      navigate("/logout");
    } catch (e) {
      console.log(e);
    }
  };

  const contextValue = {
    loggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
