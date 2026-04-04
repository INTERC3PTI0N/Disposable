'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Brands() {
  const brands = [
    { name: 'KFC', logo: 'https://picsum.photos/seed/kfc/200/100' },
    { name: 'Lodha', logo: 'https://picsum.photos/seed/lodha/200/100' },
    { name: 'Shadowfax', logo: 'https://picsum.photos/seed/shadowfax/200/100' },
    { name: 'Saatchi', logo: 'https://picsum.photos/seed/saatchi/200/100' },
    { name: 'D.Y. Patil', logo: 'https://picsum.photos/seed/dypatil/200/100' },
    { name: 'Mumbai Indians', logo: 'https://picsum.photos/seed/mumbaiindians/200/100' },
    { name: 'Salus', logo: 'https://picsum.photos/seed/salus/200/100' },
    { name: 'Sarvatra', logo: 'https://picsum.photos/seed/sarvatra/200/100' },
    { name: 'MuSo', logo: 'https://picsum.photos/seed/muso/200/100' },
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-16 md:py-24 bg-bg border-y-[3px] border-accent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center">
        <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-text">
          Brands That Believe In Us
        </h2>
      </div>

      <div className="relative w-full flex flex-col gap-12 overflow-hidden">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Moves Left */}
        <Link href="/#work" className="block group">
          <div
            className="flex items-center gap-12 md:gap-24 whitespace-nowrap w-max animate-ticker"
          >
            {duplicatedBrands.map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 md:w-48 h-16 relative flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </Link>

        {/* Row 2 - Moves Right */}
        <Link href="/#work" className="block group">
          <div
            className="flex items-center gap-12 md:gap-24 whitespace-nowrap w-max animate-ticker-reverse"
          >
            {duplicatedBrands.map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 md:w-48 h-16 relative flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
}
