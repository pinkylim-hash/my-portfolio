"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="loader" exit={{ y: "-100%" }} transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="loader-mark">
            <span>P</span>
            <i>✦</i>
          </motion.div>
          <p>Ideas in motion</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
