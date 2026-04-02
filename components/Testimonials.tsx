'use client';

import { useRef } from 'react';

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      type: 'testimonial',
      quote: "Disposable Films completely changed how we approach content. They don't just shoot; they understand the algorithm.",
      author: "Rahul M.",
      role: "CMO, Drip Project",
    },
    {
      type: 'testimonial',
      quote: "The studio space is incredible. Having the crew and gear ready to go saved us hours of prep time.",
      author: "Sneha K.",
      role: "Creative Director, Fastrack",
    },
    {
      type: 'testimonial',
      quote: "Their team is a breath of fresh air. They get the brief and execute flawlessly.",
      author: "Aditi R.",
      role: "Marketing Head, Nykaa",
    },
    {
      type: 'testimonial',
      quote: "We've worked with many agencies, but Disposable is the only one that truly feels like an extension of our team.",
      author: "Karan J.",
      role: "CEO, Bombay Shaving Co.",
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="bg-bg py-24 md:py-32 border-t-[3px] border-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-condensed font-bold uppercase tracking-widest text-accent text-sm mb-2 block">
              Client Love
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight text-text">
              TESTIMONIALS
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 flex items-center justify-center bg-bg2 text-text neo-border neo-shadow-sm hover:-translate-y-1 hover:bg-accent hover:text-white hover:border-accent transition-all"
            >
              &larr;
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 flex items-center justify-center bg-bg2 text-text neo-border neo-shadow-sm hover:-translate-y-1 hover:bg-accent hover:text-white hover:border-accent transition-all"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="min-w-[85vw] md:min-w-[400px] flex-shrink-0 snap-center bg-bg2/60 backdrop-blur-md neo-border neo-shadow p-8 md:p-10 flex flex-col justify-between"
            >
              <div className="text-6xl text-accent mb-6 font-display leading-none">
                &quot;
              </div>
              <p className="font-sans text-lg md:text-xl text-text/90 mb-10 leading-relaxed">
                {card.quote}
              </p>
              <div className="mt-auto border-t-[3px] border-border/30 pt-6">
                <h4 className="font-condensed font-bold uppercase tracking-wide text-text text-xl">
                  {card.author}
                </h4>
                <span className="font-sans text-sm text-accent font-bold">
                  {card.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
