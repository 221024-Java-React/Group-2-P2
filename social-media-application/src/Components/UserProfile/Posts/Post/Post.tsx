import { FC, useContext } from "react";

import { axInst } from "../../../../Util/axInst";

import { IPost } from "../../../../Util/Interfaces/IPost";
import "./Post.css";

import { AuthContext } from "../../../../Context/AuthContext";

const Post: FC<{ post: IPost }> = ({ post }) => {
  const { loggedInUser } = useContext(AuthContext);

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
        {/* <img src="" alt="Profile Pic" /> */}
        <h3>{post.profileName}</h3>
        <div className="content">
          <p>{post.content}</p>
        </div>
          <p>
            {post.creationTime[3] +
              ":" +
              post.creationTime[4] +
              " " +
              post.creationTime[1] +
              "/" +
              post.creationTime[2] +
              "/" +
              post.creationTime[0]}
          </p>
        {post.userId !== loggedInUser.id && (
          <div className="responders">
            <button>Like</button>
            <button>Comment</button>
          </div>
        )}
        <>
          {post.userId === loggedInUser.id && (
            <button onClick={deleteHandler}>Delete</button>
          )}
        </>
      </div>
    </div>
  );
};

export default Post;
