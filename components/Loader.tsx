'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const images = [
    "https://picsum.photos/seed/df1/400/400",
    "https://picsum.photos/seed/df2/400/400",
    "https://picsum.photos/seed/df3/400/400",
    "https://picsum.photos/seed/df4/400/400",
    "https://picsum.photos/seed/df5/400/400",
    "https://picsum.photos/seed/df6/400/400",
  ];

  const loadingTexts = [
    "Loading assets...",
    "Preparing cameras...",
    "Setting up lights...",
    "Focusing lens...",
    "Almost ready..."
  ];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const duration = 1200; // Faster duration
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsLoaded(true);
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setIsExpanding(true);
      const timeout = setTimeout(() => {
        setIsVisible(false);
        onComplete();
        document.body.style.overflow = 'unset';
      }, 800); // Wait for zoom animation
      return () => clearTimeout(timeout);
    }
  }, [isLoaded, onComplete]);

  // Cycle images rapidly
  useEffect(() => {
    if (isLoaded) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 150);
    return () => clearInterval(interval);
  }, [isLoaded, images.length]);

  // Cycle text
  useEffect(() => {
    if (isLoaded) return;
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 600);
    return () => clearInterval(interval);
  }, [isLoaded, loadingTexts.length]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-bg text-text flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Central Animated Elements */}
          <motion.div
            animate={isExpanding ? { scale: 30, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {/* The D Outline */}
            <svg viewBox="0 0 120 120" className="w-64 h-64 md:w-80 md:h-80 absolute text-text/20">
              <path d="M 40 20 L 60 20 C 85 20, 100 35, 100 60 C 100 85, 85 100, 60 100 L 40 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>

            {/* The Circular Progress */}
            <svg viewBox="0 0 120 120" className="w-80 h-80 md:w-96 md:h-96 absolute -rotate-90">
              <motion.circle
                cx="60"
                cy="60"
                r="58"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 0.1 }}
              />
            </svg>

            {/* The Progress Dot */}
            <motion.div
              className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full"
              style={{ rotate: progress * 3.6 - 90 }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
            </motion.div>

            {/* The Image Square */}
            <div className="absolute w-20 h-20 md:w-24 md:h-24 overflow-hidden neo-border ml-4 bg-bg2">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  initial={{ opacity: 0.5, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.5 }}
                  transition={{ duration: 0.15 }}
                  className="w-full h-full object-cover grayscale"
                  alt="Loading sequence"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Loading Text */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-10">
            <AnimatePresence mode="wait">
              {!isLoaded && !isExpanding && (
                <motion.div
                  key={currentText}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-sans text-xs uppercase tracking-widest text-text/60"
                >
                  {loadingTexts[currentText]}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
