"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Button from "@/app/components/ui/Button";

type Props = {
  open: boolean;
  onClose: () => void;
  nickname: string;
  initialContent: string;
  onSave: (content: string) => void;
};

export default function CommentEditDialog({
  open,
  onClose,
  nickname,
  onSave,
}: Props) {
  const [content, setContent] = useState("");

  const isValid = content.trim().length > 0;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>댓글 내용 수정</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* 작성자 */}
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-sm text-gray-500">작성자</p>
            <p className="font-bold">{nickname}</p>
          </div>

          {/* 내용 */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>댓글 내용</span>
              <span>{content.length} / 300</span>
            </div>

            <textarea
              className="w-full bg-gray-100 rounded-md p-4 outline-none resize-none"
              value={content}
              onChange={(e) => {
                if (e.target.value.length <= 300) {
                  setContent(e.target.value);
                }
              }}
            />
          </div>

          {/* 버튼 */}
          <div className="flex gap-3">
            <Button
              variant="primary"
              disabled={!isValid}
              onClick={() => {
                onSave(content);
                onClose();
              }}>
              수정 완료
            </Button>

            <Button variant="outline" onClick={onClose}>
              취소
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
