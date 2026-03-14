'use client';

import Navbar from "@/components/Navbar";
import HeroBento from "@/components/HeroBento";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Studios from "@/components/Studios";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import CameraFrame from "@/components/CameraFrame";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg text-text selection:bg-accent selection:text-white overflow-hidden">
      <Loader onComplete={() => {}} />
      <CameraFrame />
      
      {/* Background Blobs for Glassmorphism effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-text/5 blur-[100px]" />
      </div>

      <div className="relative z-10 p-2 pt-12 md:p-16">
        <Navbar />
        <HeroBento />
        <About />
        <Brands />
        <Services />
        <Studios />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
