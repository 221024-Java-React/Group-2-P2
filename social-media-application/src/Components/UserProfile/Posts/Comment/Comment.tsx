import { FC, useEffect, useState } from "react";
import { axInst } from "../../../../Util/axInst";

import { IComment } from "../../../../Util/Interfaces/IComment";
import "./Comment.css";

const Comment: FC<{ comment: IComment }> = ({ comment }) => {
  const [username, setUsername] = useState();

  useEffect(() => {
    axInst.get("users/id/" + comment.userId).then(({ data }) => {
      setUsername(data.profileName);
    });
  }, []);

  return (
    <div className="comment">
      <p className="message">{comment.message}</p>
      <p className="username">{username}</p>
    </div>
  );
};

export default Comment;
