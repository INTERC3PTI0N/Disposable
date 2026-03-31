import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="bg-bg2 border-y-[3px] border-accent py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-condensed font-bold uppercase tracking-widest text-accent text-sm mb-2 block">
              Who We Are
            </span>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-text">
              STRATERGY - LED <br />
              OUTCOME <span className="text-accent">DRIVEN</span>.
            </h2>
          </div>

          <div className="font-sans text-lg text-text/90 space-y-4">
            <p>
              We are only here because our clients choose us – our results are critical to their roles and their businesses.

            </p>
            <p>
              Disposable Films is a content-first creative house based in Mumbai. We&apos;re a team of creators, strategists, and production heads who understand what moves people online. 

            </p>
            <p>
              Our Focus is on high-impact production that bridges the gap between aesthetic excellence and strategic performance. From high-energy viral reels to comprehensive multi-channel campaigns. We specialise in scaling your brand&apos;s digital presence through content that is purpose-built to convert.  

            </p>
          </div>

          <div className="mt-4">
            <Link
              href="#contact"
              className="inline-block px-8 py-4 bg-accent text-white font-condensed font-bold uppercase tracking-wider neo-border neo-shadow hover:-translate-y-1 transition-transform"
            >
              Let&apos;s Talk &rarr;
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-bg3/60 backdrop-blur-md p-8 md:p-12 neo-border neo-shadow-lg flex flex-col gap-8 relative">
          <blockquote className="font-display text-4xl md:text-5xl uppercase tracking-tight text-text leading-tight">
            &quot;We shoot where we <span className="text-accent">plan.</span>
            &quot;
          </blockquote>

          <p className="font-sans text-lg text-text/80">
            Most of our content is shot in our studio, giving us full control,
            fast turnarounds, and way more flexibility. You can rent it too.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-4">
            {[
              "Content-First",
              "Strategy-Backed",
              "In-House Studio",
              "Gen Z Native",
              "Full Service",
            ].map((tag, i) => (
              <div
                key={i}
                className="flex items-center gap-2 font-condensed font-bold uppercase tracking-wider text-sm text-text/80 hover:text-accent hover:translate-x-1 transition-all duration-300 cursor-default group"
              >
                <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
                <span>{tag}</span>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Link
              href="#work"
              className="inline-block px-8 py-4 bg-text text-bg font-condensed font-bold uppercase tracking-wider neo-border neo-shadow hover:-translate-y-1 transition-transform"
            >
              View Portfolio &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
