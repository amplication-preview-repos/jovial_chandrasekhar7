import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type LikeCreateInput = {
  user?: UserWhereUniqueInput | null;
  post?: PostWhereUniqueInput | null;
};
