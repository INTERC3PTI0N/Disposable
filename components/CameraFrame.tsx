export default function CameraFrame() {
  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none">
       
       {/* Vignette */}
       <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]" />

       {/* Top Left */}
       <div className="absolute top-8 left-8 w-12 h-12 border-t-[3px] border-l-[3px] border-white/30 hidden md:block" />
       {/* Top Right */}
       <div className="absolute top-8 right-8 w-12 h-12 border-t-[3px] border-r-[3px] border-white/30 hidden md:block" />
       {/* Bottom Left */}
       <div className="absolute bottom-8 left-8 w-12 h-12 border-b-[3px] border-l-[3px] border-white/30 hidden md:block" />
       {/* Bottom Right */}
       <div className="absolute bottom-8 right-8 w-12 h-12 border-b-[3px] border-r-[3px] border-white/30 hidden md:block" />
       
       {/* Rec dot */}
       <div className="absolute top-4 right-4 md:top-10 md:right-20 flex items-center gap-3">
         <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500 animate-pulse neo-border" />
         <span className="font-mono text-xs md:text-sm text-white/80 uppercase tracking-widest font-bold">REC</span>
       </div>
       
       {/* Crosshair center */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-2 bg-white" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-2 bg-white" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[2px] bg-white" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[2px] bg-white" />
       </div>
    </div>
  );
}
