import { getFilteredPosts } from "@/lib/api/posts";
import { paginate } from "@/lib/utils/paginate";
import PostsView from "./PostsView";

const PAGE_SIZE = 10;

export default async function Posts({
  searchParams,
}: {
  searchParams: Promise<{ keyword?: string; page?: string }>;
}) {
  const params = await searchParams;
  const keyword = params.keyword || "";
  const filteredPosts = await getFilteredPosts(keyword);
  const currentPage = Number(params.page) || 1;

  const { paginatedData, total, totalPages } = paginate(
    filteredPosts,
    currentPage,
    PAGE_SIZE,
  );

  return (
    <PostsView
      data={paginatedData}
      totalCount={total}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
