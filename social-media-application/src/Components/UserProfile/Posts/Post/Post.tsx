import { FC, useContext } from "react";

import { axInst } from "../../../../Util/axInst";

import { IPost } from "../../../../Util/Interfaces/IPost";
import "./Post.css";

import { AuthContext } from "../../../../Context/AuthContext";
import axios from "axios";

const Post: FC<{ post: IPost }> = ({ post }) => {
  // const date = new Date(2022126121615588529000);
  // console.log(date);

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

  const likeHandler = () => {

    axios.post("http://localhost:8090/posts/like/" + document.cookie.slice(8) + "/" + post.id ).then((response) => {
        console.log(response);
    }).catch(e => {

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
        <p>{post.content}</p>
        <>
          {post.userId === loggedInUser.id && (
            <button onClick={deleteHandler}>Delete</button>
          )}
        </>
        <>
          {post.userId !== loggedInUser.id && (
            <button onClick={likeHandler}>Like</button>
          )}
        </>
      </div>
    </div>
  );
};

export default Post;
