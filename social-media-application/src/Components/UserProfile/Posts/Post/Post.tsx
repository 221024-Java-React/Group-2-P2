import { FC, useContext } from "react";

import { axInst } from "../../../../Util/axInst";

import { IPost } from "../../../../Util/Interfaces/IPost";
import "./Post.css";

import { AuthContext } from "../../../../Context/AuthContext";

const Post: FC<{ post: IPost }> = ({ post }) => {
  // const date = new Date(2022126121615588529000);
  // console.log(date);

  const { userID } = useContext(AuthContext);

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
        <>
          {post.userId === userID && (
            <button onClick={deleteHandler}>Delete</button>
          )}
        </>
        <>
          {post.userId !== userID && (
            <button>Like</button>
          )}
        </>
      </div>
    
  );
};

export default Post;
