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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-white"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[#ff6600] font-black tracking-widest uppercase text-sm mb-4"
          >
            <div className="h-[2px] w-8 bg-[#ff6600]"></div> Let's Get On The
            Road
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none"
          >
            Contact <br />
            <span className="text-[#ff6600]">Paul May</span>
          </motion.h1>
        </div>
      </div>

      {/* 2. Main Contact Card Section */}
      <ContactForm/>
      
      {/* 4. Areas Covered Section */}
      <Map/>
    </div>
  );
};

export default Contact;
