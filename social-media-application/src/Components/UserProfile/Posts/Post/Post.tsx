import { FC, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { axInst } from "../../../../Util/axInst";

import { IPost } from "../../../../Util/Interfaces/IPost";
import Comment from "../Comment/Comment";
import "./Post.css";

import { AuthContext } from "../../../../Context/AuthContext";

const Post: FC<{ post: IPost }> = ({ post }) => {
  const [showAddComment, setShowAddComment] = useState<boolean>(false);
  const [comments, setComments] = useState([]);
  const { loggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const deleteHandler = () => {
    axInst.delete(`/posts/delete/${post.id}`).then(() => {
      return navigate(0);
    });
  };

  const likeHandler = () => {
    axInst
      .post(`/posts/like/${document.cookie.slice(8)}/${post.id}`)
      .then(response => {
        console.log(response);
        return navigate(0);
      })
      .catch(e => {});
  };

  const commentHandler = () => {
    setShowAddComment(prev => !prev);
  };

  const submitCommentHandler = (e: any) => {
    console.log(e);
    axInst.post("/posts/comment", {
      userId: loggedInUser.id,
      message: e.target.value,
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
        {/* {post.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })} */}
        {post.userId !== loggedInUser.id && (
          <div className="responders">
            <button onClick={likeHandler}>
              {" "}
              {post.usersLiked.find((id: number) => id === loggedInUser.id)
                ? "Like"
                : "Unlike"}
            </button>
            <button onClick={commentHandler}>Comment</button>
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
