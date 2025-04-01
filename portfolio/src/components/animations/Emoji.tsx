"use client";

import { motion } from "framer-motion";
import { JSX } from "react";
const Emoji = ({ emoji }: { emoji: string }): JSX.Element => {
  return (
    <motion.p
      initial={{ rotate: -10 }}
      animate={{ rotate: 30 }}
      className="text-3xl"
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    >
      {emoji}
    </motion.p>
  );
};

export default Emoji;
