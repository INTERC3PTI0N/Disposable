"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CameraFrame from "@/components/CameraFrame";

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const allProjects = [
    {
      title: "Kayan X Fastrack",
      category: "Campaigns",
      image: "https://picsum.photos/seed/crocs/800/600",
      gallery: ["https://picsum.photos/seed/crocs1/800/600", "https://picsum.photos/seed/crocs2/800/600", "https://picsum.photos/seed/crocs3/800/600"],
      description: "Full campaign production for Kayan X Fastrack. We handled everything from creative direction to final execution, delivering high-energy visuals that resonate with the target audience.",
      tags: ["Strategy", "Production"],
      isBlog: false,
    },
    {
      title: "Bestseller X Rolling Loud",
      category: "Reels",
      image: "https://picsum.photos/seed/drip/800/600",
      gallery: ["https://picsum.photos/seed/drip1/800/600", "https://picsum.photos/seed/drip2/800/600"],
      description: "Fast-paced, high-octane reels capturing the essence of the Bestseller X Rolling Loud collaboration. Designed for maximum engagement on social platforms.",
      tags: ["Shoots", "Editing"],
      isBlog: false,
    },
    {
      title: "Drip Project - Launch Campaign",
      category: "UGC",
      image: "https://picsum.photos/seed/fastrack/800/600",
      gallery: [],
      description: "Read about our approach to the Drip Project launch campaign and how we leveraged user-generated content to build authentic hype.",
      tags: ["Influencer", "Content"],
      isBlog: true,
      blogUrl: "/blog/drip-project-launch",
    },
    {
      title: "Drip Project - Core Campaign",
      category: "Studio",
      image: "https://picsum.photos/seed/urban/800/600",
      gallery: ["https://picsum.photos/seed/urban1/800/600", "https://picsum.photos/seed/urban2/800/600"],
      description: "Studio photography and video production for the Drip Project core collection. Highlighting the details and craftsmanship of the pieces.",
      tags: ["Studio", "Photography"],
      isBlog: false,
    },
    {
      title: "Spotify Rap91 Aftermovie",
      category: "Campaigns",
      image: "https://picsum.photos/seed/nike/800/600",
      gallery: ["https://picsum.photos/seed/nike1/800/600", "https://picsum.photos/seed/nike2/800/600"],
      description: "An electrifying aftermovie capturing the energy and vibe of Spotify's Rap91 event. We handled creative direction and full video production.",
      tags: ["Creative Direction", "Video"],
      isBlog: false,
    },
    {
      title: "Drip Project - Men's Jewellery",
      category: "Reels",
      image: "https://picsum.photos/seed/redbull/800/600",
      gallery: ["https://picsum.photos/seed/redbull1/800/600", "https://picsum.photos/seed/redbull2/800/600"],
      description: "Dynamic social media reels showcasing the new men's jewellery line for Drip Project.",
      tags: ["Event Coverage", "Social"],
      isBlog: false,
    },
    {
      title: "Birkenstock X Lakme Fashion Week",
      category: "Campaigns",
      image: "https://picsum.photos/seed/nykaa/800/600",
      gallery: ["https://picsum.photos/seed/nykaa1/800/600", "https://picsum.photos/seed/nykaa2/800/600"],
      description: "We took an iconic global heritage brand and placed it at the center of India’s premier fashion stage. For the Lakme Fashion Week Campaign, we focused on the intersection of high-fashion styling and timeless comfort, creating a visual narrative that felt both elevated and effortless.The accompanying Aftermovie captured the kinetic energy behind the scenes and on the runway, blending high-speed transitions with candid, stylistic frames. Together, these pieces served as a comprehensive digital record of the brand's presence, ensuring the momentum of the live event translated into a lasting, high-impact social experience.",
      tags: ["Production", "Beauty"],
      isBlog: false,
    },
  ];

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
            <Link href="/" className="inline-block mb-8 font-condensed font-bold uppercase tracking-widest text-accent hover:text-white transition-colors">
              &larr; Back to Home
            </Link>
            <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tight text-text">
              ALL <span className="text-accent">PROJECTS</span>
            </h1>
            <p className="font-sans text-xl text-text/80 mt-6 max-w-2xl">
              A comprehensive look at our work across campaigns, reels, UGC, and studio production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-bg2/60 backdrop-blur-md neo-border neo-shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_var(--shadow)] overflow-hidden cursor-pointer h-full"
              >
                <div className="relative h-64 w-full border-b-[3px] border-border overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-condensed font-bold text-2xl uppercase tracking-wide text-text">
                      {project.title}
                    </h3>
                    <span className="text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                      {project.isBlog ? "↗" : "→"}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent text-white font-condensed font-bold uppercase tracking-wider text-xs neo-border border-accent">
                      {project.category}
                    </span>
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-bg text-text font-condensed font-bold uppercase tracking-wider text-xs neo-border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-bg neo-border neo-shadow-lg w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black text-white flex items-center justify-center neo-border border-black hover:bg-accent hover:border-accent transition-colors"
              >
                ✕
              </button>

              {/* Left: Gallery */}
              <div className="w-full md:w-3/5 h-[40vh] md:h-auto bg-black relative border-b-[3px] md:border-b-0 md:border-r-[3px] border-border overflow-x-auto flex snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {[selectedProject.image, ...(selectedProject.gallery || [])].map((img, idx) => (
                  <div key={idx} className="min-w-full h-full relative snap-center">
                    <Image
                      src={img}
                      alt={`${selectedProject.title} - Image ${idx + 1}`}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
                {/* Gallery Indicators */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {[selectedProject.image, ...selectedProject.gallery].map((_, idx) => (
                      <div key={idx} className="w-2 h-2 rounded-full bg-white/50" />
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Details */}
              <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto bg-bg flex flex-col gap-6">
                <div>
                  <span className="px-3 py-1 bg-accent text-white font-condensed font-bold uppercase tracking-wider text-xs neo-border border-accent mb-4 inline-block">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display text-4xl uppercase tracking-tight text-text leading-none mb-4">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag: string, j: number) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-bg2 text-text font-condensed font-bold uppercase tracking-wider text-xs neo-border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="font-sans text-text/80 text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mt-auto pt-8 flex flex-col gap-4">
                  {selectedProject.isBlog && selectedProject.blogUrl && (
                    <Link
                      href={selectedProject.blogUrl}
                      onClick={() => setSelectedProject(null)}
                      className="inline-block px-8 py-3 bg-accent text-white font-condensed font-bold uppercase tracking-wider neo-border border-accent hover:-translate-y-1 transition-transform w-full text-center"
                    >
                      Read Article
                    </Link>
                  )}
                  <Link
                    href="/#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-block px-8 py-3 bg-black text-white font-condensed font-bold uppercase tracking-wider neo-border border-black hover:-translate-y-1 transition-transform w-full text-center"
                  >
                    Start a similar project
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
