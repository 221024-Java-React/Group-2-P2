import axios from "axios";
import React, { useEffect, useState } from 'react'
import { User } from "../../Util/Interfaces/User";
import OnlineUser from "./OnlineUser";

import "./OnlineUsers.css";
import { Link } from "react-router-dom";

const OnlineUsers = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

    axios.get("http://localhost:8090/users/onlineUsers").then((response) => {
        console.log(response.data);
        setData(response.data);
    }).catch(e => {
    });

    }, []);

  return (
    <>
      <h2>Online Users</h2>
      <div className="users">
        {data.map((user: User) => {
            return <OnlineUser user={user}></OnlineUser>
          })}
      </div>
    </>
  )
}

export default OnlineUsers