"use client";

import { Post } from "@/types/posts";
import PostList from "../components/PostList";
import Search from "../components/SearchInput";
import Link from "next/link";
import { Plus } from "lucide-react";
import Pagination from "../components/Pagination";

export default function PostsView({
  data,
  totalCount,
  currentPage,
  totalPages,
}: {
  data: Post[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}) {
  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold text-gray-900 tracking-tighter">
              Posts
            </h1>
            <p className="text-base text-gray-600">
              전체 게시글 ({totalCount}개)
            </p>
          </div>

          {/* 글쓰기 */}
          <Link
            href="/create"
            className="flex items-center gap-2 shadow-sm bg-gray-900 text-white px-4 py-2.5 rounded-lg cursor-pointer hover:bg-gray-900/90">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-tight">
              Write Post
            </span>
          </Link>
        </div>

        {/* 검색 */}
        <Search />

        {/* 리스트 렌더링 */}
        <PostList data={data} />

        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
}
