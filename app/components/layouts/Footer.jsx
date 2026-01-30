"use client";
import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Prices", href: "/price" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Gallery", href: "/gallery" },
];

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* 1. Brand Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center">
            <Link href="/">
              <motion.div
                initial={{ scale: 1.3 }}
                className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
              >
                <img
                  src="/images/logo/logo.png"
                  alt="TM Driving School"
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </motion.div>
            </Link>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            I offer a high standard of driving tuition at a price that you can
            afford. With over 20+ years of experience, I help you pass with
            confidence.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{
                  y: -5,
                  color: "#0009c5",
                  backgroundColor: "white",
                }}
                className="bg-white/10 p-3 rounded-full cursor-pointer transition-all border border-white/10 text-white"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-[#0009c5] pl-3 text-white">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-4">
            {[...navLinks, { name: "Contact", href: "/contact" }].map(
              (item) => (
                <motion.li key={item.name} whileHover={{ x: 5 }}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-[#0009c5] flex items-center gap-2 text-sm transition-colors group"
                  >
                    <ArrowRight
                      size={14}
                      className="text-white opacity-70 group-hover:text-[#0009c5] group-hover:opacity-100 transition-all"
                    />
                    {item.name}
                  </a>
                </motion.li>
              ),
            )}
          </ul>
        </div>

        {/* 3. Contact Details */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-[#0009c5] pl-3 text-white">
            Get In Touch
          </h4>
          <div className="flex flex-col gap-6">
            <motion.a
              href="tel:+447949488211"
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 group"
            >
              <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white transition-colors">
                <Phone
                  size={20}
                  className="text-white group-hover:text-[#0009c5]"
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Call Us
                </p>
                <p className="text-sm font-bold text-white">+44 7949 488211</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:turonmiah123@aol.com"
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 group"
            >
              <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white transition-colors">
                <Mail
                  size={20}
                  className="text-white group-hover:text-[#0009c5]"
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Email Us
                </p>
                <p className="text-sm font-bold text-white truncate">
                  turonmiah123@aol.com
                </p>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 group cursor-default"
            >
              <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white transition-colors duration-300">
                <MapPin
                  size={20}
                  className="text-white group-hover:text-[#0009c5] transition-colors duration-300"
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Our Office
                </p>
                <p className="text-sm font-bold text-white leading-relaxed">
                  Maida Vale, London
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <p className="text-white/80">
            © Copyright {currentYear} | TM Driving School. All Rights Reserved.
            <span className="ml-2 border-l border-white/20 pl-2">
              Powered by{" "}
              <a
                href="https://teqnoor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-[#0009c5] transition-colors"
              >
                Teqnoor
              </a>
            </span>
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-[#0009c5] transition-colors text-white/80"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-[#0009c5] transition-colors text-white/80"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
