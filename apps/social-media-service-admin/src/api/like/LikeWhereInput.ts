import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  post?: PostWhereUniqueInput;
};
