"use client";

import Link from "next/link";

const buttonMap = {
  black: "bg-gray-900 text-white hover:bg-gray-900/90",
  basic: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50",
  red: "bg-white text-red-600 border border-red-200 hover:text-red-700 hover:bg-red-50  hover:border-red-300",
};

export default function Button({
  children,
  style = "black",
  href = "/",
  icon: Icon,
}: {
  children: React.ReactNode;
  style?: keyof typeof buttonMap;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <>
      <Link
        href={href}
        className={`inline-flex items-center gap-2 shadow-sm  px-4 py-2.5 rounded-lg cursor-pointer ${buttonMap[style]}`}>
        {Icon && <Icon className="w-4 h-4" />}
        <span className="text-sm font-semibold tracking-tight">{children}</span>
      </Link>
    </>
  );
}
