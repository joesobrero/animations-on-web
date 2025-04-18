"use client";

import { motion } from "motion/react";
import { useState } from "react";
import "./styles.css";

export default function Example() {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div className="wrapper">
      <button className="button" onClick={() => setShowSecond((s) => !s)}>
        Animate
      </button>
      {showSecond ? (
        <motion.div
          layoutId="rectangle"
          className="second-element"
          style={{ borderRadius: 12 }}
        />
      ) : (
        <motion.div
          layoutId="rectangle"
          className="element"
          style={{ borderRadius: 12 }}
        />
      )}
    </div>
  );
}
