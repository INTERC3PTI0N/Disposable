"use client";

import Link from "next/link";

export default function Services() {
  const services = [
    {
      num: "01",
      icon: "🧠",
      title: "Strategy & Campaigns",
      desc: [
        "We map out the digital landscape to ensure your brand isn't just present, but dominant.",
        "Every campaign is backed by data-driven trend analysis and a roadmap designed for long-term growth."
      ],
      tags: ["Trend Planning", "Content Maps", "Creative Direction"],
      featured: true,
    },
    {
      num: "02",
      icon: "📱",
      title: "Reels & Content Shoots",
      desc: [
        "Whether it’s high-octane mobile content or polished cinematic production, we deliver visuals that stop the scroll.",
        "We handle the entire lifecycle of a shoot, from the initial capture to the final high-energy cut."
      ],
      tags: ["Reels", "Pro Shoots", "Editing"],
      featured: false,
    },
    {
      num: "03",
      icon: "🤝",
      title: "Influencer & UGC",
      desc: [
        "We bridge the gap between brands and creators to build authentic trust with your target audience.",
        "Our team manages the entire pipeline, finding the right faces and writing the scripts that feel real."
      ],
      tags: ["Casting", "Scripting", "Collabs"],
      featured: false,
    },
    {
      num: "04",
      icon: "🎬",
      title: "Studio Production",
      desc: [
        "Our in-house studio is built for high-speed, high-quality output with maximum flexibility for any scale of production.",
        "You can simply rent the space for your own vision or bring in our expert crew to manage the floor."
      ],
      tags: ["Studio Rental", "Full Crew", "Flexible Booking"],
      featured: false,
    },
    {
      num: "05",
      icon: "💻",
      title: "Web & App Dev",
      desc: [
        "We build high-performance digital storefronts and platforms that act as the permanent, scalable home for your brand.",
        "Our development team ensures the user experience is as seamless and engaging as your content."
      ],
      tags: ["Web Design", "App Dev", "UI/UX"],
      featured: false,
      isLink: true,
    },
    {
      num: "06",
      icon: "💻",
      title: "Ready To Move The Needle?",
      desc: [
        "Whether you have a fully formed brief or just the spark of an idea, we’re ready to help you scale.",
        "Let’s turn your brand’s vision into content that actually works and moves people online."
      ],
      tags: [],
      featured: false,
      isLink: false,
      cta: "Let's Talk",
      ctaLink: "#contact"
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
                <div className="text-4xl">{service.icon}</div>

                <div className="flex-1 z-10 flex flex-col gap-3">
                  <h3 className="font-condensed font-bold text-2xl uppercase tracking-wide mb-2">
                    {service.title}
                  </h3>
                  {Array.isArray(service.desc) ? (
                    service.desc.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className={`font-sans text-lg ${service.featured ? "text-white/90" : "text-text/80"}`}
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p
                      className={`font-sans text-lg ${service.featured ? "text-white/90" : "text-text/80"}`}
                    >
                      {service.desc}
                    </p>
                  )}
                </div>

                {service.cta && service.ctaLink && (
                  <div className="mt-4 z-10">
                    <Link
                      href={service.ctaLink}
                      className="inline-block px-6 py-2 bg-accent text-white font-condensed font-bold uppercase tracking-wider neo-border neo-shadow-sm hover:-translate-y-1 transition-transform"
                    >
                      {service.cta}
                    </Link>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 z-10 mt-auto pt-4">
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
          <div className="md:col-span-2 lg:col-span-3 flex justify-center mt-8">
            <div className="relative w-full max-w-2xl p-8 flex flex-col justify-center items-center gap-6 neo-border neo-shadow bg-bg3/60 backdrop-blur-md text-text text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_var(--shadow)]">
              <h3 className="font-condensed font-bold text-3xl uppercase tracking-wide">
                Need something else?
              </h3>
              <Link
                href="#contact"
                className="px-8 py-3 bg-accent text-white font-condensed font-bold uppercase tracking-wider neo-border neo-shadow hover:-translate-y-1 transition-transform"
              >
                Shoot A Message &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
