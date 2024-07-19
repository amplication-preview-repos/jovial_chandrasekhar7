import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "imageUrl";

export const PostTitle = (record: TPost): string => {
  return record.imageUrl?.toString() || String(record.id);
};
