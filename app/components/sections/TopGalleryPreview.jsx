"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { id: 1, url: "/images/gallery/F-1.webp", title: "Training Car" },
  { id: 2, url: "/images/gallery/F-2.webp", title: "Interior View" },
  { id: 3, url: "/images/gallery/TM-Car-5.webp", title: "On-Road Ready" },
  { id: 4, url: "/images/gallery/F-3.webp", title: "Modern Design" },
];

const TopGalleryPreview = () => {
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);

  const open = (i) => {
    setIndex(i);
    setSelected(images[i]);
  };

  const close = () => setSelected(null);

  const next = (e) => {
    e.stopPropagation();
    const i = (index + 1) % images.length;
    setIndex(i);
    setSelected(images[i]);
  };

  const prev = (e) => {
    e.stopPropagation();
    const i = (index - 1 + images.length) % images.length;
    setIndex(i);
    setSelected(images[i]);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 mt-12">

      {/* Section Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 text-[#ff6600] font-bold tracking-[0.3em] uppercase text-xs mb-4"
        >
          <div className="h-[2px] w-8 bg-[#ff6600]" />
          Car Gallery
          <div className="h-[2px] w-8 bg-[#ff6600]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase text-gray-900"
        >
          Our <span className="text-[#ff6600]">Training Car</span>
        </motion.h2>

        <p className="mt-3 text-sm text-gray-500 font-medium max-w-xl mx-auto">
          Explore our modern training car, carefully maintained for safety,
          comfort, and confident driving lessons.
        </p>
      </div>

      {/*  Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => open(i)}
            className="cursor-pointer overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-44 md:h-52 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[120] flex items-center justify-center"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 text-white hover:text-[#ff6600]"
            >
              <X size={36} />
            </button>

            <button
              onClick={prev}
              className="absolute left-6 text-white hover:text-[#ff6600]"
            >
              <ChevronLeft size={48} />
            </button>

            <img
              src={selected.url}
              alt={selected.title}
              className="max-w-[90%] max-h-[80%] rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={next}
              className="absolute right-6 text-white hover:text-[#ff6600]"
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TopGalleryPreview;
