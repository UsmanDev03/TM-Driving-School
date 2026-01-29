"use client";
import { motion, useAnimation } from "framer-motion";
import { locations } from "@/utils/RawData";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

const LocationCard = () => {
  const firstRow = locations.slice(0, 12);
  const secondRow = locations.slice(12, 24);

  const SliderRow = ({ items, direction = 1, speed = 40 }) => {
    const controls = useAnimation();

    // Auto-play function
    const startAutoPlay = () => {
      controls.start({
        x: direction > 0 ? [-20, -2000] : [-2000, -20],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        },
      });
    };

    useEffect(() => {
      startAutoPlay();
    }, []);

    const handleDragStart = () => {
      controls.stop(); // User jab pakray ga, animation ruk jayegi
    };

    const handleDragEnd = () => {
      // 3 second wait karne ke baad auto-play wapis shuru hoga
      setTimeout(() => {
        startAutoPlay();
      }, 3000);
    };

    return (
      <div className="flex overflow-hidden cursor-grab active:cursor-grabbing select-none">
        <motion.div
          drag="x"
          dragConstraints={{ left: -2500, right: 0 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          animate={controls}
          className="flex flex-nowrap gap-4 py-4 whitespace-nowrap"
        >
          {[...items, ...items, ...items].map((loc, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center justify-center bg-white min-w-[160px] p-4 rounded-2xl border border-gray-100 shadow-sm group relative overflow-hidden pointer-events-none"
            >
              {/* pointer-events-none is liye taake drag smooth ho aur card beech mein na aaye */}
              <div className="bg-orange-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3 text-[#ff6600] group-hover:bg-[#ff6600] group-hover:text-white transition-all duration-300">
                <MapPin size={18} strokeWidth={2.5} />
              </div>
              <h4 className="font-black text-gray-900 text-[10px] uppercase tracking-tighter italic leading-tight">
                {loc.area}
              </h4>
              {loc.postcode && (
                <span className="text-[#ff6600] text-[9px] font-black opacity-70 uppercase tracking-widest mt-1">
                  {loc.postcode}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50/50 py-12 rounded-[3rem] overflow-hidden">
      <div className="space-y-2">
        <SliderRow items={firstRow} direction={1} />
        <SliderRow items={secondRow} direction={-1} />
      </div>

      <div className="mt-8 text-center px-4">
        <p className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.3em] italic">
          Serving 24+ Locations across Central & West London
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
