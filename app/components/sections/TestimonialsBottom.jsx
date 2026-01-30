import React from 'react'

const TestimonialsBottom = () => {
  return (
    <div className="mt-12 md:mt-24 bg-gray-900 rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-12 relative overflow-hidden mx-4 md:mx-0">
      {/* 1. BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#ff6600] blur-[80px] md:blur-[120px] opacity-20"></div>
      
      {/* 2. STATS GRID */}
      {/* Mobile par 2 columns, tablet/desktop par 4 columns */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-8 text-center">
        {[
          { label: "Happy Students", val: "1,200+" },
          { label: "Driving Years", val: "15+" },
          { label: "Pass Rate", val: "98%" },
          { label: "Reviews", val: "5-Star" }
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Value: Mobile par font size thoda chota kiya hai */}
            <h3 className="text-[#ff6600] text-3xl md:text-4xl font-black italic mb-1 uppercase tracking-tighter">
              {stat.val}
            </h3>
            {/* Label: Mobile par font size adjust kiya hai */}
            <p className="text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsBottom