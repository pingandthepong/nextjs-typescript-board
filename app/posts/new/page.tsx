"use client";

import { Save, X } from "lucide-react";
import FormInput from "@/app/components/ui/FormInput";
import Button from "../../components/ui/Button";
import BackToListButton from "../components/BackToListButton";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function New() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = (formData.get("title") as string).trim();
    const content = (formData.get("content") as string).trim();

    if (!title) {
      toast.error("제목을 입력해주세요.");
      setTitleError("제목을 입력해주세요.");
      return;
    } else if (!content) {
      toast.error("내용을 입력해주세요.");
      setContentError("내용을 입력해주세요.");
      setError(true);
      return;
    }

    if (loading) return;
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body: content,
          userId: "testUser",
        }),
      });

      if (!res.ok) throw new Error("요청 실패");

      await res.json();

      toast.success(`게시글이 생성되었습니다.`, {
        className: "font-semibold",
        duration: 3000,
      });

      setTimeout(() => {
        toast("데모 환경이므로 실제 데이터에는 반영되지 않습니다.", {
          icon: "📌",
          duration: 2000,
          className: "font-semibold",
        });
      }, 1000);

      setTimeout(() => {
        router.push("/posts");
      }, 2500);
    } catch (error) {
      toast.error("게시글 생성에 실패했습니다.");
      setError(true);
    } finally {
      setLoading(false);
      setError(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto relative">
      <BackToListButton />
      <section className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-200 shadow-sm">
        {/* 상단 */}
        <div className="space-y-3 p-8">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight tracking-tight capitalize ">
            Create New Post
          </h2>
          <div className="flex items-center gap-2 text-gray-600 font-medium">
            커뮤니티와 여러분의 생각을 공유하세요.
          </div>
        </div>

        {/* 본문 */}
        <div className="px-8 py-12 text-gray-700 text-base leading-relaxed">
          <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
            <div className="space-y-8 pb-8">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="new-title"
                  className="capitalize text-sm font-semibold tracking-tight text-gray-900">
                  title
                </label>
                <FormInput
                  name="title"
                  id="new-title"
                  placeholder="게시글 제목을 입력하세요."
                  autoFocus={true}
                  showIcon={false}
                  required
                  onChange={() => setTitleError("")}
                />
                <p className="text-sm text-gray-600">
                  게시물을 설명하는 명확하고 간결한 제목을 선택하세요.
                </p>
                {titleError && (
                  <p className="text-sm text-red-500">{titleError}</p>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="new-content"
                  className="capitalize text-sm font-semibold tracking-tight text-gray-900">
                  Content
                </label>
                <FormInput
                  as="textarea"
                  name="content"
                  id="new-content"
                  placeholder={`내용을 작성하세요.\n\n여러 단락을 사용하여 생각을 정리할 수 있습니다.`}
                  required
                  onChange={() => setContentError("")}
                />
                <p className="text-sm text-gray-600">
                  내용을 명확하게 작성하세요. 가독성을 높이기 위해 빈 줄로
                  단락을 구분합니다.
                </p>
                {contentError && (
                  <p className="text-sm text-red-500">{contentError}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <Button
                type="submit"
                variant="primary"
                icon={Save}
                disabled={loading}>
                {loading ? "저장 중..." : "저장"}
              </Button>
              <Button variant="outline" href="/posts" icon={X}>
                취소
              </Button>
            </div>
          </form>
        </div>
      </section>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
