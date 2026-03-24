"use client";

import Link from "next/link";
import { FileText } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="flex items-center h-16">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-gray-900">
              Dev Board
            </span>
          </Link>
        </h1>
      </div>
    </header>
  );
}
