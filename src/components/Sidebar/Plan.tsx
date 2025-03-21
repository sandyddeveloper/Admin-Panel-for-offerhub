import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export const GitHubContact: React.FC = () => {
  return (
    <div className="flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">Sandy</p>
        </div>

        <div className="flex gap-2">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-1 px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded"
          >
            <FaEnvelope /> Contact
          </a>
        </div>
      </div>
    </div>
  );
};