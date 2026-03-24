import { Post } from "@/types/posts";
import { getPosts } from "@/lib/api/posts";
import Posts from "./posts/page";

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <>
      <main className="flex-1 bg-gray-100">
        <div className="max-w-7xl w-full mx-auto">
          <section className="px-6 lg:px-8 py-12">
            <Posts data={posts} />
          </section>
        </div>
      </main>
    </>
  );
}
