"use client";

import { Post } from "@/types/posts";
import PostList from "../components/PostList";
import PostSearch from "./components/PostSearch";
import Pagination from "../components/Pagination";
import Button from "../components/Button";
import { Plus } from "lucide-react";

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
          <Button variant="primary" href="posts/new" icon={Plus}>
            글쓰기
          </Button>
        </div>

        {/* 검색 */}
        <PostSearch />

        {/* 리스트 렌더링 */}
        <PostList data={data} />

        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
}
