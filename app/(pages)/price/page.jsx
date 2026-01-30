"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Clock,
  Star,
  Trophy,
  Phone,
  Target,
  MapPin,
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const PricingPage = () => {
  const prices = [
    {
      title: "Package 1",
      price: "450",
      duration: "10 hour program",
      desc: "£45 hour",
      icon: <Star size={24} />,
      popular: false,
    },
    {
      title: "Package 2",
      price: "860",
      duration: "20 hour program",
      desc: "£43 hour",
      icon: <Trophy size={24} />,
      popular: true,
    },
    {
      title: "Package 3",
      price: "1,260",
      duration: "30 hour program",
      desc: "£42 hour",
      icon: <Zap size={24} />,
      popular: false,
    },
    {
      title: "Package 4",
      price: "1,600",
      duration: "40 hour program",
      desc: "£40 hour",
      icon: <Target size={24} />,
      popular: false,
    },
  ];

  const areas = [
    "Notting Hill W8", "Maida Vale W9", "Holland Park W8", "Kensington W8",
    "Bayswater W2", "Queensway W2", "Paddington W2", "Westbourne Grove W2",
    "Earls Court SW5", "South Kensington SW7", "Fulham SW6", "Chelsea SW3",
    "Hammersmith W6", "White City W12", "Shepherd’s Bush W12", "East Acton W3",
    "Acton W3, W12", "Park Royal NW10", "Queens Park NW6", "Ladbroke Grove W10, W11",
    "Kensal Rise NW10", "St John's Wood NW8", "Swiss Cottage NW8", "West Hampstead NW6",
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen pb-24 font-sans text-gray-900 overflow-x-hidden">
      {/* 1. HERO BANNER */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="/images/hero-3.avif"
          className="w-full h-full object-cover"
          alt="Driving"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0009c5]/20 to-[#fafafa]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-white"
          >
            Areas and <span className="text-[#0009c5]">Prices</span>
          </motion.h1>
          
          {/* UPDATED: Red Background and White Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 px-6 py-2 bg-[#b50926] rounded-full shadow-lg"
          >
            <p className="text-white font-bold uppercase tracking-widest text-xs md:text-sm italic">
              All savings is based on hourly rate of £48 per hour.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. INTRO & STANDARD OFFERS */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 -mt-20 relative z-30"
      >
        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 p-4 bg-blue-50 rounded-2xl text-[#0009c5]">
                <Clock size={30} />
              </div>
              <h4 className="font-black uppercase italic mb-2 text-gray-400">
                Standard Rate
              </h4>
              <p className="text-2xl font-black text-gray-900 leading-tight">
                £96 for 2 hours
              </p>
              <p className="text-[10px] text-[#0009c5] font-bold uppercase mt-1 tracking-widest leading-relaxed">
                Manual Cars only (£48.00 hour).
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center text-center border-t md:border-t-0 md:border-l border-gray-100 pt-10 md:pt-0 md:pl-10"
            >
              <div className="mb-4 p-4 bg-red-50 rounded-2xl text-[#b50926] animate-pulse">
                <Zap size={30} />
              </div>
              <h4 className="font-black uppercase italic mb-2 text-[#b50926]">
                Introductory Offer
              </h4>
              <p className="text-2xl font-black text-gray-900 leading-tight italic uppercase">
                £70 (First 2 hour Lesson)
              </p>
              <p className="text-[10px] text-red-500 font-bold uppercase mt-1 tracking-widest leading-relaxed">
                LIMITED TIME ONLY (SAVE £26)
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 3. BLOCK BOOKINGS */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-gray-900">
            Block Booking <span className="text-[#0009c5]">Discount</span>
          </h2>
          <p className="text-[#b50926] font-bold uppercase text-[10px] tracking-[0.2em] mt-2 italic">
            Payable in advance at the time of booking
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {prices.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`bg-white rounded-3xl p-8 border-2 transition-colors duration-300 ${item.popular ? "border-[#b50926] shadow-xl shadow-red-50" : "border-gray-100 shadow-lg shadow-blue-50/20"}`}
            >
              <div className={`mb-4 w-10 h-10 flex items-center justify-center rounded-xl ${item.popular ? "bg-red-50 text-[#b50926]" : "bg-blue-50 text-[#0009c5]"}`}>
                {item.icon}
              </div>
              <h3 className={`font-black uppercase italic tracking-tight text-lg mb-6 ${item.popular ? "text-[#b50926]" : "text-gray-300"}`}>
                {item.title}
              </h3>
              <div className="mb-8">
                <span className="text-5xl font-black tracking-tighter italic">
                  £{item.price}
                </span>
                <span className="text-gray-900 text-[11px] font-black uppercase block mt-1 tracking-widest">
                  {item.duration}
                </span>
                <span className={`${item.popular ? "text-[#b50926]" : "text-[#0009c5]"} text-[11px] font-bold uppercase block mt-2 italic`}>
                  -{item.desc}
                </span>
              </div>
              <a href="/contact" className="w-full">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 ${
                    item.popular
                      ? "bg-[#b50926] text-white shadow-lg shadow-red-200 hover:bg-[#91071e]"
                      : "bg-[#0009c5] text-white hover:bg-[#0007a3]"
                  }`}
                >
                  Book Now
                </motion.button>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 4. AREAS COVERED */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-blue-50/50 rounded-[3rem] p-10 md:p-16 border border-blue-100 shadow-sm"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-gray-900">
              Areas <span className="text-[#0009c5]">Covered</span>
            </h2>
            <div className="w-16 h-1 bg-[#b50926] mx-auto mt-2"></div>
            <p className="text-xs font-bold text-gray-500 mt-4 italic">
              Central/South, West London and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white p-3 rounded-xl border border-blue-200/30 hover:border-[#b50926] transition-all cursor-default"
              >
                <MapPin size={14} className="text-[#0009c5]" />
                <span className="text-[10px] font-black uppercase tracking-tight text-gray-700">
                  {area}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 5. IMPORTANT INFO */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="bg-gray-900 rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden text-white border-b-8 border-[#b50926]">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-8 text-[#0009c5]">
                Important Information
              </h2>
              <div className="space-y-8 text-left">
                {[
                  { t: "Motorway & Refresher", d: "£60 per hour | 2 hours £120." },
                  { t: "Pass Plus Course", d: "6 hours Course £330." },
                  { t: "Driving Test hire", d: "£250*. Existing students only." },
                ].map((info, i) => (
                  <div key={i} className="border-l-2 border-[#b50926] pl-4">
                    <h4 className="font-black uppercase italic text-sm mb-1 text-white">
                      {info.t}
                    </h4>
                    <p className="text-gray-400 text-xs font-medium uppercase italic">
                      {info.d}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md text-center flex flex-col justify-center"
            >
              <p className="text-[#b50926] font-black uppercase tracking-[0.2em] text-[10px] mb-4 italic">
                Call Turon For Bookings
              </p>
              <h3 className="text-3xl font-black italic uppercase mb-8 text-white">
                07949 488211
              </h3>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#0007a3" }}
                whileTap={{ scale: 0.95 }}
                href="tel:07949488211"
                className="bg-[#0009c5] py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 text-white transition-all duration-300"
              >
                <Phone size={18} /> Call Now
              </motion.a>
              <p className="text-gray-500 text-[9px] font-bold mt-6 uppercase leading-relaxed max-w-xs mx-auto italic">
                *Cancellations require 48h notice.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;