"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "/images/gallery/F-3.webp",
    title: "Welcome to\nTM Drive",
    description:
      "I offer a high standard of driving tuition at a price that you can afford!",
    buttonText: "Book your session",
    link: "/price",
  },
  {
    image: "/images/gallery/TM-Car-4.webp",
    title: "Professional Instruction",
    description: "Expert manual driving lessons tailored to your needs.",
    buttonText: "Talk to Your instructor",
    link: "/contact",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative h-[600px] md:h-[650px] w-full overflow-hidden bg-black font-sans">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image Optimization */}
          <div className="absolute inset-0">
            <Image
              src={slides[current].image}
              alt={slides[current].title.replace("\n", " ")}
              fill
              priority={current === 0}
              quality={75}
              className="object-cover object-center transition-transform duration-[10000ms] ease-linear scale-110"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto z-10">
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-[#ff6600] text-[14px] md:text-base font-black uppercase tracking-[0.5em] mb-4 inline-block"
            >
              Excellence in Driving
            </motion.span>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-white text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6 whitespace-pre-line md:whitespace-nowrap"
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-200 text-[15px] md:text-lg font-bold uppercase tracking-[0.25em] max-w-xl mb-10"
            >
              {slides[current].description}
            </motion.p>
            <Link href={slides[current].link}>
              <button className="group bg-white text-black px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs shadow-2xl flex items-center gap-2 hover:bg-[#ff6600] hover:text-white transition-all">
                {slides[current].buttonText}
                <ArrowUpRight
                  size={16}
                  className="group-hover:rotate-45 transition-transform"
                />
              </button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-[#ff6600] z-20"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-[#ff6600] z-20"
      >
        <ChevronRight size={40} />
      </button>
    </section>
  );
};

export default HeroSlider;
