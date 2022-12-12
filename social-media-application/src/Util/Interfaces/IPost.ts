import { IComment } from "./IComment";

export interface IPost {
  id: number;
  creationTime: number[];
  content: string;
  profileName: string;
  userId: number;
  usersLiked: number[];
  comments: IComment[];
}
