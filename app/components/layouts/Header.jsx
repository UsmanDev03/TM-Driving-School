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
import Image from "next/image";

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
      backgroundColor: "#e65c00",
      boxShadow: "0px 0px 20px rgba(255, 102, 0, 0.4)",
      transition: { duration: 0.3, yoyo: Infinity },
    },
    tap: { scale: 0.95 },
  };

  return (
    <header className="w-full shadow-md font-sans sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      {/* Top Bar */}
      <div className="bg-[#ff6600] text-white py-2.5 px-4 sm:px-6 overflow-x-auto whitespace-nowrap">
        {/* font-black ko badal kar font-bold ya font-semibold kar diya hai */}
        <div className="max-w-7xl mx-auto flex items-center justify-start gap-6 text-[11px] sm:text-[12px] font-bold uppercase tracking-widest opacity-95">
          {/* SOCIAL ICON */}
          <motion.a
            href="https://www.facebook.com/profile.php?id=61587049696186"
            target="_blank"
            whileHover={{ rotate: 15, scale: 1.2 }}
            className="cursor-pointer"
          >
            <Facebook size={16} fill="white" strokeWidth={0} />
          </motion.a>

          <div className="h-4 w-[1px] bg-white/20 hidden sm:block"></div>

          {/* PHONE */}
          <a
            href="tel:+447949488211"
            className="flex items-center gap-2 hover:text-black transition-colors"
          >
            <Phone size={13} fill="white" />
            <span>+44 7949 488211</span>
          </a>

          <div className="h-4 w-[1px] bg-white/20 hidden md:block"></div>

          {/* EMAIL */}
          <a
            href="mailto:turonmiah123@aol.com"
            className="hidden md:flex items-center gap-2 hover:text-black transition-colors"
          >
            <Mail size={13} />
            <span>turonmiah123@aol.com</span>
          </a>

          <div className="h-4 w-[1px] bg-white/20 hidden lg:block"></div>

          {/* ADDRESS / AREA */}
          <div className="hidden lg:flex items-center gap-2">
            <MapPin size={13} />
            <span>Maida Vale, London</span>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <nav className="bg-white px-4 py-4 relative z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="inline-block cursor-pointer">
            {/* Header ke liye: Height fixed hai taake nav disturb na ho, width 44 (176px) prominent rakhegi */}
            <div className="relative h-12 w-44">
              <Image
                src="/images/logo/logo.png"
                alt="TM Driving School Logo"
                fill
                className="object-contain object-left xl:scale-[1.5] scale-[1.3] ml-6"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-[15px]">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="relative group">
                <span className="text-gray-600 font-bold tracking-tight group-hover:text-[#ff6600] transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#ff6600] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* --- ANIMATED CONTACT BUTTON --- */}
            <Link href="/contact">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative flex items-center gap-2 bg-[#ff6600] text-white px-8 py-2.5 rounded-full font-black text-sm uppercase tracking-widest overflow-hidden group shadow-lg"
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

          {/* Mobile Menu Button */}
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
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-800 font-bold text-xl hover:text-[#ff6600]"
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <Link href="/contact" onClick={closeMenu}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#ff6600] text-white py-4 rounded-xl font-black text-lg shadow-lg flex items-center justify-center gap-3"
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
