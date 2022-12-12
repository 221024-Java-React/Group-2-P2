import { FC } from "react";

import { IComment } from "../../../../Util/Interfaces/IComment";

const Comment: FC<{ comment: IComment }> = ({ comment }) => {
  return (
    <div>
      <p>{comment.message}</p>
    </div>
  );
};

export default Comment;
