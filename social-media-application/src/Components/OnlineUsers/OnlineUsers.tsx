import axios from "axios";
import React, { useEffect, useState } from 'react'
import { User } from "../../Util/Interfaces/User";

import 'bootstrap/dist/css/bootstrap.css';
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
    {data.map((user: User) => {
                    return (
                        <Link to={"/profile"} className="row border border-dark mb-2" key={user.id}>
                            <div className="col-1">{user.id}</div>
                            <div className="col-11">{user.profileName}</div>
                        </Link>
                    )
                    })}
    </>
  )
}

export default OnlineUsers