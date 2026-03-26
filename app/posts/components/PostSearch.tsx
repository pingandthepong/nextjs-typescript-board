// 페이지 로직
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import FormInput from "@/app/components/ui/FormInput";

export default function PostSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const keyword = searchParams.get("keyword") || "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = formData.get("keyword") as string;

    const params = new URLSearchParams(searchParams);
    params.set("keyword", value);
    params.set("page", "1");

    router.push(`/posts?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name="keyword"
        defaultValue={keyword}
        placeholder="ID 혹은 제목으로 검색 가능합니다."
        size="short"
        showIcon
        autoFocus={true}
      />
    </form>
  );
}
