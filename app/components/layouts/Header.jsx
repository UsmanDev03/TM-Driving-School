"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Send,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Prices", href: "/price" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Gallery", href: "/gallery" },
  ];

  const closeMenu = () => setIsOpen(false);

  // Button Animation Variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#0007a3", // Hover par thora gehra Blue
      boxShadow: "0px 0px 20px rgba(0, 9, 197, 0.4)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <header className="w-full shadow-md font-sans sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-[#0009c5] text-white py-2.5 px-4 sm:px-6 overflow-x-auto whitespace-nowrap">
        <div className="max-w-7xl mx-auto flex items-center justify-start gap-6 text-[11px] sm:text-[12px] font-bold uppercase tracking-widest opacity-95">
          <motion.a
            href="https://facebook.com"
            target="_blank"
            whileHover={{ rotate: 15, scale: 1.2 }}
            className="cursor-pointer"
          >
            <Facebook size={16} fill="white" strokeWidth={0} />
          </motion.a>
          <div className="h-4 w-[1px] bg-white/20 hidden sm:block"></div>
          <a
            href="tel:+447949488211"
            className="flex items-center gap-2 hover:text-white/80 transition-colors"
          >
            <Phone size={13} fill="white" />
            <span>+44 7949 488211</span>
          </a>
          <div className="h-4 w-[1px] bg-white/20 hidden md:block"></div>
          <a
            href="mailto:turonmiah123@aol.com"
            className="hidden md:flex items-center gap-2 hover:text-white/80 transition-colors"
          >
            <Mail size={13} />
            <span>turonmiah123@aol.com</span>
          </a>
          <div className="h-4 w-[1px] bg-white/20 hidden lg:block"></div>
          <div className="hidden lg:flex items-center gap-2">
            <MapPin size={13} />
            <span>Maida Vale, London</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white px-4 relative z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/">
            <motion.div
              initial={{ scale: 1.2 }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 1.1 }}
              className="flex items-center cursor-pointer ml-4"
            >
              {/* ONLY LOGO - Scaled to 1.2 as requested */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <img
                  src="/images/logo/logo.png"
                  alt="TM Driving School"
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-[15px]">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="relative group">
                <span className="text-gray-600 font-bold tracking-tight group-hover:text-[#0009c5] transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#0009c5] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* --- BLUE CONTACT BUTTON --- */}
            <Link href="/contact">
              <motion.button
                variants={buttonVariants}
                initial={{ backgroundColor: "#0009c5" }} // Explicit Blue Base
                whileHover="hover"
                whileTap="tap"
                className="relative flex items-center gap-2 text-white px-8 py-2.5 rounded-full font-black text-sm uppercase tracking-widest overflow-hidden group shadow-lg"
              >
                <span>Contact</span>
                <motion.div
                  variants={{
                    hover: { x: 5, opacity: 1 },
                    initial: { x: -10, opacity: 0 },
                  }}
                >
                  <Send size={14} />
                </motion.div>
              </motion.button>
            </Link>
          </div>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 p-2"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 z-0 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link, index) => (
                <Link key={link.name} href={link.href} onClick={closeMenu}>
                  <motion.div className="text-gray-800 font-bold text-xl hover:text-[#0009c5]">
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              {/* --- MOBILE BLUE CONTACT BUTTON --- */}
              <Link href="/contact" onClick={closeMenu}>
                <motion.button
                  whileHover={{ backgroundColor: "#0007a3" }}
                  className="w-full bg-[#0009c5] text-white py-4 rounded-xl font-black text-lg shadow-lg flex items-center justify-center gap-3"
                >
                  Contact Now <Send size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
