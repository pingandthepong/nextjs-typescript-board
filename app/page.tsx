import { getFilteredPosts } from "@/lib/api/posts";
import PostsView from "./posts/PostsView";

export default async function Home({
  searchParams,
}: {
  searchParams: { keyword?: string; page?: string };
}) {
  const params = await searchParams;
  const keyword = params.keyword || "";

  const filteredPosts = await getFilteredPosts(keyword);

  return <PostsView data={filteredPosts.slice(0, 5)} />;
}
