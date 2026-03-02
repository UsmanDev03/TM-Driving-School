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
  Star,
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
        <div className="max-w-7xl mx-auto flex items-center justify-start gap-6 text-[11px] sm:text-[12px] font-bold uppercase tracking-widest opacity-95">
          <div className="h-4 w-[1px] bg-white/20 hidden sm:block"></div>
          {/* WHATSAPP */}
          <a
            href="https://wa.me/447949488211"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-500 transition-colors"
          >
            {/* Inline WhatsApp SVG */}
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.63 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.417z" />
            </svg>
          </a>
          <div className="h-4 w-[1px] bg-white/20 hidden md:block"></div>
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
            href="mailto:info@tmdriveschool.co.uk"
            className="hidden md:flex items-center gap-2 hover:text-black transition-colors"
          >
            <Mail size={13} />
            <span>info@tmdriveschool.co.uk</span>
          </a>

          <div className="h-4 w-[1px] bg-white/20 hidden lg:block"></div>

          {/* ADDRESS / AREA */}
          <div className="hidden lg:flex items-center gap-2">
            <MapPin size={13} />
            <span>West London</span>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <nav className="bg-white px-4 py-4 relative z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="inline-block cursor-pointer">
            {/* Height aur Width ko thora barha diya gaya hai */}
            <div className="relative h-16 w-60">
              <Image
                src="/images/logo/logo-.webp"
                alt="TM Driving School Logo"
                fill
                className="object-contain xl:scale-[1.7] scale-[1.4]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-[16px]">
             {/* --- TRUSTPILOT BUTTON --- */}
            <Link 
              href="https://www.trustpilot.com/review/tmdriveschool.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center gap-2 bg-[#00b67a] text-white px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-widest overflow-hidden group shadow-lg"
              >
                {/* Big Star Icon */}
                <Star 
                  size={20} 
                  strokeWidth={0} 
                  className="fill-white" 
                />
                
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[9px] opacity-80 font-bold uppercase tracking-tighter">Review on</span>
                  <span className="text-[13px] tracking-tight">Trustpilot</span>
                </div>

                {/* Hover par light effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group py-2"
              >
                <span className="text-gray-700 font-bold uppercase tracking-wide group-hover:text-[#ff6600] transition-colors duration-300">
                  {link.name}
                </span>
                {/* Animated Underline: Thori si thick aur smooth transition ke sath */}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ff6600] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            ))}

            {/* --- ANIMATED CONTACT BUTTON --- */}
           

            {/* --- CONTACT BUTTON --- */}
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
               {/* --- MOBILE TRUSTPILOT BUTTON --- */}
              <Link 
                href="https://www.trustpilot.com/review/tmdriveschool.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#00b67a] text-white py-4 rounded-xl font-black text-lg shadow-lg flex items-center justify-center gap-3 mt-4"
                >
                  Review on Trustpilot <Star size={24} strokeWidth={0} className="fill-white" />
                </motion.button>
              </Link>
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
             

              {/* --- YOUR EXISTING CONTACT BUTTON --- */}
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
