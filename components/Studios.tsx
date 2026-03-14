import Link from "next/link";

export default function Studios() {
  const features = [
    {
      icon: "🎯",
      title: "Modular Shooting Zones",
      desc: "Adaptable spaces for any creative vision.",
    },
    {
      icon: "💡",
      title: "Pro Lighting & Gear",
      desc: "Industry-standard equipment available on-site.",
    },
    {
      icon: "📅",
      title: "Flexible Slots & Booking",
      desc: "Rent by the hour, half-day, or full-day.",
    },
    {
      icon: "🎥",
      title: "Optional Full Crew",
      desc: "Need hands? We can provide the team.",
    },
    {
      icon: "⚡",
      title: "Fast Turnarounds",
      desc: "Shoot, edit, and deliver at speed.",
    },
  ];

  return (
    <section
      id="studios"
      className="bg-bg2 border-y-[3px] border-accent py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="mb-4">
            <span className="font-condensed font-bold uppercase tracking-widest text-accent text-sm mb-2 block">
              Our Space
            </span>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-text">
              DISPOSABLE <span className="text-accent">STUDIOS</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-bg/60 backdrop-blur-md p-6 neo-border neo-shadow-sm flex gap-6 items-center transition-transform hover:-translate-y-1"
              >
                <span className="text-4xl">{feature.icon}</span>
                <div>
                  <h3 className="font-condensed font-bold uppercase tracking-wide text-xl text-text mb-1">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-text/80 text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-accent/90 backdrop-blur-md p-8 md:p-12 neo-border neo-shadow-lg flex flex-col gap-8 relative border-black">
          <h3 className="font-display text-5xl uppercase tracking-tight text-white leading-none">
            WELCOME TO <br />
            DISPOSABLE STUDIOS
          </h3>

          <p className="font-condensed font-bold text-xl uppercase tracking-wide text-white/90 border-l-[4px] border-white pl-4">
            A shoot-ready content space designed for creators, brands, and
            organized chaos.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-4 py-2 bg-black text-white font-condensed font-bold uppercase tracking-wider text-sm neo-border border-black">
              Drip Project
            </span>
            <span className="px-4 py-2 bg-black text-white font-condensed font-bold uppercase tracking-wider text-sm neo-border border-black">
              Crocs
            </span>
            <span className="px-4 py-2 bg-black text-white font-condensed font-bold uppercase tracking-wider text-sm neo-border border-black">
              Fastrack
            </span>
            <span className="px-4 py-2 bg-white text-black font-condensed font-bold uppercase tracking-wider text-sm neo-border border-black">
              & More
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="#contact"
              className="px-8 py-3 bg-white text-accent font-condensed font-bold uppercase tracking-wider neo-border border-black neo-shadow hover:-translate-y-1 transition-transform"
            >
              Book the Studio
            </Link>
            <Link
              href="#"
              className="px-8 py-3 bg-transparent text-white font-condensed font-bold uppercase tracking-wider neo-border border-white hover:bg-white/10 transition-colors"
            >
              Virtual Tour
            </Link>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-black text-white px-4 py-2 font-condensed font-bold uppercase tracking-widest text-xs neo-border border-white flex items-center gap-2 rotate-[-5deg]">
            <span>📸</span> Content-First Studio
          </div>
        </div>
      </div>
    </section>
  );
}
