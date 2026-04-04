"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CameraFrame from "@/components/CameraFrame";
import Work from "@/components/Work";

export default function WorkPage() {
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
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
          <div className="mb-16">
            <Link href="/#home" className="inline-block mb-8 font-condensed font-bold uppercase tracking-widest text-accent hover:text-white transition-colors">
              &larr; Back to Home
            </Link>
            <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tight text-text">
              ALL <span className="text-accent">PROJECTS</span>
            </h1>
            <p className="font-sans text-xl text-text/80 mt-6 max-w-2xl">
              A comprehensive look at our work across campaigns, reels, UGC, and studio production.
            </p>
          </div>

          <Work hideHeader={true} />
        </div>

        <Footer />
      </div>
    </main>
  );
}
