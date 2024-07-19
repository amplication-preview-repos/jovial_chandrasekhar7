import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { LikeUpdateManyWithoutPostsInput } from "./LikeUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  content?: string | null;
  imageUrl?: string | null;
  user?: UserWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  likes?: LikeUpdateManyWithoutPostsInput;
};
