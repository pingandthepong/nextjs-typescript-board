"use client";

import { Post } from "@/types/posts";
import { User, SquarePen, Trash2 } from "lucide-react";
import Button from "../../components/ui/Button";
import BackToListButton from "../components/BackToListButton";

export default function PostDetailView({ post }: { post: Post }) {
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
        <Button variant="danger" href="/delete" icon={Trash2}>
          삭제
        </Button>
      </div>
    </div>
  );
}
