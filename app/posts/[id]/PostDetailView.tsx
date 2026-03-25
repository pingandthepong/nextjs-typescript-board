"use client";

import { Post } from "@/types/posts";
import Link from "next/link";
import { ArrowLeft, User, SquarePen, Trash2 } from "lucide-react";
import Button from "../../components/Button";

export default function PostDetailView({ post }: Post) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 뒤로가기 */}
      <Button
        href="/posts"
        variant="ghost"
        icon={ArrowLeft}
        className="shadow-none">
        목록으로 돌아가기
      </Button>

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
        <Button variant="outline" href="/edit" icon={SquarePen}>
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
