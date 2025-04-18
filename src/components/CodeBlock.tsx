import React from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "../components/ui/sonner";

type CodeBlockProps = {
  code: string;
  language?: string;
};

const CodeBlock = ({ code, language = "matlab" }: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
    }
  };

  return (
    <div className="relative bg-[#0a0a0a] rounded-md overflow-hidden mb-4">
      <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-[#333]">
        <span className="text-xs font-mono text-gray-400">{language}</span>
        <button
          onClick={copyToClipboard}
          className="p-1 rounded hover:bg-[#333] transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <Copy size={16} className="text-gray-400" />
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
