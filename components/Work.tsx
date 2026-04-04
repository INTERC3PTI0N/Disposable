"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/lib/projects";

export default function Work({ limit }: { limit?: number }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<string, boolean>>({});

  const filters = ["All", "Content Production", "SMM", "Studio"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter) || p.category === activeFilter);

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const toggleExpand = (title: string) => {
    setExpandedDescriptions((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section id="work" className="bg-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {!limit && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="font-condensed font-bold uppercase tracking-widest text-accent text-sm mb-2 block">
                Featured Work
              </span>
              <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-text">
                OUR <span className="text-accent">PORTFOLIO</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 font-condensed font-bold uppercase tracking-wider text-sm neo-border transition-colors ${
                    activeFilter === filter
                      ? "bg-accent text-white border-accent"
                      : "bg-bg text-text border-border hover:border-accent"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-bg2/60 backdrop-blur-md neo-border neo-shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_var(--shadow)] overflow-hidden h-full flex flex-col"
            >
              <div
                className="relative h-64 w-full border-b-[3px] border-border overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
              </div>

              <div className="p-6 flex flex-col gap-4 flex-grow">
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

                <div className="font-sans text-text/80 text-sm leading-relaxed flex-grow">
                  {project.description.length > 150 && !expandedDescriptions[project.title] ? (
                    <>
                      {project.description.slice(0, 150)}...
                      <button
                        onClick={() => toggleExpand(project.title)}
                        className="text-accent font-bold ml-1 hover:underline"
                      >
                        Read More
                      </button>
                    </>
                  ) : (
                    <>
                      {project.description}
                      {project.description.length > 150 && (
                        <button
                          onClick={() => toggleExpand(project.title)}
                          className="text-accent font-bold ml-1 hover:underline block mt-2"
                        >
                          Show Less
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-16 flex justify-center">
            <Link
              href="/work"
              className="px-8 py-4 bg-bg text-text font-condensed font-bold uppercase tracking-wider text-lg neo-border neo-shadow hover:-translate-y-1 transition-transform hover:bg-accent hover:text-white hover:border-accent"
            >
              View All Projects
            </Link>
          </div>
        )}
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
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black text-white flex items-center justify-center neo-border border-black hover:bg-accent hover:border-accent transition-colors"
              >
                ✕
              </button>

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
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {[selectedProject.image, ...selectedProject.gallery].map((_, idx) => (
                      <div key={idx} className="w-2 h-2 rounded-full bg-white/50" />
                    ))}
                  </div>
                )}
              </div>

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
                  {selectedProject.isBlog ? (
                    <Link
                      href={selectedProject.blogUrl}
                      onClick={() => setSelectedProject(null)}
                      className="inline-block px-8 py-3 bg-accent text-white font-condensed font-bold uppercase tracking-wider neo-border border-accent hover:-translate-y-1 transition-transform w-full text-center"
                    >
                      Read Article
                    </Link>
                  ) : (
                    <Link
                      href="/#contact"
                      onClick={() => setSelectedProject(null)}
                      className="inline-block px-8 py-3 bg-black text-white font-condensed font-bold uppercase tracking-wider neo-border border-black hover:-translate-y-1 transition-transform w-full text-center"
                    >
                      Start a similar project
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
