"use client";

import { Post } from "@/types/posts";
import PostList from "../components/PostList";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function PostsView({ data }: { data: Post[] }) {
  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold text-gray-900 tracking-tighter">
              Posts
            </h1>
            <p className="text-base text-gray-600">
              전체 게시글 ({data.length}개)
            </p>
          </div>

          <Link
            href="/create"
            className="flex items-center gap-2 shadow-sm bg-gray-900 text-white px-4 py-2.5 rounded-lg cursor-pointer hover:bg-gray-900/90">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-tight">
              Write Post
            </span>
          </Link>
        </div>

        {/* 글쓰기 */}
        {/* 검색 */}

        {/* 리스트 렌더링 */}
        <PostList data={data} />
      </div>
    </>
  );
}
