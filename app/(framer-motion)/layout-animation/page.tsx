"use client";

import { motion } from "motion/react";
import { useState } from "react";
import "./styles.css";

export default function LayoutAnimation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <motion.div
        layout
        onClick={() => setOpen((o) => !o)}
        className="element"
        style={
          open
            ? { position: "fixed", inset: 0, width: "100%", height: "100%" }
            : { height: 48, width: 48 }
        }
      />
    </div>
  );
}
