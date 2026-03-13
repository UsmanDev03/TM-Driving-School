"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const certificates = [
  { id: 1, url: "/images/li/li-1.webp" },
  { id: 2, url: "/images/li/li-2.webp" },
];

const TopGalleryPreview = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white font-sans">
      {/* TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 w-full"
      >
        <div className="flex items-center gap-3 text-[#ff6600] font-black tracking-[0.3em] uppercase text-sm md:text-base mb-6">
          <div className="h-[2.5px] w-10 bg-[#ff6600] rounded-full" />
          Expert Instructor
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
          Meet <span className="text-[#ff6600]">Turon</span>
        </h2>

        <div className="flex items-center gap-2 text-gray-500 mb-3 font-medium text-base uppercase tracking-wide">
          <MapPin size={18} className="text-[#ff6600]" />
          Central London | West, NW, SW & Surroundings
        </div>

        <div className="space-y-4 text-gray-600 font-sans w-full">
          <p className="text-lg md:text-xl leading-relaxed w-full">
            My name is <span className="font-bold text-gray-900">Turon</span>, a
            fully qualified{" "}
            <span className="font-bold text-gray-900">
              DVSA Approved Driving Instructor
            </span>{" "}
            based in central London. I cover West, NW, SW of London and
            surrounding areas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-1 w-full">
            {[
              "Manual Lessons",
              "Motorway Training",
              "Refresher Sessions",
              "All Levels",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-1 bg-gray-50/50"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl leading-relaxed w-full">
            I offer manual driving lessons for learners of all ages and
            experience levels, along with motorway lessons and refresher
            sessions for full licence holders.
          </p>

          <p className="text-lg md:text-xl leading-relaxed w-full">
            I’m calm under pressure, understanding, and always adapt my teaching
            style to suit each individual.
          </p>

          <div className="pt-6 border-t border-gray-100 w-full">
            <p className="text-lg md:text-xl font-bold text-gray-900 leading-snug tracking-tight uppercase">
              "More than just passing the test, I focus on teaching{" "}
              <span className="text-[#ff6600]">safe driving skills</span> for
              life."
            </p>
          </div>
        </div>
      </motion.div>

      {/* CERTIFICATES SECTION */}
      <div className="pt-6 border-t border-gray-100 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mx-auto justify-items-center">
          {certificates.map((img) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-3xl shadow-xl border border-gray-100 w-full max-w-[320px] bg-gray-50 relative group"
            >
              <img
                src={img.url}
                alt="Certificate"
                className="w-full h-auto object-contain transition-transform duration-700"
              />
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopGalleryPreview;