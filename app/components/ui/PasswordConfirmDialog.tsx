"use client";

import { useState } from "react";
import { Trash2Icon, UserRound } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CommentFormItem from "@/app/posts/[id]/components/CommentFormItem";

type Props = {
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: (password: string) => boolean;
  children: React.ReactNode;
};

export default function PasswordConfirmDialog({
  title = `정말 삭제할까요?`,
  description = "작성 시 입력한 비밀번호를 입력하세요.",
  confirmText = "삭제",
  cancelText = "취소",
  onConfirm,
  children,
}: Props) {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");

  const destructiveStyle =
    "bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive";

  const editStyle =
    "bg-blue-50 text-blue-600 dark:bg-blue-100 dark:text-blue-600";

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button type="button" onClick={() => setOpen(true)}>
          {children}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia
            className={confirmText === "삭제" ? destructiveStyle : editStyle}>
            {confirmText === "삭제" ? <Trash2Icon /> : <UserRound />}
          </AlertDialogMedia>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="w-full">
            {description}

            <span className="block mt-4 text-left">
              <CommentFormItem
                as="input"
                type="password"
                name="password"
                label="비밀번호"
                placeholder="비밀번호를 입력하세요"
                className="flex-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">{cancelText}</AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault(); // 자동 닫힘 방지
              const success = onConfirm(password);

              // 성공 시만 닫기
              if (success) {
                setPassword("");
                setOpen(false);
              } else {
                setPassword("");
              }
            }}
            variant={confirmText === "삭제" ? "destructive" : "default"}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
