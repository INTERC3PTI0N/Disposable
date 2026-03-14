'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function HeroBento() {
  return (
    <section id="home" className="min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-8rem)] pt-24 md:pt-32 pb-8 md:pb-16 px-2 md:px-0 max-w-[1800px] mx-auto flex items-center justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
        
        {/* Main Large Block (Top Left) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 md:row-span-2 bg-[#141414]/80 backdrop-blur-md rounded-2xl neo-border neo-shadow p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70">
              <span className="text-white">📍</span> MUMBAI / INDIA
            </div>
            <div className="w-3 h-3 rounded-full bg-[#FF5A5F] animate-pulse neo-border" />
          </div>
          
          <div className="mt-auto">
            <h1 className="font-display text-[18vw] md:text-[11rem] leading-[0.8] text-[#FF5A5F] tracking-tighter uppercase drop-shadow-sm">
              DISPOSABLE.
            </h1>
            <p className="font-mono text-sm md:text-lg uppercase tracking-widest text-white/60 mt-6">
              YOUR BRAND. YOUR STORY. YOUR STUDIO.
            </p>
          </div>
        </motion.div>

        {/* Top Right Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#141414]/80 backdrop-blur-md rounded-2xl neo-border neo-shadow p-8 flex flex-col justify-center gap-6 group hover:bg-[#1a1a1a]/90 transition-colors"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-mono text-[10px] text-white/60">
            01
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-white mb-3">DISPOSABLE FILMS</h2>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">YOUR BRAND. OUR CAMERA.</p>
          </div>
        </motion.div>

        {/* Middle Right Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#141414]/80 backdrop-blur-md rounded-2xl neo-border neo-shadow p-8 flex flex-col justify-center gap-6 group hover:bg-[#1a1a1a]/90 transition-colors"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-mono text-[10px] text-white/60">
            02
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-white mb-3">DISPOSABLE STUDIO</h2>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">RENT. SHOOT. CREATE.</p>
          </div>
        </motion.div>

        {/* Bottom Left Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#141414]/80 backdrop-blur-md rounded-2xl neo-border neo-shadow p-8 flex flex-col justify-center gap-6 group hover:bg-[#1a1a1a]/90 transition-colors"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-mono text-[10px] text-white/60">
            04
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl uppercase text-white mb-3">PORTFOLIO</h2>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">SELECTED WORKS</p>
          </div>
        </motion.div>

        {/* Bottom Middle Block (Yellow/Accent) */}
        <Link href="#contact" className="block h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="h-full bg-[#FFD166] rounded-2xl neo-border neo-shadow p-8 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-2 transition-transform cursor-pointer text-black"
          >
            <div className="flex justify-between items-start relative z-10">
              <div className="px-4 py-1.5 rounded-full border border-black font-mono text-[10px] font-bold uppercase tracking-widest bg-white/50 backdrop-blur-sm">
                START PROJECT
              </div>
              <span className="text-2xl font-bold">&rarr;</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.9] relative z-10">
              LET&apos;S<br/>TALK
            </h2>
            {/* Decorative circle */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full border-[24px] border-black/10" />
          </motion.div>
        </Link>

        {/* Bottom Right Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#141414]/80 backdrop-blur-md rounded-2xl neo-border neo-shadow p-8 flex flex-col justify-center gap-6 group hover:bg-[#1a1a1a]/90 transition-colors"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-mono text-[10px] text-white/60">
            03
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-white mb-3">TECHLINQUE</h2>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">WEB DEV / SEO / GROWTH</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
