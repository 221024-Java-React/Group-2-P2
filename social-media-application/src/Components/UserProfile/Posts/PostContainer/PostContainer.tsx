import { FC } from "react";

import "./PostContainer.css";

const PostContainer: FC<{ children: JSX.Element[] }> = ({ children }) => {
  return (
    <>
      <h2>Welcome Home!</h2>
      <div className="post-container">
        <h2 hidden>Posts</h2>
        {children}
      </div>
    </>
  );
};

export default PostContainer;
