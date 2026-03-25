"use client";

import Link from "next/link";
import { ArrowLeft, User } from "lucide-react";

export default function PostDetailView({ post }: Post) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 뒤로가기 */}
      <Link
        href="/posts"
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 text-sm font-medium  transition-colors group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="">목록으로 돌아가기</span>
      </Link>

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

      {/* 수정 */}

      {/* 삭제 */}
    </div>
  );
}
