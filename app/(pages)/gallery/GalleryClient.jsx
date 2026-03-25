"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react"; // added chevrons
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // import both at once
import "swiper/css";
import "swiper/css/navigation"; // required for navigation buttons

// ✅ Slider images (fixed IDs)
const sliderImages = [
  { id: 1, url: "/images/gallery/F-1.webp", title: "Learning to Drive" },
  { id: 2, url: "/images/gallery/F-2.webp", title: "Precision Parking Practice" },
  { id: 3, url: "/images/gallery/TM-Car-2.webp", title: "The Look of Confidence" },
  { id: 4, url: "/images/gallery/TM-Car-3.webp", title: "Modern Car" },
  { id: 5, url: "/images/gallery/TM-Car-5.webp", title: "Smooth Gear Transitions" },
  { id: 6, url: "/images/gallery/TM-Car-6.webp", title: "Safety First" },
  { id: 7, url: "/images/gallery/F-3.webp", title: "Ready for the Road Test" },
];

// ✅ Grid images (1 → 22)
const gridImages = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  url: `/images/gallery/${i + 1}.jpeg`,
  title: `Driving Session ${i + 1}`,
}));

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="bg-white min-h-screen pb-20">

      {/* ✅ HERO */}
      <div className="relative h-[450px] md:h-[500px] w-full overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/hero-3.avif')" }}
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
            Our Successes <span className="text-[#ff6600] ml-2">on the Road</span>
          </motion.h1>
        </div>
      </div>

      {/* ✅ SLIDER */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-12">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => {
            // Initialize custom navigation
            setTimeout(() => {
              swiper.params.navigation.nextEl = ".swiper-button-next-custom";
              swiper.params.navigation.prevEl = ".swiper-button-prev-custom";
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {sliderImages.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden border border-gray-100 flex flex-col"
                onClick={() => openModal(item)}
              >
                <div className="h-64 w-full flex items-center justify-center bg-gray-50 overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-gray-900 font-bold uppercase text-sm tracking-wide">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Custom navigation buttons */}
          <div className="swiper-button-prev-custom absolute top-1/2 left-0 z-30 -translate-y-1/2 p-2 cursor-pointer text-white/80 hover:text-[#ff6600]">
            <ChevronLeft size={40} />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-0 z-30 -translate-y-1/2 p-2 cursor-pointer text-white/80 hover:text-[#ff6600]">
            <ChevronRight size={40} />
          </div>
        </Swiper>
      </div>

      {/* ✅ GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gridImages.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden border border-gray-100 flex flex-col"
            onClick={() => openModal(item)}
          >
            <div className="h-64 w-full flex items-center justify-center bg-gray-50 overflow-hidden">
              <img
                src={item.url}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-3 text-center">
              <p className="text-gray-900 font-bold uppercase text-sm tracking-wide">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0" onClick={closeModal}></div>
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/70 hover:text-[#ff6600] transition-all z-[130]"
            >
              <X size={40} />
            </button>
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
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;