"use client";

import { motion } from "framer-motion";
import { JSX, ReactNode } from "react";

export const Slide = ({
  text,
  initPosition,
}: {
  text: ReactNode;
  initPosition: number;
}): JSX.Element => {
  return (
    <motion.div
      className="text-2xl text-white w-full"
      initial={{ x: initPosition, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      {text}
    </motion.div>
  );
};
