import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

import 'bootstrap/dist/css/bootstrap.css';

import Navigation from "../Navigation/Navigation";
import { User } from "../../Util/Interfaces/User";
import axios from "axios";

const SearchUsers = () => {
    const [users, setUsers] = useState([]);
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    } else {
        axios.get("http://localhost:8090/users/profilename/ris").then((response) => {
            console.log(response.data);
            setUsers(response.data);
        }).catch(e => {

        });
    }

  }, []);

  return (
    <>
      <Navigation />
      <>
    {users.map((user: User) => {
                    return (
                        <div className="row border border-dark mb-2" key={user.id}>
                            <div className="col-1">{user.id}</div>
                            <div className="col-11">{user.profileName}</div>
                        </div>
                    )
                    })}
    </>
    </>
  );
};

export default SearchUsers;
