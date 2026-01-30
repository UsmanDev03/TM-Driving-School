"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

// 8 Dummy Images for Driving School
const galleryImages = [
  {
    id: 1,
    url: "/images/gallery/TM-Car.png",
    title: "Learning to Drive",
  },
  {
    id: 2,
    url: "/images/gallery/TM-Car-1.png",
    title: "Precision Parking Practice",
  },
  {
    id: 3,
    url: "/images/gallery/TM-Car-2.jpg",
    title: "The Look of Confidence",
  },
  {
    id: 4,
    url: "/images/gallery/TM-Car-3.jpg",
    title: "Modern Car",
  },
  {
    id: 5,
    url: "/images/gallery/TM-Car-4.jpg",
    title: "Confidence Behind the Wheel",
  },
  {
    id: 6,
    url: "/images/gallery/TM-Car-5.jpg",
    title: "Smooth Gear Transitions",
  },
  {
    id: 7,
    url: "/images/gallery/TM-Car-6.jpg",
    title: "Safety First",
  },
  {
    id: 8,
    url: "/images/gallery/TM-Car-7.png",
    title: "Ready for the Road Test",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeModal = () => setSelectedImage(null);

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. Hero Section (Matched with your Contact Design) */}
      <div className="relative h-[450px] md:h-[500px] w-full overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/images/hero-3.avif')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-white"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 text-[#ff6600] font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            <div className="h-[2px] w-8 bg-[#ff6600]"></div>
            View Our Gallery
            <div className="h-[2px] w-8 bg-[#ff6600]"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none"
          >
            Our Successes{" "}
            <span className="text-[#ff6600] ml-2">on the Road</span>
          </motion.h1>
        </div>
      </div>

      {/* 2. Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-2 shadow-xl rounded-xl cursor-pointer overflow-hidden border border-gray-100"
              onClick={() => openModal(index)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="p-3 text-center">
                <p className="text-gray-800 font-bold uppercase text-xs tracking-widest">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Popup Modal (Lightbox) */}
      {/* 3. Popup Modal (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4"
          >
            {/* Overlay Click to Close */}
            <div className="absolute inset-0" onClick={closeModal}></div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/70 hover:text-[#ff6600] transition-all z-[130]"
            >
              <X size={40} />
            </button>

            {/* Left Arrow - Blur Removed */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage(e);
              }}
              className="absolute left-2 md:left-10 text-white/80 hover:text-[#ff6600] transition-all z-[130] active:scale-90"
            >
              <ChevronLeft size={40} className="md:w-16 md:h-16" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl w-full h-[70vh] flex flex-col items-center justify-center z-[120] pointer-events-none"
            >
              <img
                src={selectedImage.url}
                alt="Selected"
                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg border-2 border-white/10 pointer-events-auto"
              />
              <p className="text-white mt-6 text-lg md:text-xl font-bold italic uppercase tracking-widest text-center">
                {selectedImage.title}
              </p>
            </motion.div>

            {/* Right Arrow - Blur Removed */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage(e);
              }}
              className="absolute right-2 md:right-10 text-white/80 hover:text-[#ff6600] transition-all z-[130] active:scale-90"
            >
              <ChevronRight size={40} className="md:w-16 md:h-16" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
