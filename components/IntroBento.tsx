"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function IntroBento() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  const handleNavigate = (hash: string) => {
    setIsVisible(false);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-bg/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
        >
          <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[150px] md:auto-rows-[250px]">
            <motion.button
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              onClick={() => handleNavigate("#home")}
              className="md:col-span-2 md:row-span-2 bg-bg/40 backdrop-blur-md border-[3px] border-border shadow-[8px_8px_0px_var(--shadow)] p-8 flex flex-col items-start justify-end text-left group hover:bg-accent/20 transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h2 className="font-display text-5xl md:text-7xl uppercase text-text relative z-10">
                Disposable Films
              </h2>
              <p className="font-condensed text-xl uppercase tracking-widest text-text/80 mt-2 relative z-10">
                Content-First Creative Agency
              </p>
            </motion.button>

            <motion.button
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              onClick={() => handleNavigate("#studios")}
              className="bg-bg/40 backdrop-blur-md border-[3px] border-border shadow-[8px_8px_0px_var(--shadow)] p-8 flex flex-col items-start justify-end text-left group hover:bg-accent/20 transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h2 className="font-display text-4xl uppercase text-text relative z-10">
                Disposable Studios
              </h2>
              <p className="font-condensed text-lg uppercase tracking-widest text-text/80 mt-2 relative z-10">
                Rent Our Space
              </p>
            </motion.button>

            <motion.button
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              onClick={() => handleNavigate("#services")}
              className="bg-bg/40 backdrop-blur-md border-[3px] border-border shadow-[8px_8px_0px_var(--shadow)] p-8 flex flex-col items-start justify-end text-left group hover:bg-accent/20 transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h2 className="font-display text-4xl uppercase text-text relative z-10">
                Technlinque
              </h2>
              <p className="font-condensed text-lg uppercase tracking-widest text-text/80 mt-2 relative z-10">
                Web Development
              </p>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
