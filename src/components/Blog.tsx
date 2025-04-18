import React from "react";
import { ArrowUpRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="bg-[#111] border border-[#333] rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <p className="text-gray-300 mb-6">
        Check out my blog where I share insights about Android development,
        programming tips, and technology trends.
      </p>

      <div className="flex justify-center">
        <a
          href="https://blogs.bhupeshkumar.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#222] hover:bg-[#333] text-white py-2 px-4 rounded-md transition-colors"
        >
          Visit My Blog <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default Blog;
