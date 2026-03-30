"use client";

import { useState } from "react";
import { Comment } from "@/types/comment";
import { MessageSquare, UserRound, SquarePen, Trash2 } from "lucide-react";
import PasswordConfirmDialog from "@/app/components/ui/PasswordConfirmDialog";
import CommentEditDialog from "./CommentEditDialog";

export default function CommentList({
  comments,
  onDelete,
  onVerify,
  onUpdate,
}: {
  comments: Comment[];
  onDelete: (id: number, password: string) => boolean;
  onVerify: (id: number, password: string) => boolean;
  onUpdate: (id: number, content: string) => void;
}) {
  const [editingComment, setEditingComment] = useState<Comment | null>(null);

  if (comments.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center p-12 border border-gray-200 rounded-2xl">
        <MessageSquare className="w-12 h-12 text-gray-300  mb-4" />
        <p className="text-base text-gray-500 font-bold mb-1">
          아직 댓글이 없습니다
        </p>
        <p className="text-sm text-gray-600">첫 번째 댓글을 작성해보세요!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-white border border-gray-200 hover:border-gray-300 transition-all rounded-md p-6 group">
          <div className="flex">
            <div className="flex-1 flex items-center gap-2">
              <UserRound className="bg-gray-100 rounded-full p-1.5" />
              <span className="text-base font-bold">{comment.nickname}</span>
            </div>
            <div className="basis-40 flex justify-end items-center gap-2">
              <span className="text-xs text-gray-600">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
              <div className="flex gap-1">
                <PasswordConfirmDialog
                  title="댓글을 수정할까요?"
                  confirmText="수정"
                  cancelText="취소"
                  onConfirm={(password) => {
                    const success = onVerify(comment.id, password);

                    if (success) {
                      setEditingComment(comment); // 수정 Dialog 열기
                    }

                    return success;
                  }}>
                  <span className="w-10 h-7 flex justify-center items-center hover:bg-blue-50 rounded-sm text-transparent group-hover:text-gray-500 hover:text-blue-600 transition-colors">
                    <SquarePen className="w-4 h-4" />
                  </span>
                </PasswordConfirmDialog>
                <PasswordConfirmDialog
                  title="댓글을 삭제할까요?"
                  confirmText="삭제"
                  cancelText="취소"
                  onConfirm={(password) => {
                    return onDelete(comment.id, password);
                  }}>
                  <span className="w-10 h-7 flex justify-center items-center hover:bg-red-50 rounded-sm text-transparent group-hover:text-gray-500 hover:text-red-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </span>
                </PasswordConfirmDialog>
              </div>
            </div>
          </div>
          <div className="text-sm mt-4">
            <p>{comment.content}</p>
          </div>
        </div>
      ))}

      {editingComment && (
        <CommentEditDialog
          open={!!editingComment}
          nickname={editingComment.nickname}
          initialContent={editingComment.content}
          onClose={() => setEditingComment(null)}
          onSave={(newContent) => {
            onUpdate(editingComment.id, newContent);
            setEditingComment(null);
          }}
        />
      )}
    </div>
  );
}
