import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type LikeUpdateInput = {
  user?: UserWhereUniqueInput | null;
  post?: PostWhereUniqueInput | null;
};
