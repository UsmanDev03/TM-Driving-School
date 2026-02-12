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
      controls.stop();
    };

    const handleDragEnd = () => {
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
              <div className="bg-orange-50 w-10 h-10 rounded-lg flex items-center justify-center mb-2 text-[#ff6600] group-hover:bg-[#ff6600] group-hover:text-white transition-all duration-300">
                <MapPin size={18} strokeWidth={3} />
              </div>

              <h4 className="font-[900] text-gray-900 text-[12px] uppercase tracking-tight italic leading-tight">
                {loc.area}
              </h4>

              {loc.postcode && (
                <span className="text-[#ff6600] text-[10px] font-[1000] uppercase tracking-wider mt-1">
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
    <div className="bg-gray-50/50 py-4 rounded-[3rem] overflow-hidden">
      <div className="space-y-2">
        <SliderRow items={firstRow} direction={1} />
        <SliderRow items={secondRow} direction={-1} />
      </div>

      <div className="mt-8 text-center px-4">
        <p className="text-gray-700 text-sm font-bold uppercase tracking-widest italic">
          Serving 24+ Locations across Central & West London
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
