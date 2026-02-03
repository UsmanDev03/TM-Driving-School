"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "TM Driving School",
    description: "I offer a high standard of driving tuition at a price that you can afford!",
    buttonText: "Read more...",
    link: "/price"
  },
  {
    image: "/images/hero-2.jpg",
    title: "Professional Instruction",
    description: "Expert manual driving lessons tailored to your needs.",
    buttonText: "Get In Touch",
    link: "/contact"
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000); 
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative h-[600px] md:h-[650px] w-full overflow-hidden bg-black font-sans">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Smooth fade transition
          className="absolute inset-0"
        >
          {/* Background Image - Animation slow rakhi hai taake 10s tak chale */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
            
            <motion.span 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#ff6600] text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-4"
            >
              Excellence in Driving
            </motion.span>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6"
            >
              {slides[current].title}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-200 text-[11px] md:text-sm font-bold uppercase tracking-[0.25em] max-w-xl mb-10"
            >
              {slides[current].description}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Link href={slides[current].link}>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#ff6600", color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-black px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs shadow-2xl flex items-center gap-2 transition-all"
                >
                  {slides[current].buttonText}
                  <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-[#ff6600] transition-all z-20">
        <ChevronLeft size={40} strokeWidth={1} />
      </button>

      <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-[#ff6600] transition-all z-20">
        <ChevronRight size={40} strokeWidth={1} />
      </button>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-[3px] transition-all duration-500 ${index === current ? "w-8 bg-[#ff6600]" : "w-4 bg-white/30"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;