import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center mt-auto bg-white border-t border-gray-200">
      <div className="flex items-center gap-2 py-8 text-sm text-gray-500">
        <p>&copy; Dev Board. Built by Juhyeon Kim · </p>
        <a
          href="https://github.com/pingandthepong/nextjs-typescript-board"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 underline hover:text-blue-500">
          <FaGithub size={16} /> GitHub
        </a>
      </div>
    </footer>
  );
}
