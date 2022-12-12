import { FC, useContext } from "react";
import { useNavigate } from "react-router";

import { axInst } from "../../../../Util/axInst";

import { IPost } from "../../../../Util/Interfaces/IPost";
import "./Post.css";

import { AuthContext } from "../../../../Context/AuthContext";
import axios from "axios";
import { Navigate } from "react-router";

const Post: FC<{ post: IPost }> = ({ post }) => {
  const { loggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const deleteHandler = () => {
    axInst.delete(`/posts/delete/${post.id}`).then(() => {
      return navigate(0);
    });
  };

  const likeHandler = () => {
    axios
      .post(
        "http://localhost:8090/posts/like/" +
          document.cookie.slice(8) +
          "/" +
          post.id
      )
      .then(response => {
        console.log(response);
      })
      .catch(e => {});
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
            <button onClick={likeHandler}>Like</button>
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
