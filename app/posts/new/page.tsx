"use client";

import { Save, X } from "lucide-react";
import FormInput from "@/app/components/ui/FormInput";
import Button from "../../components/Button";
import BackToListButton from "../components/BackToListButton";

export default function New() {
  return (
    <div className="max-w-4xl mx-auto">
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
        <div className="px-8 py-12 text-gray-700 text-base leading-relaxed divide-y divide-gray-200">
          <form className="pb-8">
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="new-title"
                className="capitalize text-sm font-semibold tracking-tight text-gray-900">
                title
              </label>
              <FormInput
                id="new-title"
                placeholder="게시글 제목을 입력하세요."
                autoFocus={true}
                showIcon={false}
              />
              <p className="text-sm text-gray-600">
                게시물을 설명하는 명확하고 간결한 제목을 선택하세요.
              </p>
            </div>
            <div className="flex flex-col space-y-2 mt-8">
              <label
                htmlFor="new-content"
                className="capitalize text-sm font-semibold tracking-tight text-gray-900">
                Content
              </label>
              <FormInput
                as="textarea"
                id="new-content "
                placeholder={`내용을 작성하세요.\n\n여러 단락을 사용하여 생각을 정리할 수 있습니다.`}
              />
              <p className="text-sm text-gray-600">
                내용을 명확하게 작성하세요. 가독성을 높이기 위해 빈 줄로 단락을
                구분합니다.
              </p>
            </div>
          </form>
          <div className="flex items-center gap-3 mt-6">
            <Button
              variant="primary"
              // href={`posts/${post.id}/edit`}
              icon={Save}>
              저장
            </Button>
            <Button variant="outline" href="/delete" icon={X}>
              취소
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
