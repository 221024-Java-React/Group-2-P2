import axios from "axios";
import React, { useState, FC } from "react";
import { useNavigate } from "react-router";

import { axInst } from "../Util/axInst";

// Init context object
const context = {
  loggedIn: false,
  searchInput: "",
  login: (email: string, password: string) => {},
  logout: () => {},
  verifyUser: () => {},
  search: (input : string) => {},
};

// React component we return in AuthContextProvider
export const AuthContext = React.createContext(context);

// Driver Function
const AuthContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
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
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  const verifyUser = () => {

    axios.get("http://localhost:8090/" + document.cookie.slice(8)).then((response) => {
        console.log(response);
        setLoggedIn(true);
    }).catch(e => {
        setLoggedIn(false);
    });
    // if (document.cookie.slice(8)) {
    //   setLoggedIn(true);
    // }
  };

  const searchHandler = async (input: string) => {
    try {
      setSearchInput(input);
      navigate("/search");
    } catch (e) {
      console.log(e);
    }
  };

  const contextValue = {
    loggedIn,
    searchInput,
    login: loginHandler,
    logout: logoutHandler,
    verifyUser,
    search: searchHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
