import { useEffect, useState } from "react";
import { axInst } from "../../Util/axInst";
import { User } from "../../Util/Interfaces/User";

import OnlineUser from "./OnlineUser";
import "./OnlineUsers.css";

const OnlineUsers = () => {
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);

  const getOnlineUsers = async () => {
    try {
      const { data } = await axInst.get("/users/onlineUsers");
      setOnlineUsers(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getOnlineUsers();
  }, []);

  return (
    <>
      <h2>Online Users</h2>
      <div className="users-container">
        {onlineUsers.map((user: User) => {
          return <OnlineUser key={user.id} user={user}></OnlineUser>;
        })}
      </div>
    </>
  );
};

export default OnlineUsers;
