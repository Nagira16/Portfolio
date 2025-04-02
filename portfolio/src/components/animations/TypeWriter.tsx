"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

const TypeWriter = ({
  text,
  font_size,
}: {
  text: string;
  font_size: string;
}): JSX.Element => {
  const trimmedText = text.replace(/\s+/g, "");

  return (
    <motion.p
      className={`${font_size} font-mono text-white`}
      initial={{ width: "0ch" }}
      animate={{ width: `${trimmedText.length}ch` }}
      transition={{
        duration: 2,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 5,
      }}
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        borderRight: "2px solid white",
      }}
    >
      {text}
    </motion.p>
  );
};

export default TypeWriter;
