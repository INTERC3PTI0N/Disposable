"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Campaigns", "Reels", "UGC", "Studio"];

  const projects = [
    {
      title: "Crocs Summer Drop",
      category: "Campaigns",
      image: "https://picsum.photos/seed/crocs/800/600",
      tags: ["Strategy", "Production"],
    },
    {
      title: "Drip Project Launch",
      category: "Reels",
      image: "https://picsum.photos/seed/drip/800/600",
      tags: ["Shoots", "Editing"],
    },
    {
      title: "Fastrack Smart",
      category: "UGC",
      image: "https://picsum.photos/seed/fastrack/800/600",
      tags: ["Influencer", "Content"],
    },
    {
      title: "Urban Monkey X",
      category: "Studio",
      image: "https://picsum.photos/seed/urban/800/600",
      tags: ["Studio", "Photography"],
    },
    {
      title: "Nike Running",
      category: "Campaigns",
      image: "https://picsum.photos/seed/nike/800/600",
      tags: ["Creative Direction", "Video"],
    },
    {
      title: "Red Bull Dance",
      category: "Reels",
      image: "https://picsum.photos/seed/redbull/800/600",
      tags: ["Event Coverage", "Social"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="bg-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-bg2/60 backdrop-blur-md neo-border neo-shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_var(--shadow)] overflow-hidden"
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
                    &rarr;
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

        <div className="mt-16 flex justify-center">
          <Link
            href="#"
            className="px-8 py-4 bg-bg text-text font-condensed font-bold uppercase tracking-wider text-lg neo-border neo-shadow hover:-translate-y-1 transition-transform hover:bg-accent hover:text-white hover:border-accent"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
