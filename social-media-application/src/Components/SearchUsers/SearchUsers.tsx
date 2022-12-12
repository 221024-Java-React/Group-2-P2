import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import OnlineUser from "../OnlineUsers/OnlineUser";

import "../OnlineUsers/OnlineUsers.css";

import Navigation from "../Navigation/Navigation";
import { User } from "../../Util/Interfaces/User";

const SearchUsers = () => {
  const { loggedInUser, isLoggedIn, users } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {

    isLoggedIn();

    if (!loggedInUser.id) {
      navigate("/login");
    }

  }, []);

  return (
    <>
      <Navigation />
      <div className="users">
        {users.map((user: User) => {
          return <OnlineUser user={user}></OnlineUser>
        })}
      </div>
    </>
  );
};

export default SearchUsers;
