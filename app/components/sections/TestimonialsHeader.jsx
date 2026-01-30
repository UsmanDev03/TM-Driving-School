"use client";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsHeader = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden mb-20">
      {/* 1. BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070&auto=format&fit=crop"
        className="w-full h-full object-cover"
        alt="Happy Students"
      />

      {/* 2. GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#fafafa]"></div>

      {/* 3. CONTENT AREA */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        {/* UPDATED: Red Background with White Text */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-[#b50926] text-white px-4 py-1.5 rounded-full font-black uppercase tracking-[0.4em] text-[10px] mb-6 block shadow-lg"
        >
          Real Results, Real People
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-[0.85]"
        >
          Our Students <br />
          {/* UPDATED: Changed to Blue */}
          <span className="text-[#0009c5]">Pass With Pride</span>
        </motion.h2>

        {/* 4. PASS RATE BADGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-20 z-20 hidden md:flex flex-col items-start"
        >
          <div className="flex items-center gap-2 text-green-400 font-black uppercase italic tracking-widest text-xs bg-black/40 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 shadow-2xl">
            <CheckCircle size={18} /> 98% Pass Rate
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsHeader;