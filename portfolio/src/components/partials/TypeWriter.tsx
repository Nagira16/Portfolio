"use client";

import { motion } from "framer-motion";

const TypeWriter = ({ text }: { text: string }) => {
  return (
    <motion.p
      className="text-2xl font-mono"
      initial={{ width: "0ch" }}
      animate={{ width: `${text.length}ch` }}
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
