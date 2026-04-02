"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CameraFrame from "@/components/CameraFrame";

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-bg text-text selection:bg-accent selection:text-white overflow-hidden">
      <CameraFrame />
      
      {/* Background Blobs for Glassmorphism effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-text/5 blur-[100px]" />
      </div>

      <div className="relative z-10 p-2 pt-12 md:p-16">
        <Navbar />
        
        <article className="max-w-4xl mx-auto px-4 md:px-8 py-24">
          <div className="mb-12">
            <Link href="/work" className="inline-block mb-8 font-condensed font-bold uppercase tracking-widest text-accent hover:text-white transition-colors">
              &larr; Back to Work
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-accent text-white font-condensed font-bold uppercase tracking-wider text-xs neo-border border-accent">
                UGC
              </span>
              <span className="px-3 py-1 bg-bg2 text-text font-condensed font-bold uppercase tracking-wider text-xs neo-border border-border/50">
                Influencer
              </span>
              <span className="px-3 py-1 bg-bg2 text-text font-condensed font-bold uppercase tracking-wider text-xs neo-border border-border/50">
                Content
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tight text-text leading-none mb-6">
              DRIP PROJECT - <span className="text-accent">LAUNCH CAMPAIGN</span>
            </h1>
            
            <div className="flex items-center gap-4 text-text/60 font-condensed uppercase tracking-wider text-sm">
              <span>Published: Oct 12, 2023</span>
              <span>•</span>
              <span>5 Min Read</span>
            </div>
          </div>

          <div className="relative w-full h-[50vh] md:h-[70vh] mb-16 neo-border neo-shadow overflow-hidden">
            <Image
              src="https://picsum.photos/seed/fastrack/1200/800"
              alt="Drip Project Launch Hero"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none font-sans text-text/80">
            <p className="lead text-2xl font-condensed text-white mb-8">
              When Drip Project approached us for their launch campaign, they didn&apos;t just want another standard photoshoot. They wanted a cultural moment. Here&apos;s how we leveraged User-Generated Content (UGC) and strategic influencer partnerships to build authentic hype from the ground up.
            </p>

            <h2 className="font-display text-3xl uppercase text-white mt-12 mb-6">The Challenge</h2>
            <p className="mb-6">
              The streetwear and accessories market is saturated. Breaking through the noise requires more than just high-quality products; it requires a community. Our challenge was to launch Drip Project not just as a brand, but as a lifestyle that the target demographic actively wanted to participate in.
            </p>

            <h2 className="font-display text-3xl uppercase text-white mt-12 mb-6">Our Approach: Community First</h2>
            <p className="mb-6">
              Instead of a top-down advertising approach, we went bottom-up. We seeded the initial collection to a carefully curated list of 50 micro-influencers and cultural tastemakers across different cities. The brief was simple: &quot;Style it your way. Shoot it on your phone.&quot;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="relative h-80 neo-border neo-shadow overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/dripblog1/600/800"
                  alt="UGC Example 1"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative h-80 neo-border neo-shadow overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/dripblog2/600/800"
                  alt="UGC Example 2"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <h2 className="font-display text-3xl uppercase text-white mt-12 mb-6">The Execution</h2>
            <p className="mb-6">
              We compiled the raw, unfiltered UGC into a high-energy, fast-paced launch video. We added our signature neo-brutalist graphics, kinetic typography, and a custom-produced soundtrack that matched the energy of the streets. 
            </p>
            <p className="mb-6">
              By putting the community at the forefront of the campaign, we created an immediate sense of FOMO (Fear Of Missing Out). The audience wasn&apos;t just looking at models; they were looking at people they related to, wearing a brand they suddenly needed to have.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-2 my-12 bg-bg2/30 italic">
              &quot;Disposable Studios didn&apos;t just shoot a campaign; they engineered a movement. The UGC approach gave us a level of authenticity that traditional production simply couldn&apos;t achieve.&quot; 
              <footer className="mt-2 text-sm font-condensed uppercase not-italic text-accent">— Founder, Drip Project</footer>
            </blockquote>

            <h2 className="font-display text-3xl uppercase text-white mt-12 mb-6">The Results</h2>
            <ul className="list-disc pl-6 mb-12 space-y-2">
              <li><strong>300%</strong> increase in organic social media mentions within the first week.</li>
              <li><strong>Sold out</strong> initial inventory in 48 hours.</li>
              <li>Established a robust library of authentic UGC for ongoing marketing efforts.</li>
            </ul>

            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <h3 className="font-display text-2xl uppercase text-white">Ready to create your own cultural moment?</h3>
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-accent text-white font-condensed font-bold uppercase tracking-wider neo-border border-accent hover:-translate-y-1 transition-transform text-center whitespace-nowrap"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}
