import React from "react";
import { Scale, ArrowRight } from "lucide-react"; // Icons import karna mat bhooliye ga

const ActionFooter = () => {
  return (
    <div className="mt-14 p-10 md:p-16 bg-gray-900 rounded-[3.5rem] text-white relative overflow-hidden">
      <div className="absolute right-[-2%] top-[-10%] opacity-10 rotate-12">
        <Scale size={300} strokeWidth={1} />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-3 tracking-tighter leading-none">
            Questions <span className="text-[#ff6600]">?</span>
          </h3>
          <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em]">
            Administration: +44 7949 488211
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <a
            href="/contact"
            className="flex items-center justify-center gap-3 bg-[#ff6600] px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-xl shadow-orange-600/20"
          >
            Contact Now
          </a>
          <a href="/price" className="w-full sm:w-auto">
            <button className="flex items-center justify-center gap-3 border border-white/20 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white hover:text-gray-900 transition-all w-full">
              Pricing <ArrowRight size={18} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActionFooter;
