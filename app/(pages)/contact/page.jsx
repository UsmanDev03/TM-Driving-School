"use client";
import { motion } from "framer-motion";
import {
  Send,
  MessageSquare,
  User,
  Smartphone,
  Navigation,
  Clock,
  Car,
} from "lucide-react";
import Map from "@/app/components/sections/Map";
import ContactForm from "@/app/components/sections/ContactForm";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. Hero Section */}
      <div className="relative h-[450px] md:h-[500px] w-full overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/images/hero-3.avif')",
          }}
        ></div>
        {/* Gradient Overlay with a touch of Blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0009c5]/10 to-white"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
          
          {/* UPDATED: Red Background Badge for 'Let's Get On The Road' */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#b50926] text-white px-6 py-2 rounded-full font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6 shadow-xl flex items-center gap-3"
          >
            <div className="h-[1px] w-4 bg-white/50"></div>
            Let's Get On The Road
            <div className="h-[1px] w-4 bg-white/50"></div>
          </motion.div>

          {/* UPDATED: Main Title - Name in Blue */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none"
          >
            Contact <span className="text-[#0009c5] ml-2">Turon Miah</span>
          </motion.h1>
        </div>
      </div>

      {/* 2. Main Contact Card Section */}
      <ContactForm />

      {/* 4. Areas Covered Section */}
      <Map />
    </div>
  );
};

export default Contact;