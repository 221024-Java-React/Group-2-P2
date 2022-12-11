import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPeopleRobbery,
  faDoorOpen,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

const Navigation = () => {

  const { loggedIn, logout, search } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
  };

  const searchHandler = (event : any) => {
    event.preventDefault();

    console.log(event);
    // const email = event.target[0].value;
    // const password = event.target[1].value;

    // login(email, password);

    search(event.target[0].value);
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar-brand">
        <FontAwesomeIcon icon={faPeopleRobbery} className="logo" />
        <h1>TimeBandit</h1>
      </Link>
      {loggedIn && (
        <div className="nav">
          <form onSubmit={searchHandler}>
            <input type="text" name="search" placeholder="Search"></input>
            <button type="submit">
                <FontAwesomeIcon className="icon" icon={faSearch} />
            </button>
          </form>
          
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
