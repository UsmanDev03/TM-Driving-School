"use client";
import React from "react";
import { motion } from "framer-motion";
import ActionFooter from '@/app/components/sections/ActionFooter';
import {
  Phone,
  Mail,
  MapPin,
  Gift,
  Users,
  Award,
  Star,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Map from "@/app/components/sections/Map";
import TopGalleryPreview from "@/app/components/sections/TopGalleryPreview";

const IntroSection = () => {

  return (
    <section className="py-16 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto px-6">
        {/* 1. Top Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-orange-100/50">
          <ContactCard
            icon={<Phone size={28} />}
            label="Call or Text"
            value="+44 7949 488211"
            bgColor="bg-[#ff6600]"
          />
          <ContactCard
            icon={<Mail size={28} />}
            label="Email"
            value="turonmiah123@aol.com"
            bgColor="bg-[#e65c00]"
          />
          <ContactCard
            icon={<Award size={28} />}
            label="Result"
            value="High Pass Rate"
            bgColor="bg-[#cc5200]"
          />
        </div>

        {/* 2. Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          <div className="lg:col-span-8 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
                Premium Driving Tuition <br />
                <span className="text-[#ff6600]">In London & Beyond</span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6 font-sans">
                <p className="text-xl leading-relaxed">
                  Learning to drive is one of the greatest milestones in your
                  life. At{" "}
                  <span className="font-bold text-gray-900">
                    TM Drive
                  </span>
                  , we offer a refreshing approach to tuition that makes you
                  feel relaxed.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Side Info Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 sticky top-24"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ff6600] rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
                <ArrowRight size={20} className="text-white" />
              </div>
              Quick Info
            </h3>
            <div className="space-y-8">
              <InfoItem
                label="Manual Lessons"
                detail="High standard manual tuition"
              />
              <InfoItem
                label="Success Rate"
                detail="High First-Time Pass Rate"
              />
              <InfoItem label="Value" detail="Affordable Expert Coaching" />
            </div>
          </motion.div>
        </div>

        <TopGalleryPreview />
        {/* 3. Areas Covered Section */}
        <Map />
        <ActionFooter/>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, label, value, bgColor }) => (
  <motion.div
    whileHover={{ backgroundColor: "#a33b00" }}
    className={`${bgColor} p-8 text-white flex flex-col items-center text-center gap-2 transition-all cursor-pointer relative overflow-hidden group`}
  >
    <div className="bg-white/20 p-3 rounded-xl mb-2 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-70">
      {label}
    </span>
    <span className="text-lg font-bold tracking-tight">{value}</span>
  </motion.div>
);

const InfoItem = ({ label, detail }) => (
  <div className="border-l-4 border-gray-50 pl-5 hover:border-[#ff6600] transition-all duration-300 group">
    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1 group-hover:text-[#ff6600]">
      {label}
    </p>
    <p className="text-lg text-gray-800 font-extrabold leading-tight">
      {detail}
    </p>
  </div>
);

export default IntroSection;
