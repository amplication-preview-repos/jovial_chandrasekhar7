import { User } from "../user/User";
import { Post } from "../post/Post";

export type Like = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  post?: Post | null;
};
