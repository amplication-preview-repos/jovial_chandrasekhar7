import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type PostWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  imageUrl?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  comments?: CommentListRelationFilter;
  likes?: LikeListRelationFilter;
};
