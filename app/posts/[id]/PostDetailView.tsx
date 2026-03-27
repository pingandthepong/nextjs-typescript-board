"use client";

import { Post } from "@/types/posts";
import { User, SquarePen, Trash2 } from "lucide-react";
import Button from "../../components/ui/Button";
import BackToListButton from "../components/BackToListButton";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PostDetailView({ post }: { post: Post }) {
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  const confirmDelete = () => {
    toast((t) => (
      <div className="font-semibold">
        📌 이 게시물을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
        <div className="flex justify-end gap-2 mt-2">
          <Button variant="outline" onClick={() => toast.dismiss(t.id)}>
            삭제 취소
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete();
            }}>
            삭제
          </Button>
        </div>
      </div>
    ));
  };

  const handleDelete = async () => {
    if (deleting) return;
    setDeleting(true);

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        {
          method: "DELETE",
        },
      );

      if (!res.ok) throw new Error("삭제 실패");

      toast.success("게시글이 삭제되었습니다.");
      router.push("/posts");
    } catch (err) {
      toast.error("삭제에 실패했습니다.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <BackToListButton />

      <section className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-200 shadow-sm">
        {/* 상단 */}
        <div className="space-y-6 px-8 py-10">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight tracking-tight capitalize ">
            {post.title}
          </h2>
          <div className="flex items-center gap-2 text-gray-600 font-medium">
            <User className="w-4 h-4" />
            user{post.userId}
          </div>
        </div>

        {/* 본문 */}
        <div className="px-8 py-12 text-gray-700 text-base leading-relaxed">
          {post.body}
        </div>
      </section>

      <div className="flex items-center gap-3 mt-8">
        {/* 수정 */}
        <Button
          variant="outline"
          href={`/posts/${post.id}/edit`}
          icon={SquarePen}>
          수정
        </Button>

        {/* 삭제 */}
        <Button
          variant="danger"
          icon={Trash2}
          onClick={confirmDelete}
          disabled={deleting}>
          삭제
        </Button>
      </div>

      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}
