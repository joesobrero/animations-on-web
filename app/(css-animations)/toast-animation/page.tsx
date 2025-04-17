"use client";

import { useEffect, useState } from "react";
import "../../../styles/toast-animation.css";

export default function Toaster() {
  const [toasts, setToasts] = useState(0);

  return (
    <div className="toast-wrapper">
      <div className="toaster">
        {Array.from({ length: toasts }).map((_, i) => (
          <Toast key={i} index={toasts - (i + 1)} />
        ))}
      </div>
      <button
        className="button text-base-100 bg-base-content"
        onClick={() => {
          setToasts(toasts + 1);
        }}
      >
        Add toast
      </button>
    </div>
  );
}

function Toast({ index }: { index: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="toast border-base-200 border"
      style={{ "--index": index } as React.CSSProperties}
      data-mounted={mounted}
    >
      <span className="title text-base-content">Event Created </span>
      <span className="description text-base-muted">
        Monday, January 3rd at 6:00pm
      </span>
    </div>
  );
}
