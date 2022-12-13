import { FC, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { axInst } from "../../../../Util/axInst";

import { IPost } from "../../../../Util/Interfaces/IPost";
import Comment from "../Comment/Comment";
import "./Post.css";

import { AuthContext } from "../../../../Context/AuthContext";

const Post: FC<{ post: IPost }> = ({ post }) => {
  const [showAddComment, setShowAddComment] = useState<boolean>(false);
  const { loggedInUser, getProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const getProfileHandler = () => {
    axInst.get("/users/id/" + post.userId).then(({ data }) => {
      getProfile(data);
    });
  };

  const deleteHandler = () => {
    axInst.delete(`/posts/delete/${post.id}`).then(() => {
      return navigate(0);
    });
  };

  const likeHandler = () => {
    axInst
      .post(`/posts/like/${document.cookie.slice(8)}/${post.id}`)
      .then(response => {
        return navigate(0);
      })
      .catch(e => {});
  };

  const commentHandler = () => {
    setShowAddComment(prev => !prev);
  };

  const submitCommentHandler = (e: any) => {
    e.preventDefault();

    axInst
      .post("/posts/comment/" + post.id, {
        userId: loggedInUser.id,
        message: e.target[0].value,
      })
      .then(() => {
        return navigate(0);
      });
  };

  return (
    <div className="post">
      <div className="post-header">
        <Link to="/profile" onClick={getProfileHandler}>
          <h3>{post.profileName}</h3>
        </Link>
        <div className="content">
          <p>{post.content}</p>
        </div>
        <p className="post-time">
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
        <div className="responders">
          <button onClick={likeHandler}>
            {" "}
            {post.usersLiked.find((id: number) => id === loggedInUser.id)
              ? "Unlike"
              : "Like"}
          </button>
          <button onClick={commentHandler}>Comment</button>
        </div>
        {post.userId === loggedInUser.id && (
          <button onClick={deleteHandler}>Delete</button>
        )}
      </div>
      {showAddComment && (
        <form className="comment-form" onSubmit={submitCommentHandler}>
          <textarea
            name="comment"
            placeholder="What do you think?"
            rows={3}
            cols={30}
          ></textarea>
          <button type="submit">Add Comment</button>
        </form>
      )}
      <div className="comment-container">
        {post.usersComments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default Post;
