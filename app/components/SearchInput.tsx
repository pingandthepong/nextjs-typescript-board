"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");

  const onSearch = (e: React.SubmitEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    params.set("keyword", keyword);
    params.set("page", "1");

    router.push(`/posts?${params.toString()}`);

    setKeyword("");
  };

  return (
    <form onSubmit={onSearch} className="relative max-w-md">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 " />
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search by ID, Title..."
        className="w-full h-11 pl-11 text-base bg-neutral-100 shadow-sm rounded-md outline-none focus:border border-neutral-400 focus:ring-4 ring-neutral-300"
        autoFocus
      />
    </form>
  );
}
