"use client";

import { motion, useSpring, useTransform } from "motion/react";
import "./styles.css";
export default function MotionValueBasics() {
  const SPRING = {
    type: "spring",
    damping: 10,
    mass: 0.15,
    stiffness: 100,
  };

  const y = useSpring(0, SPRING);
  const x = useSpring(0, SPRING);
  const opacity = useSpring(0, SPRING);
  const scale = useTransform(opacity, [0, 1], [0.5, 1]);

  return (
    <div
      className="wrapper"
      onPointerMove={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - bounds.left - 24);
        y.set(e.clientY - bounds.top - 24);
      }}
      onPointerEnter={() => opacity.set(1)}
      onPointerLeave={() => opacity.set(0)}
    >
      <motion.div
        style={{ x: x, y: y, opacity: opacity, scale: scale }}
        className="element"
      />
    </div>
  );
}
