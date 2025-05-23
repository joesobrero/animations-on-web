"use client";

import { useMotionTemplate, motion, useSpring } from "motion/react";
import { useRef, useState } from "react";

export default function Graph() {
  const SPRING = {
    damping: 18,
  };

  const SLOW_SPRING = {
    damping: 40,
  };

  const [isHovered, setIsHovered] = useState(false);

  const clipPathValue = useSpring(0, isHovered ? SPRING : SLOW_SPRING);
  const clipPathTemplate = useMotionTemplate`inset(0px ${clipPathValue}% 0px 0px)`;

  function onPointerMove(
    e: React.PointerEvent<HTMLDivElement | SVGSVGElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();
    const distanceFromRight = Math.max(rect.right - e.clientX, 0);
    const percentageFromRight = Math.min(
      (distanceFromRight / rect.width) * 100,
      100
    );
    clipPathValue.set(percentageFromRight);
  }

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (
    <div className="w-full" onPointerMove={onPointerMove}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 644 188"
        onPointerMove={onPointerMove}
        onPointerLeave={() => {
          setIsHovered(false);
          timeoutRef.current = setTimeout(() => {
            clipPathValue.set(0);
          }, 1000);
        }}
        onPointerEnter={() => {
          setIsHovered(true);
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }}
        style={{
          clipPath: clipPathTemplate,
        }}
      >
        <path
          stroke="#0090FF"
          strokeWidth="2"
          d="M1 118.5s82.308-15.501 113.735-29 74.769-1.713 121.217-12c37.596-8.328 58.517-15.006 93.781-30.5 80.146-35.215 123.213-16 154.141-24.5S635.97.849 644 1.5"
        ></path>
        <path
          fill="url(#paint0_linear_540_31)"
          d="M113.912 89.012C82.437 102.511 1 118.01 1 118.01V188h643V1.023c-8.043-.65-129.399 12.499-160.375 20.998-30.976 8.498-74.11-10.714-154.38 24.496-35.319 15.493-56.272 22.17-93.927 30.497-46.52 10.286-89.93-1.5-121.406 11.998"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_540_31"
            x1="322.5"
            x2="322.5"
            y1="1"
            y2="188"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#138EED" stopOpacity="0.4"></stop>
            <stop offset="1" stopColor="#058FFB" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
