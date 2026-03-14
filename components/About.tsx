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
              BUILT FOR <span className="text-accent">GEN Z.</span> <br />
              BUILT TO CONVERT.
            </h2>
          </div>

          <div className="font-sans text-lg text-text/90 space-y-4">
            <p>
              Disposable Films is a content-first creative house based in
              Mumbai. We&apos;re a team of creators, strategists, and production
              heads who understand what moves people online.
            </p>
            <p>
              We create content that doesn&apos;t just look good &mdash; it
              works. From viral reels to full-blown campaigns, we scale your
              presence. And we shoot it all in our in-house creative space:
              Disposable Studios.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              "No Fluff.",
              "Full Control.",
              "Fast Turnarounds.",
              "Trend-First.",
            ].map((val, i) => (
              <div
                key={i}
                className="bg-bg/60 backdrop-blur-md p-4 neo-border neo-shadow-sm flex items-center justify-center text-center"
              >
                <span className="font-condensed font-bold uppercase tracking-wider text-text">
                  {val}
                </span>
              </div>
            ))}
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

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-4 py-2 bg-accent text-white font-condensed font-bold uppercase tracking-wider text-sm neo-border">
              Mumbai
            </span>
            {[
              "Content-First",
              "Strategy-Backed",
              "In-House Studio",
              "Gen Z Native",
              "Full Service",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-bg text-text font-condensed font-bold uppercase tracking-wider text-sm neo-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
