import axios from "axios";
import React, { useState, FC } from "react";
import { useNavigate } from "react-router";

import { axInst } from "../Util/axInst";

// Init context object
const context = {
  loggedIn: false,
  users: [],
  login: (email: string, password: string) => {},
  logout: () => {},
  isLoggedIn: () : boolean => { return false; },
  search: (input : string) => {},
};

// React component we return in AuthContextProvider
export const AuthContext = React.createContext(context);

// Driver Function
const AuthContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [users, setUsers] = useState([]);
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

  const isLoggedInHandler = () : boolean => {

    console.log("verifying user");

    // axios.get("http://localhost:8090/" + document.cookie.slice(8)).then((response) => {
    //     console.log(response);
    //     setLoggedIn(true);
    // }).catch(e => {
    //     setLoggedIn(false);
    // });
    if (document.cookie.slice(8)) {
      setLoggedIn(true);
      return true;
    }
    else
      return false;
  };

  const searchHandler = async (input: string) => {

    try {
      const link : string = "http://localhost:8090/users/profilename/" + input;

        axios.get(link).then((response) => {
            console.log(response.data);
            setUsers(response.data);
        }).catch(e => {

        });

      navigate("/search");
    } catch (e) {
      console.log(e);
    }
  };

  const contextValue = {
    loggedIn,
    users,
    login: loginHandler,
    logout: logoutHandler,
    isLoggedIn: isLoggedInHandler,
    search: searchHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
