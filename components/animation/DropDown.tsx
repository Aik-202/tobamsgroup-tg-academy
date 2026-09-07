"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Dropdown({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}