import { FC } from "react";

import { axInst } from "../../../../Util/axInst";

import { userId } from "../../../../Util/Interfaces/User";
import { IPost } from "../../../../Util/Interfaces/IPost";
import "./Post.css";

const Post: FC<{ post: IPost }> = ({ post }) => {
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
          <p>{post.creationTime}</p>
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
