import { getPost } from "@/lib/api/posts";
import PostDetailView from "./PostDetailView";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  return <PostDetailView post={post} />;
}
