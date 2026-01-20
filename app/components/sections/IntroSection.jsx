'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Gift, Users, Award, Star, GraduationCap, ArrowRight } from 'lucide-react';

const IntroSection = () => {
  const wideServices = [
    { title: "Gift Vouchers", icon: <Gift className="text-orange-500" /> },
    { title: "Block Booking Discounts", icon: <Star className="text-orange-500" /> },
    { title: "Learn at 16", icon: <Users className="text-orange-500" /> },
    { title: "Student Specials", icon: <GraduationCap className="text-orange-500" /> },
    { title: "Pass Plus Courses", icon: <Award className="text-orange-500" /> },
    { title: "Free Theory Help", icon: <Mail className="text-orange-500" /> }
  ];

  const locations = [
    { area: "Oldham" },
    { area: "Rochdale" },
    { area: "Tameside" },
    { area: "North Manchester" },
    { area: "Middleton" }
  ];

  return (
    <section className="py-16 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Top Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-20 rounded-2xl overflow-hidden shadow-2xl shadow-orange-100/50">
          <ContactCard 
            icon={<Phone size={28} />} 
            label="Call or Text" 
            value="+44 7949 488211" 
            bgColor="bg-[#ff6600]" 
          />
          <ContactCard 
            icon={<Mail size={28} />} 
            label="Email Paul" 
            value="turonmiah123@aol.com" 
            bgColor="bg-[#e65c00]" 
          />
          <ContactCard 
            icon={<Award size={28} />} 
            label="Experience" 
            value="20+ Years in Industry" 
            bgColor="bg-[#cc5200]" 
          />
        </div>

        {/* 2. Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-8 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
                Premium Driving Tuition <br/>
                <span className="text-[#ff6600]">In Oldham & Beyond</span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6 font-sans">
                <p className="text-xl leading-relaxed">
                  Learning to drive is one of the greatest milestones in your life. At <span className="font-bold text-gray-900">TM Driving School</span>, we offer a refreshing approach to tuition that makes you feel relaxed.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                  {wideServices.map((s, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="bg-orange-50 p-2 rounded-lg">{s.icon}</div>
                      <span className="font-bold text-gray-800">{s.title}</span>
                    </motion.div>
                  ))}
                </div>
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
              <InfoItem label="Manual Lessons" detail="High standard manual tuition" />
              <InfoItem label="Areas" detail="Oldham, Rochdale, Tameside" />
              <InfoItem label="Established" detail="Proudly serving since 1995" />
            </div>
          </motion.div>
        </div>

        {/* 3. Areas Covered Section */}
        <div className="space-y-12">
            <div className="text-center">
                <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">
                    AREAS <span className="text-[#ff6600]">COVERED</span>
                </h2>
                <div className="w-20 h-1.5 bg-[#ff6600] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* UPDATED LOCATION CARDS - More professional rounding */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                {locations.map((loc, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-lg transition-all text-center group relative overflow-hidden"
                    >
                        {/* Subtle background icon on hover */}
                        <div className="absolute -right-2 -bottom-2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                             <MapPin size={80} />
                        </div>

                        <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#ff6600] group-hover:bg-[#ff6600] group-hover:text-white transition-all duration-300">
                            <MapPin size={22} strokeWidth={2.5} />
                        </div>
                        <h4 className="font-extrabold text-gray-800 text-sm uppercase tracking-tight relative z-10">{loc.area}</h4>
                    </motion.div>
                ))}
            </div>

            {/* Google Map Section - Fixed border radius to match */}
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
    </section>
  );
};

const ContactCard = ({ icon, label, value, bgColor }) => (
  <motion.div 
    whileHover={{ backgroundColor: "#a33b00" }}
    className={`${bgColor} p-8 text-white flex flex-col items-center text-center gap-2 transition-all cursor-pointer relative overflow-hidden group`}
  >
    <div className="bg-white/20 p-3 rounded-xl mb-2 group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-70">{label}</span>
    <span className="text-lg font-bold tracking-tight">{value}</span>
  </motion.div>
);

const InfoItem = ({ label, detail }) => (
  <div className="border-l-4 border-gray-50 pl-5 hover:border-[#ff6600] transition-all duration-300 group">
    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1 group-hover:text-[#ff6600]">{label}</p>
    <p className="text-lg text-gray-800 font-extrabold leading-tight">{detail}</p>
  </div>
);

export default IntroSection;