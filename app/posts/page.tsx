import { getFilteredPosts } from "@/lib/api/posts";
import PostsView from "./PostsView";

export default async function Posts({
  searchParams,
}: {
  searchParams: Promise<{ keyword?: string; page?: string }>;
}) {
  const params = await searchParams;
  const keyword = params.keyword || "";

  const filteredPosts = await getFilteredPosts(keyword);

  return <PostsView data={filteredPosts} />;
}
