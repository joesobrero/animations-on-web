"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./styles.css";
import Spinner from "@/app/_components/display/spinner";

const buttonCopy = {
  idle: "Send me a login link",
  loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
  success: "Login link sent!",
};

export default function SmoothButton() {
  const [buttonState, setButtonState] = useState("idle");

  return (
    <div className="outer-wrapper">
      <button
        className="blue-button"
        disabled={buttonState !== "idle"}
        onClick={() => {
          // This code is just a placeholder
          setButtonState("loading");

          setTimeout(() => {
            setButtonState("success");
          }, 1750);

          setTimeout(() => {
            setButtonState("idle");
          }, 3500);
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={buttonState}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "ease-in-out", duration: 0.1 }}
          >
            {buttonCopy[buttonState as keyof typeof buttonCopy]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
