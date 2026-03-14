'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-100px", once: false });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      type: 'testimonial',
      quote: "Disposable Films completely changed how we approach content. They don't just shoot; they understand the algorithm.",
      author: "Rahul M.",
      role: "CMO, Drip Project",
      suit: "♠",
      color: "text-black",
      bg: "bg-white",
    },
    {
      type: 'testimonial',
      quote: "The studio space is incredible. Having the crew and gear ready to go saved us hours of prep time.",
      author: "Sneha K.",
      role: "Creative Director, Fastrack",
      suit: "♥",
      color: "text-red-600",
      bg: "bg-white",
    },
    {
      type: 'logo',
      bg: "bg-[#002B5B]", // Dark blue
    },
    {
      type: 'testimonial',
      quote: "Their team is a breath of fresh air. They get the brief and execute flawlessly.",
      author: "Aditi R.",
      role: "Marketing Head, Nykaa",
      suit: "♦",
      color: "text-red-600",
      bg: "bg-white",
    },
    {
      type: 'testimonial',
      quote: "We've worked with many agencies, but Disposable is the only one that truly feels like an extension of our team.",
      author: "Karan J.",
      role: "CEO, Bombay Shaving Co.",
      suit: "♣",
      color: "text-black",
      bg: "bg-white",
    },
  ];

  // Calculate rotation and translation for fan effect
  const getCardStyle = (index: number, total: number, isActive: boolean) => {
    const middle = Math.floor(total / 2);
    const offset = index - middle;
    const rotation = offset * 12; // degrees per card
    const yOffset = Math.abs(offset) * 15; // Push outer cards down slightly
    const xOffset = offset * 160; // Spread cards horizontally

    return {
      rotate: isActive ? 0 : rotation,
      y: isActive ? -40 : yOffset,
      x: xOffset,
      zIndex: isActive ? 50 : total - Math.abs(offset), // Center card on top, active card on very top
      scale: isActive ? 1.05 : 1,
    };
  };

  return (
    <section
      id="testimonials"
      className="bg-bg py-24 md:py-32 overflow-hidden relative"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight text-text">
            Testimonials
          </h2>
        </div>

        {/* Mobile scroll container */}
        <div className="w-full overflow-x-auto pb-16 pt-8 px-4 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="relative h-[450px] md:h-[500px] flex items-center justify-center min-w-[900px] md:min-w-0 mx-auto">
            {cards.map((card, i) => {
              const isActive = activeCard === i;
              const style = getCardStyle(i, cards.length, isActive);
              
              return (
                <motion.div
                  key={i}
                  onClick={() => setActiveCard(isActive ? null : i)}
                  initial={{ rotate: 0, y: 150, x: 0, opacity: 0, scale: 0.8 }}
                  animate={{
                    rotate: isInView ? style.rotate : 0,
                    y: isInView ? style.y : 150,
                    x: isInView ? style.x : 0,
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? style.scale : 0.8,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: isInView && !isActive ? i * 0.1 : 0,
                    type: "spring",
                    bounce: 0.3,
                  }}
                  className={`absolute w-[260px] md:w-[300px] h-[400px] md:h-[450px] ${card.bg} rounded-2xl border-[3px] border-black shadow-2xl p-6 flex flex-col justify-between origin-bottom cursor-pointer transition-colors duration-300 overflow-hidden`}
                  style={{ zIndex: style.zIndex }}
                >
                  {card.type === 'testimonial' ? (
                    <>
                      {/* Top Left Corner */}
                      <div className={`absolute top-4 left-4 flex flex-col items-center ${card.color}`}>
                        <span className="font-display text-2xl leading-none">A</span>
                        <span className="text-3xl leading-none">{card.suit}</span>
                      </div>

                      {/* Top Right Corner */}
                      <div className={`absolute top-4 right-4 flex flex-col items-center ${card.color}`}>
                        <span className="font-display text-2xl leading-none">A</span>
                        <span className="text-3xl leading-none">{card.suit}</span>
                      </div>

                      {/* Center Content */}
                      <div className="flex-1 flex flex-col items-center justify-center text-center mt-12 mb-12 px-2">
                        <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-6">
                           <span className="text-white font-display text-3xl">∞</span>
                        </div>
                        <p className="font-sans text-sm md:text-base text-black/90 mb-6 line-clamp-4">
                          &quot;{card.quote}&quot;
                        </p>
                        <div className="mt-auto">
                          <h4 className="font-condensed font-bold uppercase tracking-wide text-black text-base">
                            {card.author}
                          </h4>
                          <span className="font-sans text-xs text-black/60">
                            {card.role}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Left Corner (Upside Down) */}
                      <div className={`absolute bottom-4 left-4 flex flex-col items-center rotate-180 ${card.color}`}>
                        <span className="font-display text-2xl leading-none">A</span>
                        <span className="text-3xl leading-none">{card.suit}</span>
                      </div>

                      {/* Bottom Right Corner (Upside Down) */}
                      <div className={`absolute bottom-4 right-4 flex flex-col items-center rotate-180 ${card.color}`}>
                        <span className="font-display text-2xl leading-none">A</span>
                        <span className="text-3xl leading-none">{card.suit}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Pattern Background for Logo Card */}
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }} />
                      
                      {/* Inner Border */}
                      <div className="absolute inset-4 border-2 border-white/30 rounded-xl" />
                      <div className="absolute inset-6 border border-white/20 rounded-lg" />
                      
                      {/* Center Logo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl">
                          <span className="text-[#002B5B] font-display text-5xl">∞</span>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
