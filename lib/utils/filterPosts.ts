import { Post } from "@/types/posts";

export function filterPosts(posts: Post[], keyword: string) {
  const lowerKeyword = keyword.toLowerCase();

  return posts.filter((post) => {
    return (
      String(post.userId).toLowerCase().includes(lowerKeyword) ||
      post.title.toLowerCase().includes(lowerKeyword) ||
      post.body.toLowerCase().includes(lowerKeyword)
    );
  });
}
