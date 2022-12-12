import axios from "axios";
import React, { useState, FC } from "react";
import { useNavigate } from "react-router";

import { axInst } from "../Util/axInst";
import { User } from "../Util/Interfaces/User";

const defaultUser : User = {
  id: 0,
  profileName: "",
  email: "",
  password: "",
};

// Init context object
const context = {
  loggedInUser: defaultUser,
  users: [],
  profileUser: defaultUser,
  login: (email: string, password: string) => {},
  logout: () => {},
  isLoggedIn: () => {},
  search: (input : string) => {},
  getProfile: (user: User) => {},
};

// React component we return in AuthContextProvider
export const AuthContext = React.createContext(context);

// Driver Function
const AuthContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState<User>(defaultUser);
  const [users, setUsers] = useState([]);
  const [profileUser, setProfileUser] = useState<User>(defaultUser);
  const navigate = useNavigate();

  const loginHandler = async (email: string, password: string) => {
    try {
      const { data } = await axInst.post("/login", {
        email,
        password,
      });

      document.cookie = `SESSION=${data.message}`;

      setLoggedInUser(data.user);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const logoutHandler = async () => {
    try {
      await axInst.get(`/log-out/${document.cookie.slice(8)}`);

      document.cookie = "SESSION=; Max-Age=-99999999;";
      setLoggedInUser(defaultUser);
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  const isLoggedInHandler = () => {

    console.log("verifying user");

    axios.get("http://localhost:8090/" + document.cookie.slice(8)).then((response) => {
        console.log(response);
        setLoggedInUser(response.data);
    }).catch(e => {
        setLoggedInUser(defaultUser);
    });

    // if (document.cookie.slice(8)) {
    //   // setLoggedIn(true);
    //   return true;
    // }
    // else
    //   return false;
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

  const getProfileHandler = async (user: User) => {
    setProfileUser(user);
  }

  const contextValue = {
    loggedInUser,
    users,
    profileUser,
    login: loginHandler,
    logout: logoutHandler,
    isLoggedIn: isLoggedInHandler,
    search: searchHandler,
    getProfile: getProfileHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
