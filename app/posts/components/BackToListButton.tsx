import { ArrowLeft } from "lucide-react";
import Button from "@/app/components/Button";

type Props = {
  href?: string;
  children?: React.ReactNode;
};

export default function BackToListButton({
  href = "/posts",
  children = "목록으로 돌아가기",
}: Props) {
  return (
    <Button
      href={href}
      variant="ghost"
      icon={ArrowLeft}
      className="shadow-none">
      {children}
    </Button>
  );
}
