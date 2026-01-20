"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Clock,
  GraduationCap,
  Star,
  Trophy,
  ArrowRight,
  Car,
  CheckCircle2,
  Phone,
  Target,
  Users,
} from "lucide-react";

const PricingPage = () => {
  const prices = [
    {
      title: "Standard",
      price: "40",
      duration: "1 Hour",
      desc: "Pay as you go",
      icon: <Clock size={24} />,
      popular: false,
    },
    {
      title: "Student",
      price: "38",
      duration: "1 Hour (Student)",
      desc: "Valid ID required",
      icon: <GraduationCap size={24} />,
      popular: true,
    },
    {
      title: "Block 10",
      price: "380",
      duration: "10 Hours",
      desc: "Save on bulk booking",
      icon: <Star size={24} />,
      popular: false,
    },
    {
      title: "Block Student",
      price: "360",
      duration: "10 Hours (Student)",
      desc: "Best value package",
      icon: <Trophy size={24} />,
      popular: false,
    },
  ];

  const offers = [
    {
      title: "Beginner Lessons",
      desc: "Complete beginners are most welcome. Start from the basics and build your confidence step by step.",
      icon: <Users size={30} />,
    },
    {
      title: "Novice Learners",
      desc: "Already have experience? We'll focus on areas that need improvement to get you test-ready.",
      icon: <Target size={30} />,
    },
    {
      title: "Test Preparation",
      desc: "Intensive prep with mock tests and practical tips to pass your test with confidence.",
      icon: <CheckCircle2 size={30} />,
    },
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen pb-24 font-sans text-gray-900">
      {/* 1. HERO BANNER */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Driving"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#fafafa]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-white"
          >
            Driving Lessons & <span className="text-[#ff6600]">Pricing</span>
          </motion.h1>
          <p className="text-gray-200 mt-4 max-w-2xl font-bold uppercase tracking-widest text-sm">
            Professional manual driving tuition with flexible scheduling and
            competitive rates in Oldham
          </p>
        </div>
      </div>

      {/* 2. WHAT WE OFFER SECTION */}
      {/* 2. WHAT WE OFFER SECTION */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-30">
        <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">
              What We <span className="text-[#ff6600]">Offer</span>
            </h2>
            <p className="text-gray-500 font-medium text-sm mt-2">
              Comprehensive manual driving instruction tailored to your skill
              level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {offers.map((offer, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Box Container */}
                <div className="mb-4 p-4 bg-orange-50 rounded-2xl group-hover:bg-[#ff6600] transition-all duration-300">
                  {/* ICON COLOR CONTROL: Ye line icon ko white karegi hover par */}
                  <div className="text-[#ff6600] group-hover:text-white transition-colors duration-300">
                    {offer.icon}
                  </div>
                </div>
                <h4 className="font-black uppercase italic mb-2 group-hover:text-[#ff6600] transition-colors">
                  {offer.title}
                </h4>
                <p className="text-xs text-gray-500 font-bold leading-relaxed uppercase">
                  {offer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. PRICING CARDS SECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter">
            Flexible <span className="text-[#ff6600]">Pricing</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.2em] mt-2">
            Special offers on block bookings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prices.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className={`h-full bg-white rounded-3xl p-8 border-2 transition-all duration-300 flex flex-col relative ${
                item.popular
                  ? "border-[#ff6600] shadow-2xl shadow-orange-100"
                  : "border-gray-100 hover:border-orange-200 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2 rounded-xl ${item.popular ? "bg-orange-500 text-white" : "bg-gray-100 text-[#ff6600]"}`}
                >
                  {item.icon}
                </div>
                <h3 className="font-black uppercase italic tracking-tight text-lg leading-none">
                  {item.title}
                </h3>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-black tracking-tighter italic">
                  £{item.price}
                </span>
                <span className="text-gray-400 text-[10px] font-black uppercase block mt-1 tracking-widest">
                  {item.duration}
                </span>
              </div>
              <button
                className={`w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                  item.popular
                    ? "bg-[#ff6600] text-white"
                    : "bg-gray-900 text-white"
                }`}
              >
                Book Now <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. WHY CHOOSE TM DRIVE (MERCEDES SECTION) */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="bg-gray-900 rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <Car
              size={300}
              strokeWidth={0.5}
              className="translate-x-20 -translate-y-10 rotate-12"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none mb-8">
                Why Choose <span className="text-[#ff6600]">TM Drive</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    t: "Modern Vehicle",
                    d: "Learn in a comfortable Mercedes A-Class with dual controls",
                    i: <Car className="text-[#ff6600]" />,
                  },
                  {
                    t: "High Pass Rate",
                    d: "Proven track record of student success in Oldham area",
                    i: <Trophy className="text-[#ff6600]" />,
                  },
                  {
                    t: "Flexible Times",
                    d: "Lessons scheduled around your availability (Weekends available)",
                    i: <Clock className="text-[#ff6600]" />,
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 mt-1">{feature.i}</div>
                    <div>
                      <h4 className="font-black uppercase italic text-sm">
                        {feature.t}
                      </h4>
                      <p className="text-gray-400 text-xs font-medium leading-relaxed">
                        {feature.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md text-center">
              <p className="text-[#ff6600] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                Need Current Offers?
              </p>
              <h3 className="text-2xl font-black italic uppercase mb-6">
                Call for Pricing
              </h3>
              <a
                href="tel:+447949488211"
                className="inline-flex items-center gap-3 bg-[#ff6600] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl shadow-orange-500/20"
              >
                <Phone size={20} fill="white" /> +44 7949 488211
              </a>
              <p className="text-gray-500 text-[10px] font-bold mt-6 uppercase tracking-widest">
                Call now to discuss your requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
