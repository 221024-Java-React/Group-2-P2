import { User } from "./User";

export interface IPost {
  id: number;
  creationTime: number[];
  content: string;
  profileName: string;
  userId: number;
  usersLiked: User;
}
