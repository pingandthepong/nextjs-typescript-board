import { Post } from "@/types/posts";
import Thead from "./Thead";
import Tbody from "./Tbody";

export default function PostList({ data }: { data: Post[] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <Thead>id</Thead>
            <Thead>title</Thead>
            <Thead>userId</Thead>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <Tbody post={post} key={post.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
