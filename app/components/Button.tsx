"use client";

import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "outline" | "ghost" | "danger";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const baseStyle =
  "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg cursor-pointer transition-colors";

const variantStyles: Record<Variant, string> = {
  primary: "bg-gray-900 text-white hover:bg-gray-900/90 shadow-sm",
  outline:
    "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm",
  ghost:
    "bg-none text-gray-600 hover:text-gray-900 mb-6 text-sm font-medium shadow-none group",
  danger:
    "bg-white text-red-600 border border-red-200 hover:text-red-700 hover:bg-red-50 hover:border-red-300 shadow-sm",
};

export default function Button({
  children,
  variant = "primary",
  icon: Icon,
  href,
  disabled,
  className,
  onClick,
}: ButtonProps) {
  const combinedClass = clsx(
    baseStyle,
    variantStyles[variant],
    disabled && "opacity-50 pointer-events-none",
    className,
  );

  const content = (
    <>
      {Icon && (
        <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
      )}
      <span className="text-sm font-semibold tracking-tight">{children}</span>
    </>
  );

  // 링크 버튼
  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  // 일반 버튼
  return (
    <button onClick={onClick} disabled={disabled} className={combinedClass}>
      {content}
    </button>
  );
}
