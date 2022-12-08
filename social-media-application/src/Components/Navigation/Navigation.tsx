import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPeopleRobbery,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

const Navigation = () => {
  const { loggedIn, logout } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
  };

  return (
    <div className="navbar">
      <a href="/" className="navbar-brand">
        <FontAwesomeIcon icon={faPeopleRobbery} className="logo" />
        <h1>TimeBandit</h1>
      </a>
      {loggedIn && (
        <div className="nav">
          <input type="text" name="search" placeholder="Search" />
          <a href="/profile">
            <FontAwesomeIcon className="icon" icon={faUser} />
          </a>
          <FontAwesomeIcon
            className="icon"
            icon={faDoorOpen}
            onClick={logoutHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Navigation;
