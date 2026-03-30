"use client";

import { useState } from "react";
import { Comment } from "@/types/comment";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { MessageSquare } from "lucide-react";
import toast from "react-hot-toast";

export default function CommentSection({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = (newComment: Comment) => {
    setComments((prev) => [...prev, newComment]);
  };

  const handleDeleteComment = (id: number, password: string) => {
    const isValid = handleVerifyPassword(id, password);
    if (!isValid) return false;

    setComments((prev) => prev.filter((c) => c.id !== id));
    toast.success("댓글이 삭제되었습니다.");

    return true;
  };

  const handleUpdateComment = (id: number, content: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, content } : c)),
    );

    toast.success("댓글이 수정되었습니다.");
  };

  const handleVerifyPassword = (id: number, password: string) => {
    const target = comments.find((c) => c.id === id);

    if (!target) return false;

    if (target.password !== password) {
      toast.error("비밀번호가 올바르지 않습니다.");
      return false;
    }

    return true;
  };

  return (
    <>
      <div className="divide-y divide-gray-200 mt-14 mb-8">
        <h3 className="flex items-center gap-3 pb-4 mb-6">
          <MessageSquare className="w-4 h-4" />
          <span className="flex items-end gap-2">
            <span className="text-gray-900 text-2xl font-bold tracking-tight">
              댓글
            </span>
            <span className="text-gray-600 text-lg font-bold tracking-tight">
              ({comments.length})
            </span>
          </span>
        </h3>
        <CommentList
          comments={comments}
          onDelete={handleDeleteComment}
          onUpdate={handleUpdateComment}
          onVerify={handleVerifyPassword}
        />
      </div>
      <CommentForm postId={postId} onAdd={handleAddComment} />
    </>
  );
}
