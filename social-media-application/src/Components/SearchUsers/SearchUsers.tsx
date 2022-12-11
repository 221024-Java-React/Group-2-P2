import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import OnlineUser from "../OnlineUsers/OnlineUser";

import "../OnlineUsers/OnlineUsers.css";

import Navigation from "../Navigation/Navigation";
import { User } from "../../Util/Interfaces/User";
import axios from "axios";

const SearchUsers = () => {
    const [users, setUsers] = useState([]);
  const { loggedIn, searchInput } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    } else {

      const link : string = "http://localhost:8090/users/profilename/" + searchInput;

        axios.get(link).then((response) => {
            console.log(response.data);
            setUsers(response.data);
        }).catch(e => {

        });
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
