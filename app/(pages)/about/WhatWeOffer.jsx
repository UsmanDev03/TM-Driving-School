"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Trophy, Zap, Target } from "lucide-react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
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

const WhatWeOffer = () => {
  const offerings = [
    {
      title: "Manual Tuition",
      desc: "Expert coaching for learners of all levels.",
      icon: <Star size={24} />,
    },
    {
      title: "Refresher Sessions",
      desc: "Regain your confidence after a break from the road.",
      icon: <Trophy size={24} />,
    },
    {
      title: "Motorway Training",
      desc: "Specialized lessons for high-speed driving.",
      icon: <Zap size={24} />,
    },
    {
      title: "Proven Success",
      desc: "A high first-time pass rate built on structured, professional instruction.",
      icon: <Target size={24} />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          What We <span className="text-[#ff6600]">Offer</span>
        </h2>
        <div className="w-28 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-[#ff6600] to-[#ff9900]"></div>
      </div>

      {/* Cards */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {offerings.map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -6, scale: 1.03 }}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <motion.div
              className="mb-4 p-3 rounded-2xl flex items-center justify-center"
              initial={{ backgroundColor: '#fff4e6', color: '#ff6600' }}
              whileHover={{ backgroundColor: '#ff6600', color: '#ffffff' }}
              transition={{ duration: 0.3 }}
            >
              {item.icon}
            </motion.div>
            <h3 className="text-lg font-black uppercase italic mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhatWeOffer;