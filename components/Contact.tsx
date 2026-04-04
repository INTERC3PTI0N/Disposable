"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    type: "Content Production",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setStatus("success");
    setTimeout(() => setStatus("idle"), 5000);
    setFormData({ name: "", email: "", whatsapp: "", type: "Content Production", message: "" });
  };

  return (
    <section id="contact" className="bg-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-condensed font-bold uppercase tracking-widest text-accent text-sm mb-2 block">
              Start a Project
            </span>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-text">
              LET&apos;S MAKE <br />
              <span className="text-accent">SOMETHING</span> <br />
              HAPPEN.
            </h2>
          </div>

          <div className="font-sans text-lg text-text/80 space-y-4">
            <p>
              Whether you need a full campaign, a quick reel shoot, or just want
              to rent the studio &mdash; drop us a line.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent neo-border flex items-center justify-center text-white text-2xl">
                📍
              </div>
              <div>
                <h4 className="font-condensed font-bold uppercase tracking-wide text-text">
                  Studio HQ
                </h4>
                <p className="font-sans text-text/60">Andheri West, Mumbai</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-bg2 neo-border flex items-center justify-center text-text text-2xl">
                ✉️
              </div>
              <div>
                <h4 className="font-condensed font-bold uppercase tracking-wide text-text">
                  Email
                </h4>
                <p className="font-sans text-text/60">
                  hello@disposablefilms.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-bg2/60 backdrop-blur-md p-8 md:p-12 neo-border neo-shadow-lg relative">
          {status === "success" && (
            <div className="absolute inset-0 bg-bg2/90 backdrop-blur-md z-10 flex flex-col items-center justify-center p-8 text-center neo-border">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-3xl mb-4">
                ✓
              </div>
              <h3 className="font-display text-4xl uppercase tracking-tight text-text mb-2">
                Message Sent!
              </h3>
              <p className="font-sans text-text/80">
                We&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 px-6 py-2 bg-bg text-text font-condensed font-bold uppercase tracking-wider text-sm neo-border hover:bg-accent hover:text-white transition-colors"
              >
                Send Another
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-condensed font-bold uppercase tracking-wider text-text text-sm"
              >
                Name / Brand
              </label>
              <input
                type="text"
                id="name"
                required
                className="bg-bg/60 backdrop-blur-sm border-[3px] border-border p-4 font-sans text-text focus:outline-none focus:border-accent transition-colors"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-condensed font-bold uppercase tracking-wider text-text text-sm"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="bg-bg/60 backdrop-blur-sm border-[3px] border-border p-4 font-sans text-text focus:outline-none focus:border-accent transition-colors"
                placeholder="hello@brand.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="whatsapp"
                className="font-condensed font-bold uppercase tracking-wider text-text text-sm"
              >
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsapp"
                required
                className="bg-bg/60 backdrop-blur-sm border-[3px] border-border p-4 font-sans text-text focus:outline-none focus:border-accent transition-colors"
                placeholder="+91 00000 00000"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="type"
                className="font-condensed font-bold uppercase tracking-wider text-text text-sm"
              >
                Project Type
              </label>
              <div className="relative">
                <select
                  id="type"
                  className="w-full bg-bg/60 backdrop-blur-sm border-[3px] border-border p-4 font-sans text-text appearance-none focus:outline-none focus:border-accent transition-colors cursor-pointer"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                >
                  <option value="Content Production">Content Production</option>
                  <option value="Full Campaign">Full Campaign</option>
                  <option value="UI/UX Services">UI/UX Services</option>
                  <option value="Web Development Services">Web Development Services</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text">
                  ▼
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-condensed font-bold uppercase tracking-wider text-text text-sm"
              >
                Project Details
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="bg-bg/60 backdrop-blur-sm border-[3px] border-border p-4 font-sans text-text focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell us what you're building..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-8 py-4 bg-accent text-white font-condensed font-bold uppercase tracking-wider text-lg neo-border neo-shadow hover:-translate-y-1 transition-transform w-full"
            >
              Send Request &rarr;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
