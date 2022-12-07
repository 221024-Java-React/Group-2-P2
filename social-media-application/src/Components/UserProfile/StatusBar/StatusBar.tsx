import { useNavigate } from "react-router";

import { axInst } from "../../../Util/axInst";

import { userId } from "../../../Util/Interfaces/User";
import "./StatusBar.css";

const StatusBar = () => {
  const navigate = useNavigate();

  const submitHandler = (event: any) => {
    event.preventDefault();

    axInst
      .post("/posts/create/", {
        userId,
        content: event.target[0].value,
        withCredentials: true,
        headers: {
          Cookie: `sessionCookie=${document.cookie.slice(8)}`,
        },
      })
      .then(() => {
        return navigate(0);
      });
  };

  return (
    <div className="status-bar">
      <form onSubmit={submitHandler}>
        <textarea
          name="status"
          placeholder="What's on your mind?"
          rows={4}
          cols={50}
        ></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default StatusBar;
