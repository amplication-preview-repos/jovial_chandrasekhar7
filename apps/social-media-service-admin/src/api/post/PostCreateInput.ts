import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { LikeCreateNestedManyWithoutPostsInput } from "./LikeCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  content?: string | null;
  imageUrl?: string | null;
  user?: UserWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  likes?: LikeCreateNestedManyWithoutPostsInput;
};
