import { Post } from "@/types/posts";

// ========================
// 필터 로직
// ========================

export function filterPosts(posts: Post[], keyword: string) {
  const lowerKeyword = keyword.toLowerCase();

  return posts.filter((post) => {
    return (
      String(post.userId).toLowerCase().includes(lowerKeyword) ||
      post.title.toLowerCase().includes(lowerKeyword)
    );
  });
}
