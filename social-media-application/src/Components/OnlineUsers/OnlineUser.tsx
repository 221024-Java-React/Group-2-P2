import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { User } from "../../Util/Interfaces/User";
import { AuthContext } from "../../Context/AuthContext";

import "./OnlineUser.css";

const OnlineUser : FC<{ user: User }> = ({ user }) => {

    const { getProfile } = useContext(AuthContext);

    return (
        <div className="user">
            <span className="id">{user.id}</span>
            <Link onClick={() => getProfile(user)} to={"/profile"} key={user.id}>
            <span className="profile-name">{user.profileName}</span>
            </Link>
        </div>
    );
  };
  
  export default OnlineUser;