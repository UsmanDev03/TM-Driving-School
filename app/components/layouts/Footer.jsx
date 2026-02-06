"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const TikTokIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Prices", href: "/price" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Gallery", href: "/gallery" },
];

import { Phone, Mail, MapPin, Car, ArrowRight } from "lucide-react";
import { Facebook, Instagram, X } from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=61587049696186",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/tmdrive1", // jab ready ho to real link daal dena
  },
  {
    icon: X,
    url: "https://x.com/tmdrive1",
  },
  {
    icon: TikTokIcon,
    url: "http://www.tiktok.com/@tmdrive1",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* 1. Brand Section */}
        <div className="flex flex-col">
          {/* Sirf yahan tabdeeli ki hai: Logo add kiya hai */}
          <Link href="/" className="inline-block cursor-pointer w-fit">
            <div className="relative h-12 w-48">
              <Image
                src="/images/logo/logo-1.png"
                alt="TM Driving School Logo"
                fill
                className="object-contain object-left xl:mt-[-8px]"
                priority
              />
            </div>
          </Link>

          <p className="text-gray-400 leading-relaxed text-sm mt-6">
            I offer a high standard of driving tuition at a price that you can
            afford. With a focus on expert coaching and safety, I help you
            master the road and pass your test with confidence.
          </p>

          <div className="flex mt-6 gap-4">
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
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
            {[...navLinks, { name: "Contact", href: "/contact" }].map(
              (item) => (
                <motion.li key={item.name} whileHover={{ x: 5 }}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#ff6600] flex items-center gap-2 text-sm transition-colors group"
                  >
                    <ArrowRight
                      size={14}
                      className="text-[#ff6600] opacity-70 group-hover:opacity-100 transition-opacity"
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
              href="mailto:turonmiah123@aol.com"
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

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 group cursor-default"
            >
              <div className="bg-[#ff6600]/10 p-3 rounded-lg group-hover:bg-[#ff6600] transition-colors duration-300">
                <MapPin
                  size={20}
                  className="text-[#ff6600] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                  Our Office
                </p>
                <p className="text-sm font-bold leading-relaxed">
                  West London
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
            © Copyright {new Date().getFullYear()} | TM Driving School. All
            Rights Reserved. | Powered by{" "}
            <a
              href="https://teqnoor.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff6600] hover:text-white transition-all duration-300 font-black border-b border-transparent hover:border-[#ff6600]"
            >
              TEQNOOR
            </a>
          </p>
          <div className="flex gap-6">
            {/* <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a> */}
            <a href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
