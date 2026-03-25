"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const MAX_VISIBLE = 5;

// 이동: ?page=페이지번호
export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    router.push(`/posts?${params.toString()}`);
  };

  // 페이지 범위
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + MAX_VISIBLE - 1);

  return (
    <div className="flex justify-center items-center gap-1 pt-2">
      {/* 이전 */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="shrink-0 text-gray-900 px-2.5 py-1.5 hover:bg-neutral-100 hover:cursor-pointer rounded-md disabled:text-gray-500 disabled:pointer-events-none">
        <span className="flex items-center gap-0.5">
          <ChevronLeftIcon className="w-4 h-4" />
          <span className="font-semibold tracking-tighter hidden sm:inline">
            이전
          </span>
        </span>
      </button>

      {/* 앞쪽 ... */}
      {startPage > 1 && (
        <>
          <button
            onClick={() => goToPage(1)}
            className={`w-5 h-5 md:w-10 md:h-10 rounded-md text-sm md:text-base font-semibold hover:bg-neutral-100 hover:cursor-pointer`}>
            1
          </button>
          <span className="px-1">&middot;&middot;&middot;</span>
        </>
      )}

      {/* 페이지 번호 */}
      <div className="flex flex-wrap items-center gap-1">
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
          const page = startPage + i;

          return (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`w-5 h-5 md:w-10 md:h-10 rounded-md text-sm md:text-base font-semibold hover:bg-neutral-100 hover:cursor-pointer ${currentPage === page ? "bg-white border border-gray-300" : "bg-none"}`}>
              {page}
            </button>
          );
        })}
      </div>

      {/* 뒷쪽 ... */}
      {endPage < totalPages && (
        <>
          <span className="px-1">&middot;&middot;&middot;</span>
          <button
            onClick={() => goToPage(totalPages)}
            className={`w-5 h-5 md:w-10 md:h-10 rounded-md text-sm md:text-base font-semibold hover:bg-neutral-100 hover:cursor-pointer`}>
            {totalPages}
          </button>
        </>
      )}

      {/* 다음*/}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="shrink-0 px-2.5 py-1.5 hover:bg-neutral-100 hover:cursor-pointer rounded-md text-gray-900 disabled:text-gray-500 disabled:pointer-events-none">
        <span className="flex items-center gap-0.5">
          <span className="font-semibold tracking-tighter hidden sm:inline">
            다음
          </span>
          <ChevronRightIcon className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
}
