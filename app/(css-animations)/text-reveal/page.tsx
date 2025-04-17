"use client";

import CodeSnippet from "@/app/_components/display/code-snippet";
import "../../../styles/text-reveal.css";
import { useState } from "react";
const WORD = "Animations";

export default function TextReveal() {
  const [reset, setReset] = useState(0);

  return (
    <div className="flex flex-col gap-12">
      <div>
        <div key={reset}>
          <h1 className="h1">
            {WORD.split("").map((char, index) => (
              <span
                key={index}
                style={{ "--index": index } as React.CSSProperties}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
        {/* Use this button to replay your animation */}
        <button className="button" onClick={() => setReset(reset + 1)}>
          Replay animation
        </button>
      </div>
      <CodeSnippet>
        {`
        .h1 {
  /* ... */
  overflow: hidden;
}

.h1 span {
  display: inline-block;
  animation: reveal 1.3s cubic-bezier(0.19, 1, 0.22, 1);
  animation-fill-mode: backwards;
  animation-delay: calc(var(--index) * 0.03s);
}

@keyframes reveal {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
        `}
      </CodeSnippet>
    </div>
  );
}
