import { FC } from "react";
import { Link } from "react-router-dom";
import { User } from "../../Util/Interfaces/User";

import "./OnlineUser.css";

const OnlineUser : FC<{ user: User }> = ({ user }) => {
    
    return (
        <div className="user">
            <span className="id">{user.id}</span>
            <Link to={"/profile"} key={user.id}>
            <span className="profile-name">{user.profileName}</span>
            </Link>
        </div>
    );
  };
  
  export default OnlineUser;