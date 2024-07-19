import { JsonValue } from "type-fest";
import { Post } from "../post/Post";
import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  posts?: Array<Post>;
  comments?: Array<Comment>;
  likes?: Array<Like>;
};
