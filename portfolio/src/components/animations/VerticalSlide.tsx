"use client";

import { motion } from "framer-motion";
import { JSX, ReactNode } from "react";

const VerticalSlide = ({
  text,
  initPosition,
}: {
  text: ReactNode;
  initPosition: number;
}): JSX.Element => {
  return (
    <motion.div
      initial={{ y: initPosition, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      {text}
    </motion.div>
  );
};

export default VerticalSlide;
