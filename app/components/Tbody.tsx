import { Post } from "@/types/posts";
import Link from "next/link";

export default function Tbody({ post }: { post: Post }) {
  return (
    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 cursor-default">{post.id}</td>
      <td>
        <Link href={`/posts/${post.id}`} className="block group px-6 py-4 ">
          <div className="inline-block text-gray-900 group-hover:text-blue-600 font-medium text-base capitalize transition-color">
            {post.title}
            <span className="block h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-200 mt-0.5"></span>
          </div>
        </Link>
      </td>
      <td className="px-6 py-4 cursor-default">{post.userId}</td>
    </tr>
  );
}
