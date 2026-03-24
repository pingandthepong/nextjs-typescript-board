import { getPosts } from "@/lib/api/posts";
import PostsView from "./PostsView";

export default async function Posts() {
  const posts = await getPosts();

  return <PostsView data={posts} />;
}
