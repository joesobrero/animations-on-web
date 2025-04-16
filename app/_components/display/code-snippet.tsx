"use client";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Choose a theme
import { useEffect } from "react";

export default function CodeSnippet({
  children,
  language = "css",
}: {
  children: string;
  language?: string;
}) {
  // Process the string to ensure proper indentation
  const formattedCode =
    typeof children === "string" ? children.trim() : String(children);

  useEffect(() => {
    // Highlight code when component mounts
    Prism.highlightAll();
  }, [formattedCode]);

  return (
    <pre className="rounded-lg p-4 overflow-x-auto text-sm border border-base-200 !bg-base-200">
      <code
        className={`language-${language}`}
        style={{
          whiteSpace: "pre",
          display: "block",
          color: "var(--color-base-content)",
        }}
      >
        {formattedCode}
      </code>
    </pre>
  );
}
