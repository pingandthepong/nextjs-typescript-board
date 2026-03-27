import EditView from "./EditView";
import { getPost } from "@/lib/api/posts";

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await getPost(id);

  return <EditView post={post} />;
}
