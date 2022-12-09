import { useContext } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/" className="navbar-brand">
        <FontAwesomeIcon icon={faPeopleRobbery} className="logo" />
        <h1>TimeBandit</h1>
      </Link>
      {loggedIn && (
        <div className="nav">
          <input type="text" name="search" placeholder="Search" />
          <Link to="/profile">
            <FontAwesomeIcon className="icon" icon={faUser} />
          </Link>
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
