import { FC } from "react";

import { axInst } from "../../../../Util/axInst";

import { userId } from "../../../../Util/Interfaces/User";
import { IPost } from "../../../../Util/Interfaces/IPost";
import "./Post.css";

const Post: FC<{ post: IPost }> = ({ post }) => {
  // const date = new Date(2022126121615588529000);
  // console.log(date);

  const deleteHandler = () => {
    // TO DO: Delete post on frontend

    // Delete post on backend
    axInst.delete("/delete", {
      params: {
        id: post.id,
      },
    });
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src="" alt="Profile Pic" />
        <div>
          <h3>{post.profileName}</h3>
          <p>{post.creationTime[3] + ":" + post.creationTime[4] + " " + post.creationTime[1] + "/" + post.creationTime[2] + "/" + post.creationTime[0]}</p>
        </div>
      </div>
      <p>{post.content}</p>
      {post.userId === userId && (
        <button onClick={deleteHandler}>Delete</button>
      )}
    </div>
  );
};

export default Post;
