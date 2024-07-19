import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  posts?: PostListRelationFilter;
  comments?: CommentListRelationFilter;
  likes?: LikeListRelationFilter;
};
