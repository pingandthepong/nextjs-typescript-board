import { filterPosts } from "../utils/filterPosts";

// ========================
// fetch + 데이터 처리
// ========================

export async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error(`Error: ${res.status}`);
  const data = await res.json();
  return data;
}

export async function getFilteredPosts(keyword: string) {
  const posts = await getPosts();
  return filterPosts(posts, keyword);
}
