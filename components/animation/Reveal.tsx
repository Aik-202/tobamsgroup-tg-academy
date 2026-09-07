"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children, className
}: {
  children: React.ReactNode;
  className: string
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}