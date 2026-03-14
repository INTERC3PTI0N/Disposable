"use client";

import Link from "next/link";

export default function Services() {
  const services = [
    {
      num: "01",
      icon: "🧠",
      title: "Strategy & Campaigns",
      desc: "Trend planning, content maps, creative direction.",
      tags: ["Trend Planning", "Content Maps", "Creative Direction"],
      featured: true,
    },
    {
      num: "02",
      icon: "📱",
      title: "Reels & Content Shoots",
      desc: "Phone to pro-level visuals.",
      tags: ["Reels", "Pro Shoots", "Editing"],
      featured: false,
    },
    {
      num: "03",
      icon: "🤝",
      title: "Influencer & UGC",
      desc: "Casting, scripting, collabs.",
      tags: ["Casting", "Scripting", "Collabs"],
      featured: false,
    },
    {
      num: "04",
      icon: "🎬",
      title: "Studio Production",
      desc: "Rent our space or shoot with our crew.",
      tags: ["Studio Rental", "Full Crew", "Flexible Booking"],
      featured: false,
    },
    {
      num: "05",
      icon: "💻",
      title: "Web & App Dev",
      desc: "Digital homes for brands.",
      tags: ["Web Design", "App Dev", "UI/UX"],
      featured: false,
      isLink: true,
    },
  ];

  return (
    <section id="services" className="bg-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <span className="font-condensed font-bold uppercase tracking-widest text-accent text-sm mb-2 block">
            What We Do Best
          </span>
          <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-text">
            OUR <span className="text-accent">SERVICES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const content = (
              <div
                className={`relative h-full p-8 flex flex-col gap-6 neo-border neo-shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_var(--shadow)] backdrop-blur-md ${service.featured ? "bg-accent/90 text-white border-black" : "bg-bg/60 text-text"}`}
              >
                <span className="absolute top-4 right-4 font-display text-8xl opacity-10 leading-none select-none">
                  {service.num}
                </span>

                <div className="text-4xl">{service.icon}</div>

                <div className="flex-1 z-10">
                  <h3 className="font-condensed font-bold text-2xl uppercase tracking-wide mb-2">
                    {service.title}
                  </h3>
                  <p
                    className={`font-sans text-lg ${service.featured ? "text-white/90" : "text-text/80"}`}
                  >
                    {service.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 z-10 mt-auto">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1 text-xs font-condensed font-bold uppercase tracking-wider neo-border ${service.featured ? "bg-black/20 border-black/30" : "bg-bg2 border-border/20"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-6 right-6 text-2xl font-bold opacity-50">
                  {service.isLink ? "↗" : "→"}
                </div>
              </div>
            );

            if (service.isLink) {
              return (
                <Link key={i} href="#" className="block h-full">
                  {content}
                </Link>
              );
            }

            return (
              <div key={i} className="h-full">
                {content}
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="h-full">
            <div className="relative h-full p-8 flex flex-col justify-center items-center gap-6 neo-border neo-shadow bg-bg3/60 backdrop-blur-md text-text text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_var(--shadow)]">
              <h3 className="font-condensed font-bold text-3xl uppercase tracking-wide">
                Need something else?
              </h3>
              <Link
                href="#contact"
                className="px-8 py-3 bg-accent text-white font-condensed font-bold uppercase tracking-wider neo-border neo-shadow hover:-translate-y-1 transition-transform"
              >
                Let&apos;s Talk &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
