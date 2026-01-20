"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  User,
  Smartphone,
  Navigation,
  Clock,
  Car,
  Gift,
  Star,
  Users,
  GraduationCap,
  Award,
} from "lucide-react";

const Contact = () => {
  const wideServices = [
    { title: "Gift Vouchers", icon: <Gift size={24} /> },
    { title: "Block Booking", icon: <Star size={24} /> },
    { title: "Learn at 16", icon: <Users size={24} /> },
    { title: "Student Specials", icon: <GraduationCap size={24} /> },
    { title: "Pass Plus", icon: <Award size={24} /> },
    { title: "Theory Help", icon: <Mail size={24} /> },
  ];

  const locations = [
    { area: "Oldham" },
    { area: "Rochdale" },
    { area: "Tameside" },
    { area: "North Manchester" },
    { area: "Middleton" },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. Hero Section with White Shade Gradient */}
      <div className="relative h-[450px] md:h-[500px] w-full overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/images/hero-3.avif')",
          }}
        ></div>

        {/* WHITE SHADE OVERLAY (Pricing Page Style) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-white"></div>

        {/* Content Container */}
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
      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900 italic tracking-tighter uppercase">
                Book Your Lesson
              </h2>
              <p className="text-gray-500 font-medium mt-2 text-sm">
                Fill out the details and I'll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ff6600] transition-colors"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#ff6600] focus:bg-white outline-none transition-all font-bold text-gray-700 text-sm shadow-inner"
                />
              </div>

              <div className="relative group">
                <Smartphone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ff6600] transition-colors"
                  size={18}
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#ff6600] focus:bg-white outline-none transition-all font-bold text-gray-700 text-sm shadow-inner"
                />
              </div>

              <div className="relative group">
                <Clock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ff6600] transition-colors"
                  size={18}
                />
                <select className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#ff6600] focus:bg-white outline-none transition-all font-bold text-gray-700 text-sm shadow-inner appearance-none cursor-pointer">
                  <option value="">Preferred Lesson Time</option>
                  <option value="morning">Morning (8am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 4pm)</option>
                  <option value="evening">Evening (4pm - 8pm)</option>
                  <option value="weekends">Weekends Only</option>
                </select>
              </div>

              <div className="relative group">
                <MessageSquare
                  className="absolute left-4 top-5 text-gray-400 group-focus-within:text-[#ff6600] transition-colors"
                  size={18}
                />
                <textarea
                  rows={3}
                  placeholder="Driving experience or any questions?"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#ff6600] focus:bg-white outline-none transition-all font-bold text-gray-700 text-sm shadow-inner"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#ff6600] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 group shadow-xl shadow-orange-100"
              >
                Send Request{" "}
                <Send
                  className="group-hover:translate-x-2 transition-transform"
                  size={20}
                />
              </motion.button>
            </form>

            <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-4 justify-between">
              <div>
                <p className="text-[10px] font-black uppercase text-gray-400 tracking-tighter">
                  Call Now
                </p>
                <p className="text-md font-bold text-gray-900 italic">
                  +44 7949 488211
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-gray-400 tracking-tighter text-right">
                  Email
                </p>
                <p className="text-md font-bold text-gray-900 italic">
                  turonmiah123@aol.com
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[500px] bg-gray-900 group overflow-hidden">
            {" "}
            {/* overflow-hidden lazmi hai taake zoom bahar na nikle */}
            <img
              src="/images/contact-image.avif"
              alt="Professional Driving Lesson"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90"
            />
            {/* Shadow jo image ke saath hi adjust hogi */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                  opacity-100 group-hover:opacity-100 group-hover:via-black/60 transition-all duration-1000"
            ></div>
            <div className="absolute top-8 right-8 bg-[#ff6600] text-white p-4 rounded-full shadow-2xl animate-pulse">
              <Car size={32} strokeWidth={2.5} />
            </div>
            <div className="absolute bottom-12 left-12 text-white z-10">
              {" "}
              {/* z-10 taake text hamesha upar rahe */}
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#ff6600] p-2 rounded-xl shadow-lg shadow-orange-500/20">
                  <Navigation size={22} strokeWidth={3} />
                </div>
                <span className="font-black italic tracking-tighter text-xl uppercase">
                  Established 2004
                </span>
              </div>
              <p className="text-sm text-gray-300 font-bold max-w-xs leading-relaxed uppercase tracking-wider">
                High Pass Rate in Oldham, Rochdale & Tameside
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Wide Services Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {wideServices.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-orange-50 p-6 rounded-3xl text-center flex flex-col items-center gap-3 border border-orange-100"
            >
              <div className="text-[#ff6600]">{service.icon}</div>
              <span className="text-[10px] font-black uppercase text-gray-800 tracking-tighter leading-tight">
                {service.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Areas Covered Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">
            AREAS <span className="text-[#ff6600]">COVERED</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#ff6600] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-lg transition-all text-center group relative overflow-hidden"
            >
              <div className="absolute -right-2 -bottom-2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <MapPin size={80} />
              </div>
              <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#ff6600] group-hover:bg-[#ff6600] group-hover:text-white transition-all duration-300">
                <MapPin size={22} strokeWidth={2.5} />
              </div>
              <h4 className="font-extrabold text-gray-800 text-sm uppercase tracking-tight relative z-10">
                {loc.area}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl h-[400px] relative bg-gray-100 group"
        >
          <div className="absolute inset-0 bg-[#ff6600]/5 pointer-events-none group-hover:bg-transparent transition-colors z-10" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151525.1054714138!2d-2.1868478499999996!3d53.54149025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb0d9e797e88d%3A0x6b7727e908974a6!2sOldham!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
            className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
