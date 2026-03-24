import { POSTS_API_URL } from "../constants";

export async function getPosts() {
  const res = await fetch(POSTS_API_URL);

  if (!res.ok) throw new Error(`Error: ${res.status}`);

  const data = await res.json();

  return data;
}
