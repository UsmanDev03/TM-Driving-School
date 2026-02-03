"use client";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import Map from "@/app/components/sections/Map";
import ContactForm from "@/app/components/sections/ContactForm";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Side Toaster Configuration */}
      <Toaster 
        position="top-right" 
        reverseOrder={false} 
        toastOptions={{
          duration: 3000, // 3 seconds me gayab ho jayega
          style: {
            background: '#1f2937', // Dark gray background
            color: '#fff',
            borderRadius: '16px',
            fontSize: '14px',
            fontWeight: '600',
            border: '1px solid #ff6600', // Orange border
          },
          success: {
            iconTheme: {
              primary: '#ff6600',
              secondary: '#fff',
            },
          },
        }}
      />

      {/* Hero Section */}
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
            Let's Get On The Road
            <div className="h-[2px] w-8 bg-[#ff6600]"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none"
          >
            Contact <span className="text-[#ff6600] ml-2">Turon Miah</span>
          </motion.h1>
        </div>
      </div>

      <ContactForm />
      <Map />
    </div>
  );
};

export default Contact;