"use client";

import { Comment } from "@/types/comment";
import { MessageSquare } from "lucide-react";
import Button from "@/app/components/ui/Button";
import { useState } from "react";
import CommentFormItem from "./CommentFormItem";

export default function CommentForm({
  postId,
  onAdd,
}: {
  postId: number;
  onAdd: (comment: Comment) => void;
}) {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const isValid = !!(nickname && password && content);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const newComment: Comment = {
      id: Date.now(),
      nickname,
      password,
      content,
      createdAt: new Date().toISOString(),
    };

    // 로딩처리 임시
    setTimeout(() => {
      onAdd(newComment);
      setNickname("");
      setPassword("");
      setContent("");
      setLoading(false);
    }, 0);
  };

  return (
    <>
      <h4 className="font-bold text-lg text-gray-900 tracking-tight mb-4">
        댓글 작성
      </h4>

      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div className="flex gap-4">
                <CommentFormItem
                  as="input"
                  type="text"
                  label="닉네임"
                  name="nickname"
                  placeholder="닉네임을 입력하세요"
                  value={nickname}
                  className="flex-1"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNickname(e.target.value)
                  }
                />
                <CommentFormItem
                  as="input"
                  type="password"
                  label="비밀번호"
                  name="password"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  className="flex-1"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
              </div>
              <CommentFormItem
                as="textarea"
                label="댓글 내용"
                name="content"
                placeholder="댓글을 입력하세요..."
                value={content}
                rows={4}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setContent(e.target.value)
                }
              />
            </div>
            <div className="flex items-center gap-3 mt-6">
              <Button
                type="submit"
                variant="primary"
                icon={MessageSquare}
                disabled={!isValid || loading}
                className={isValid ? "" : "opacity-50 cursor-default"}>
                {loading ? "처리 중..." : "댓글 작성"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
