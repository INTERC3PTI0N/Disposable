'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const duration = 2500; 
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsFlashing(true);
        setTimeout(() => {
          setIsVisible(false);
          onComplete();
          document.body.style.overflow = 'unset';
        }, 400); 
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  const images = [
    "https://picsum.photos/seed/doc1/800/600",
    "https://picsum.photos/seed/doc2/800/600",
    "https://picsum.photos/seed/doc3/800/600",
    "https://picsum.photos/seed/doc4/800/600",
    "https://picsum.photos/seed/doc5/800/600",
    "https://picsum.photos/seed/doc6/800/600",
    "https://picsum.photos/seed/doc7/800/600",
    "https://picsum.photos/seed/doc8/800/600",
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] text-white/80 font-mono text-xs uppercase tracking-widest flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Text */}
          <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 hidden md:block z-30">
            [ DISPOSABLE FILMS ]
          </div>

          {/* Right Text */}
          <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 w-32 text-right hidden md:block z-30">
            [ {progress.toString().padStart(2, '0')} PERCENT ]
          </div>
          
          {/* Mobile Text */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 md:hidden z-30">
            [ {progress.toString().padStart(2, '0')} PERCENT ]
          </div>

          {/* Center Viewfinder */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
            <div className="w-72 h-48 md:w-[400px] md:h-[260px] relative">
              {/* Corners */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-[3px] border-l-[3px] border-white/80" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-[3px] border-r-[3px] border-white/80" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-[3px] border-l-[3px] border-white/80" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-[3px] border-r-[3px] border-white/80" />
              
              {/* Center Crosshair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 opacity-80">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-3 bg-white" />
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-3 bg-white" />
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-[2px] bg-white" />
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-[2px] bg-white" />
              </div>
            </div>
          </div>

          {/* Scrolling Images Strip */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
             <motion.div 
               className="flex flex-col gap-4"
               initial={{ y: "0%" }}
               animate={{ y: "-70%" }}
               transition={{ duration: 2.5, ease: "linear" }}
             >
               {images.map((src, i) => (
                 <div key={i} className="w-72 h-48 md:w-[400px] md:h-[260px] relative shrink-0">
                   <Image src={src} alt="Loading" fill className="object-cover" referrerPolicy="no-referrer" />
                 </div>
               ))}
             </motion.div>
          </div>

          {/* Flash Overlay */}
          <AnimatePresence>
            {isFlashing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0 bg-white z-50"
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
