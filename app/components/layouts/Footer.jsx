"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Car,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* 1. Brand Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#ff6600] p-2 rounded-lg">
              <Car className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter">
              TM <span className="text-[#ff6600]">DRIVING</span>
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            I offer a high standard of driving tuition at a price that you can
            afford. With over 28 years of experience, I help you pass with
            confidence.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -5, color: "#ff6600" }}
                className="bg-white/5 p-3 rounded-full cursor-pointer transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-[#ff6600] pl-3">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-4">
            {["Home", "Prices", "Testimonials", "Gallery", "Contact"].map(
              (item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#ff6600] flex items-center gap-2 text-sm transition-colors"
                  >
                    <ArrowRight size={14} className="text-[#ff6600]" /> {item}
                  </a>
                </motion.li>
              ),
            )}
          </ul>
        </div>

        {/* 3. Contact Details - Image se inspired lakin behtar */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-[#ff6600] pl-3">
            Get In Touch
          </h4>
          <div className="flex flex-col gap-6">
            <motion.a
              href="tel:07977045359"
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 group"
            >
              <div className="bg-[#ff6600]/10 p-3 rounded-lg group-hover:bg-[#ff6600] transition-colors">
                <Phone
                  size={20}
                  className="text-[#ff6600] group-hover:text-white"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                  Call Us
                </p>
                <p className="text-sm font-bold">+44 7949 488211</p>
              </div>
            </motion.a>

            <motion.a
              href="turonmiah123@aol.com"
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 group"
            >
              <div className="bg-[#ff6600]/10 p-3 rounded-lg group-hover:bg-[#ff6600] transition-colors">
                <Mail
                  size={20}
                  className="text-[#ff6600] group-hover:text-white"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                  Email Us
                </p>
                <p className="text-sm font-bold truncate">
                  turonmiah123@aol.com
                </p>
              </div>
            </motion.a>

            <div className="flex items-start gap-4 group">
              <div className="bg-[#ff6600]/10 p-3 rounded-lg">
                <MapPin size={20} className="text-[#ff6600]" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                  Our Office
                </p>
                <p className="text-sm font-bold leading-relaxed">
                  Maida Vale, London
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>
            © Copyright {currentYear} | TM Driving School. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
