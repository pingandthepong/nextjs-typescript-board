import { POSTS_API_URL } from "../constants";
import { filterPosts } from "../utils/filterPosts";

export async function getPosts() {
  const res = await fetch(POSTS_API_URL);

  if (!res.ok) throw new Error(`Error: ${res.status}`);

  const data = await res.json();

  return data;
}

export async function getFilteredPosts(keyword: string) {
  const posts = await getPosts();
  return filterPosts(posts, keyword);
}
