import { InputJsonValue } from "../../types";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  posts?: PostUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
  likes?: LikeUpdateManyWithoutUsersInput;
};
