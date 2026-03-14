"use client";

import Link from "next/link";

export default function Hero() {
  const tickerItems = [
    "Strategy & Campaigns",
    "Reels & Content Shoots",
    "Influencer & UGC",
    "Studio Production",
    "Web & App Dev",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-16 flex flex-col bg-bg overflow-hidden"
    >
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 md:p-8 lg:p-16 items-center pb-24">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 z-10 w-full max-w-2xl">
          <div className="inline-flex px-4 py-1 bg-accent text-white font-condensed font-bold uppercase tracking-wider text-sm neo-border neo-shadow-sm">
            Mumbai&apos;s Content-First Creative House
          </div>

          <h1 className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.85] tracking-tight uppercase text-text">
            YOUR <br />
            <span className="text-accent">BRAND.</span> <br />
            YOUR STORY.
          </h1>

          <div className="pl-4 border-l-[6px] border-accent">
            <p className="font-condensed font-bold text-xl md:text-2xl uppercase tracking-wide text-text/80">
              Strategy. Shoots. Studio Space &mdash; All Under One Roof.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 w-full">
            <Link
              href="#work"
              className="px-8 py-3 bg-accent text-white font-condensed font-bold uppercase tracking-wider neo-border neo-shadow hover:-translate-y-1 transition-transform"
            >
              See Our Work &rarr;
            </Link>
            <Link
              href="#studios"
              className="px-8 py-3 bg-bg text-text font-condensed font-bold uppercase tracking-wider neo-border neo-shadow hover:-translate-y-1 transition-transform"
            >
              Book Studio
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 bg-bg text-text font-condensed font-bold uppercase tracking-wider neo-border neo-shadow hover:-translate-y-1 transition-transform"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hidden lg:flex justify-center items-center relative h-full min-h-[500px] w-full">
          <div className="absolute inset-0 bg-accent neo-border neo-shadow-lg flex items-center justify-center overflow-hidden w-full max-w-lg mx-auto aspect-square">
            <span className="font-display text-[12rem] text-black/10 leading-none select-none whitespace-nowrap rotate-[-10deg]">
              DISPOSABLE FILMS
            </span>
          </div>

          {/* Stat Cards Overlay */}
          <div className="absolute bottom-8 left-8 grid grid-cols-2 gap-4 z-20">
            <div className="bg-bg p-4 neo-border neo-shadow-sm flex flex-col justify-center items-center min-w-[120px]">
              <span className="font-display text-4xl text-accent">100+</span>
              <span className="font-condensed font-bold uppercase text-xs tracking-wider">
                Campaigns
              </span>
            </div>
            <div className="bg-bg p-4 neo-border neo-shadow-sm flex flex-col justify-center items-center min-w-[120px]">
              <span className="font-display text-4xl text-accent">50M+</span>
              <span className="font-condensed font-bold uppercase text-xs tracking-wider">
                Impressions
              </span>
            </div>
            <div className="bg-bg p-4 neo-border neo-shadow-sm flex flex-col justify-center items-center min-w-[120px]">
              <span className="font-display text-4xl text-accent">3+</span>
              <span className="font-condensed font-bold uppercase text-xs tracking-wider">
                Years
              </span>
            </div>
            <div className="bg-bg p-4 neo-border neo-shadow-sm flex flex-col justify-center items-center min-w-[120px]">
              <span className="font-display text-4xl text-accent">1</span>
              <span className="font-condensed font-bold uppercase text-xs tracking-wider">
                Studio HQ
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="w-full bg-accent border-t-[3px] border-border overflow-hidden py-3 absolute bottom-0 z-30">
        <div className="flex whitespace-nowrap w-max animate-ticker">
          {/* First set */}
          <div className="flex items-center gap-4 px-4">
            {tickerItems.map((item, i) => (
              <div key={`ticker-1-${i}`} className="flex items-center gap-4">
                <span className="font-condensed font-bold uppercase tracking-widest text-white text-lg">
                  {item}
                </span>
                <span className="text-white">✦</span>
              </div>
            ))}
          </div>
          {/* Second set for seamless loop */}
          <div className="flex items-center gap-4 px-4">
            {tickerItems.map((item, i) => (
              <div key={`ticker-2-${i}`} className="flex items-center gap-4">
                <span className="font-condensed font-bold uppercase tracking-widest text-white text-lg">
                  {item}
                </span>
                <span className="text-white">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
