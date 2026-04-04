'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

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
          {/* Video Collage Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-1 p-4 opacity-40">
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-lg"
              >
                <Image src="https://picsum.photos/seed/shoot1/800/600" alt="Shoot 1" fill className="object-cover grayscale sepia-[0.2]" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                animate={{ scale: [1.05, 1, 1.05], opacity: [0.8, 0.6, 0.8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-lg"
              >
                <Image src="https://picsum.photos/seed/shoot2/800/600" alt="Shoot 2" fill className="object-cover grayscale brightness-75" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-lg"
              >
                <Image src="https://picsum.photos/seed/shoot3/800/600" alt="Shoot 3" fill className="object-cover grayscale contrast-125" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.9, 0.7, 0.9] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-lg"
              >
                <Image src="https://picsum.photos/seed/shoot4/800/600" alt="Shoot 4" fill className="object-cover grayscale sepia-[0.1]" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
            
            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay animate-grain" 
                 style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
            
            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]" 
                 style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} />
          </div>

          {/* Viewfinder corners */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/20 pointer-events-none z-10" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/20 pointer-events-none z-10" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-white/20 pointer-events-none z-10" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-white/20 pointer-events-none z-10" />

          {/* Top Bar */}
          <div className="flex justify-between items-start w-full relative z-10">
            <div className="flex items-center gap-3 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5A5F] animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest text-white/90 font-bold">REC</span>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <div className="font-mono text-[10px] tracking-widest text-white/50 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                ISO 400
              </div>
              <div className="font-mono text-[10px] tracking-widest text-white/50 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 hidden sm:block">
                24 FPS
              </div>
            </div>
          </div>

          {/* Center Crosshair */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700 z-10">
            <div className="w-16 h-[1px] bg-white absolute" />
            <div className="w-[1px] h-16 bg-white absolute" />
            <div className="w-6 h-6 border border-white rounded-full absolute" />
          </div>

          {/* Scrolling Marquee Background */}
          <div className="absolute top-1/3 left-0 w-[200%] overflow-hidden flex whitespace-nowrap opacity-[0.04] pointer-events-none -rotate-3 -translate-y-1/2 z-0">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="flex gap-8 font-display text-7xl sm:text-9xl tracking-widest uppercase"
            >
              <span>CREATIVE AGENCY</span>
              <span>•</span>
              <span>PRODUCTION HOUSE</span>
              <span>•</span>
              <span>STUDIO</span>
              <span>•</span>
              <span>CREATIVE AGENCY</span>
              <span>•</span>
              <span>PRODUCTION HOUSE</span>
              <span>•</span>
              <span>STUDIO</span>
              <span>•</span>
            </motion.div>
          </div>

          {/* Floating Glows */}
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#FF5A5F] rounded-full blur-[80px] pointer-events-none z-0"
          />
          <motion.div 
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-[#FFD166] rounded-full blur-[80px] pointer-events-none z-0"
          />
          
          <div className="mt-auto relative z-10">
            <p className="font-mono text-sm md:text-lg uppercase tracking-widest text-white/60 mt-6">
              YOUR BRAND. YOUR STORY. OUR STUDIO.
            </p>
          </div>
        </motion.div>

        {/* Top Right Block */}
        <Link href="/work" className="block h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-full bg-[#141414]/80 backdrop-blur-md rounded-2xl neo-border neo-shadow p-8 flex flex-col justify-center gap-6 group hover:bg-[#1a1a1a]/90 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-mono text-[10px] text-white/60">
              04
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl uppercase text-white mb-3">PORTFOLIO</h2>
            </div>
          </motion.div>
        </Link>

        {/* Middle Right Block */}
        <Link href="/#contact" className="block h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
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

        {/* Bottom Left Block */}
        <Link href="/#about" className="block h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="h-full bg-[#141414]/80 backdrop-blur-md rounded-2xl neo-border neo-shadow p-8 flex flex-col justify-center gap-6 group hover:bg-[#1a1a1a]/90 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-mono text-[10px] text-white/60">
              01
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl uppercase text-white mb-3">DISPOSABLE FILMS</h2>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">YOUR BRAND. OUR LENS.</p>
            </div>
          </motion.div>
        </Link>

        {/* Bottom Middle Block (Yellow/Accent) */}
        <Link href="/#studios" className="block h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="h-full bg-[#141414]/80 backdrop-blur-md rounded-2xl neo-border neo-shadow p-8 flex flex-col justify-center gap-6 group hover:bg-[#1a1a1a]/90 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-mono text-[10px] text-white/60">
              02
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl uppercase text-white mb-3">DISPOSABLE STUDIOS</h2>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">RENT. SHOOT. CREATE.</p>
            </div>
          </motion.div>
        </Link>

        {/* Bottom Right Block */}
        <a href="https://techlinque.com" target="_blank" rel="noopener noreferrer" className="block h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="h-full bg-[#141414]/80 backdrop-blur-md rounded-2xl neo-border neo-shadow p-8 flex flex-col justify-center gap-6 group hover:bg-[#1a1a1a]/90 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-mono text-[10px] text-white/60">
              03
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl uppercase text-white mb-3">TECHLINQUE</h2>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">WEB DEV / SEO / GROWTH</p>
            </div>
          </motion.div>
        </a>

      </div>
    </section>
  );
}
