'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import DisposableLogo from '../public/logos/DisposableLogo.png';

type Phase = 'loading' | 'reveal' | 'done';

const ORBIT_COUNT = 8;
const ORBIT_R = 155; // px from center to tile center
const TILE_W = 68;
const TILE_H = 46;
const ORBIT_S = 7; // seconds per revolution

const IMGS = [
  "https://picsum.photos/seed/cin1/800/600",
  "https://picsum.photos/seed/cin2/800/600",
  "https://picsum.photos/seed/cin3/800/600",
  "https://picsum.photos/seed/cin4/800/600",
  "https://picsum.photos/seed/cin5/800/600",
  "https://picsum.photos/seed/cin6/800/600",
  "https://picsum.photos/seed/cin7/800/600",
  "https://picsum.photos/seed/cin8/800/600",
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>('loading');
  const [loadFrame, setLoadFrame] = useState(0);
  const [showFlare, setShowFlare] = useState(false);
  const [scanLine, setScanLine] = useState(0);
  const [tileFrames, setTileFrames] = useState<number[]>(() =>
    Array.from({ length: ORBIT_COUNT }, (_, i) => i % IMGS.length)
  );

  const grainRef = useRef<HTMLCanvasElement>(null);
  const grainRaf = useRef<number>(0);

  // Grain
  useEffect(() => {
    const c = grainRef.current; if (!c) return;
    const ctx = c.getContext('2d')!;
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize(); window.addEventListener('resize', resize);
    const draw = () => {
      const d = ctx.createImageData(c.width, c.height);
      for (let i = 0; i < d.data.length; i += 4) {
        const v = Math.random() * 255;
        d.data[i] = v; d.data[i+1] = v; d.data[i+2] = v; d.data[i+3] = 20;
      }
      ctx.putImageData(d, 0, 0);
      grainRaf.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(grainRaf.current); window.removeEventListener('resize', resize); };
  }, []);

  // Scan line
  useEffect(() => {
    const id = setInterval(() => setScanLine(p => (p + 2) % 100), 16);
    return () => clearInterval(id);
  }, []);

  // Progress
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const steps = 2800 / 40; let step = 0;
    const timer = setInterval(() => {
      step++;
      const t = step / steps;
      const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const stall = (step > steps * 0.58 && step < steps * 0.72) ? 0.62 : 1;
      setProgress(Math.min(Math.round(e * 100 * stall), 100));
      if (step >= steps) { clearInterval(timer); setPhase('reveal'); }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  // Loading frame cycle
  useEffect(() => {
    if (phase !== 'loading') return;
    const id = setInterval(() => setLoadFrame(p => (p + 1) % IMGS.length), 250);
    return () => clearInterval(id);
  }, [phase]);

  // Orbit tile cycles — each tile at slightly different speed
  useEffect(() => {
    if (phase !== 'reveal') return;
    const ids = Array.from({ length: ORBIT_COUNT }, (_, i) =>
      setInterval(() => {
        setTileFrames(prev => {
          const n = [...prev]; n[i] = (n[i] + 1) % IMGS.length; return n;
        });
      }, 130 + i * 15)
    );
    return () => ids.forEach(clearInterval);
  }, [phase]);

  // Auto-complete
  useEffect(() => {
    if (phase !== 'reveal') return;
    const t = setTimeout(() => {
      setPhase('done'); onComplete(); document.body.style.overflow = 'unset';
    }, 3400);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  // Lens flare
  useEffect(() => {
    const id = setInterval(() => { setShowFlare(true); setTimeout(() => setShowFlare(false), 180); }, 3400);
    return () => clearInterval(id);
  }, []);

  const fmt = (n: number) => String(n).padStart(3, '0');

  if (phase === 'done') return null;

  // Each tile: wrapper div rotates by baseAngle + spinning, inner div counter-rotates
  // We achieve this with two nested elements and a CSS animation on each.
  // The wrapper sits at center, transforms to orbit position.
  // We use animationDelay to offset each tile around the circle.

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden" style={{ background: '#050505' }}>
      <style>{`
        @keyframes orbitRotate {
          to { transform: rotate(360deg); }
        }
        @keyframes counterRotate {
          to { transform: rotate(-360deg); }
        }
        .orbit-arm {
          position: absolute;
          top: 50%; left: 50%;
          width: 0; height: 0;
          animation: orbitRotate ${ORBIT_S}s linear infinite;
          transform-origin: 0 0;
        }
        .orbit-tile {
          position: absolute;
          width: ${TILE_W}px;
          height: ${TILE_H}px;
          top: ${-ORBIT_R - TILE_H / 2}px;
          left: ${-TILE_W / 2}px;
          animation: counterRotate ${ORBIT_S}s linear infinite;
          transform-origin: ${TILE_W / 2}px ${ORBIT_R + TILE_H / 2}px;
        }
      `}</style>

      {/* Grain */}
      <canvas ref={grainRef} className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ opacity: 0.85, zIndex: 1 }} />

      {/* Scan line */}
      {phase === 'loading' && (
        <div className="absolute left-0 right-0 pointer-events-none" style={{
          top: `${scanLine}%`, height: 2, zIndex: 2,
          background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.03) 50%,transparent)',
        }} />
      )}

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center,transparent 40%,rgba(0,0,0,0.88) 100%)', zIndex: 3 }} />

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 z-10" style={{ height: '10vh', background: '#000' }} />
      <div className="absolute bottom-0 left-0 right-0 z-10" style={{ height: '10vh', background: '#000' }} />

      {/* Lens flare */}
      <AnimatePresence>
        {showFlare && phase === 'loading' && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0.2 }} animate={{ opacity: 1, scaleX: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute left-0 right-0 pointer-events-none"
            style={{ top: '50%', height: 1, zIndex: 5, filter: 'blur(0.5px)', transform: 'translateY(-50%)',
              background: 'linear-gradient(90deg,transparent 0%,rgba(180,160,100,0.6) 20%,rgba(255,240,180,0.9) 50%,rgba(180,160,100,0.6) 80%,transparent 100%)' }}
          />
        )}
      </AnimatePresence>

      {/* ── LOADING ── */}
      <AnimatePresence>
        {phase === 'loading' && (
          <motion.div
            key="loading"
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ zIndex: 6 }}
          >
            <div className="relative" style={{ width: 'min(480px, 80vw)', aspectRatio: '16/10' }}>
              {/* Sprockets */}
              {([-1, 1] as const).map(side => (
                <div key={side} className="absolute top-0 bottom-0 flex flex-col justify-around"
                  style={{ [side === -1 ? 'left' : 'right']: '-2rem', pointerEvents: 'none' }}>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} style={{ width: 16, height: 12, borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.8)' }} />
                  ))}
                </div>
              ))}

              <div className="absolute inset-0 overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <AnimatePresence mode="wait">
                  <motion.img key={loadFrame} src={IMGS[loadFrame]} className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(0.7) contrast(1.1) brightness(0.65) sepia(0.15)' }}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.05 }} alt="" />
                </AnimatePresence>
                <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(90deg,transparent,transparent 48px,rgba(255,255,255,0.015) 48px,rgba(255,255,255,0.015) 49px)' }} />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center,transparent 50%,rgba(0,0,0,0.6) 100%)' }} />
                <div className="absolute top-2 right-3 font-mono text-[10px] select-none" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em' }}>
                  {fmt(loadFrame + 1)}/{String(IMGS.length).padStart(2, '0')}
                </div>
              </div>

              <motion.div className="absolute inset-0 bg-white pointer-events-none"
                initial={{ opacity: 0.55 }} animate={{ opacity: 0 }} transition={{ duration: 0.85, ease: 'easeOut' }} />
            </div>

            {/* HUD */}
            <div className="mt-6" style={{ width: 'min(480px, 80vw)' }}>
              <div className="relative w-full" style={{ height: 1, background: 'rgba(255,255,255,0.08)' }}>
                <motion.div className="absolute top-0 left-0 h-px"
                  style={{ width: `${progress}%`, background: 'linear-gradient(90deg,rgba(200,180,120,0.5),rgba(255,240,180,0.9))', boxShadow: '0 0 8px rgba(255,240,180,0.3)' }}
                  transition={{ duration: 0.12 }} />
                <motion.div className="absolute top-0 h-1 w-1 rounded-full"
                  style={{ left: `${progress}%`, background: 'rgba(255,240,180,0.95)', boxShadow: '0 0 6px rgba(255,240,180,0.8)', transform: 'translateX(-50%) translateY(-1px)' }}
                  transition={{ duration: 0.12 }} />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: 'rgba(255,240,180,0.35)' }}>LOADING</span>
                <span className="font-mono text-[10px] tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>{fmt(progress)}%</span>
                <span className="font-mono text-[10px] tracking-[0.3em]" style={{ color: 'rgba(255,240,180,0.35)' }}>◌</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── REVEAL ── */}
      <AnimatePresence>
        {phase === 'reveal' && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 6 }}
          >
            {/* Orbit container */}
            <motion.div
              className="relative"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                width: (ORBIT_R + TILE_W) * 2 + 8,
                height: (ORBIT_R + TILE_H) * 2 + 8,
              }}
            >
              {/* Faint orbit guide ring */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  width: ORBIT_R * 2, height: ORBIT_R * 2,
                  marginLeft: -ORBIT_R, marginTop: -ORBIT_R,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              />

              {/* Film tile orbit arms — one per tile */}
              {Array.from({ length: ORBIT_COUNT }).map((_, i) => {
                const baseAngle = (i / ORBIT_COUNT) * 360;
                const entryDelay = 0.04 + i * 0.055;
                // animationDelay offsets each arm so they're evenly spaced from the start
                const orbitDelay = `-${(i / ORBIT_COUNT) * ORBIT_S}s`;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: entryDelay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    // Wrapper sits at center (0,0 of the orbit container center)
                    className="orbit-arm"
                    style={{
                      animationDelay: orbitDelay,
                      // Initial rotation offset so tiles are evenly spread
                      // We bake the base angle into the animation start via transform
                      // by using a unique keyframe approach: set initial rotation with style
                      // The orbit-arm keyframe goes 0->360, so we offset with delay.
                      // But we also need the arm to START at baseAngle visually.
                      // Solution: wrap in another div that applies a static rotation.
                    }}
                  >
                    {/* Static rotation wrapper — positions each arm's starting angle */}
                    <div style={{ position: 'absolute', top: 0, left: 0, transform: `rotate(${baseAngle}deg)`, width: 0, height: 0 }}>
                      <div
                        className="orbit-tile"
                        style={{ animationDelay: orbitDelay }}
                      >
                        {/* Film tile content */}
                        <div style={{
                          width: '100%', height: '100%',
                          border: '1px solid rgba(255,255,255,0.2)',
                          overflow: 'hidden', position: 'relative',
                          background: '#0a0a0a',
                          boxShadow: '0 2px 12px rgba(0,0,0,0.6)',
                        }}>
                          <img
                            src={IMGS[tileFrames[i]]}
                            alt=""
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                              filter: 'grayscale(0.65) contrast(1.1) brightness(0.6) sepia(0.12)' }}
                          />
                          {/* Sprocket holes top */}
                          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '2px 6px' }}>
                            {[0,1,2].map(h => <div key={h} style={{ width: 6, height: 4, borderRadius: 1, border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(0,0,0,0.75)' }} />)}
                          </div>
                          {/* Sprocket holes bottom */}
                          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '2px 6px' }}>
                            {[0,1,2].map(h => <div key={h} style={{ width: 6, height: 4, borderRadius: 1, border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(0,0,0,0.75)' }} />)}
                          </div>
                          {/* Inner vignette */}
                          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center,transparent 35%,rgba(0,0,0,0.5) 100%)' }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Center: logo + wordmark */}
              <motion.div
                style={{ position: 'absolute', top: '45%', left: '20%', transform: 'translate(-50%,-50%)', zIndex: 10 }}
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Glow blob */}
                <div style={{
                  position: 'absolute', width: 260, height: 160, borderRadius: '50%',
                  background: 'radial-gradient(ellipse at center,rgba(255,175,55,0.13) 0%,transparent 70%)',
                  top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none',
                }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  {/* Logo */}
                  <motion.div
                    initial={{ filter: 'blur(10px) brightness(3)', scale: 0.4 }}
                    animate={{ filter: 'blur(0px) brightness(1)', scale: 1 }}
                    transition={{ delay: 0.35, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: 70, height: 70, flexShrink: 0 }}
                  >
                    <Image src={DisposableLogo} alt="Disposable Films" width={70} height={70}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </motion.div>

                  {/* Divider */}
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    style={{ width: 1, height: 46, flexShrink: 0, transformOrigin: 'center',
                      background: 'linear-gradient(180deg,transparent,rgba(255,200,100,0.4),transparent)' }}
                  />

                  {/* Wordmark */}
                  <motion.div
                    initial={{ x: 14, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.72, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <span style={{ fontFamily: "var(--font-glitch)", fontSize: 'clamp(14px,2.2vw,22px)', fontWeight: 400, letterSpacing: '0.1em', color: 'var(--accent)', lineHeight: 1, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                      DISPOSABLE
                    </span>
                    <span style={{ fontFamily: "var(--font-glitch)", fontSize: 'clamp(14px,2.2vw,22px)', fontWeight: 400, fontStyle: 'italic', letterSpacing: '0.22em', color: 'var(--text)', lineHeight: 1.2, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                      FILMS
                    </span>
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: 1.05, duration: 0.4 }}
                      style={{ height: 1, marginTop: 6, transformOrigin: 'left', background: 'linear-gradient(90deg,rgba(255,210,100,0.45),transparent)' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Fade to black */}
            <motion.div
              className="absolute inset-0 bg-black pointer-events-none"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.7, ease: 'easeIn' }}
              style={{ zIndex: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}