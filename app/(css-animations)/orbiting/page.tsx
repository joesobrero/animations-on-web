"use client";
import CodeSnippet from "@/app/_components/display/code-snippet";
import "../../../styles/orbiting.css";

export default function Orbit() {
  return (
    <div className="flex flex-col gap-12">
      <div className="w-40 h-md grid place-items-center relative scene">
        <div className="circle" />
        <div className="orbitingCircle" />
      </div>
      <CodeSnippet>
        {`
        .scene {
  perspective: 400px;
  transform-style: preserve-3d;
}

.circle {
  /* ... */
}

.orbitingCircle {
  /* ... */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* animation */
  animation: orbit 5s linear infinite;
  transform: translateZ(100px);
}

.scene:hover .orbitingCircle {
  animation-play-state: paused;
}

@keyframes orbit {
  from {
    transform: translate(-50%, -50%) rotateY(0deg) translateZ(72px)
      rotateY(360deg);
  }
  to {
    transform: translate(-50%, -50%) rotateY(360deg) translateZ(72px)
      rotateY(0deg);
  }
}
        `}
      </CodeSnippet>
    </div>
  );
}
