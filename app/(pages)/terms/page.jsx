"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  AlertCircle,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Scale,
} from "lucide-react";

const TermsPage = () => {
  const sections = [
    {
      title: "Booking & Payments",
      icon: (
        <CreditCard
          className="text-[#ff6600] group-hover:text-white transition-colors duration-300"
          size={30}
        />
      ),
      items: [
        "All lessons must be a minimum of 2 hours long. Payments must be paid in advance. All booked lessons need to be paid at the time of making the booking.",
        "All offers are subject to change without any notice.",
        "Prices for services are subject to change.",
      ],
    },
    {
      title: "Legal Requirements",
      icon: (
        <ShieldCheck
          className="text-[#ff6600] group-hover:text-white transition-colors duration-300"
          size={30}
        />
      ),
      items: [
        "You must hold a current, valid driving licence: provisional, full or International and show this to the instructor on the first lesson. You must be fit to drive within the legal and medical requirements (which you are legally responsible to advise the instructor of any changes). You must not drive under any undue stress.",
        "You must meet the minimum eye test requirements, which means you must be able to read a standard UK approved number plate at a minimum distance of 20.5 metres (67 feet). If you need to wear glasses or contact lenses in order to meet this requirement then you must wear them whenever you drive.",
        "You must notify your instructor of any changes to your ability, health or entitlement to take driving lessons (i.e provisional licence that has been revoked by DVLA).",
        "No alcohol allowed before, or during driving lessons. Your safety is our top priority. If, for any reason, your instructor feels that you may not be in the best condition to drive—whether due to stress or any other reason—they may suggest rescheduling the lesson for a time when you’re feeling more at ease.",
      ],
    },
    {
      title: "Cancellations & Refunds",
      icon: (
        <Clock
          className="text-[#ff6600] group-hover:text-white transition-colors duration-300"
          size={30}
        />
      ),
      items: [
        "Cancellations should be communicated via phone call or text/WhatsApp message to +44 7949 488211. Email or other forms of communication may not be accepted. If the pupil fails to give the instructor a minimum of two working days (48 Hours) notice before cancelling any lesson/test the pupil shall be liable for the lesson/test fee.",
        "An administration charge of £30 will be added to any refund. Please allow up to 5 working days for any refund to be processed.",
        "Packages must be used within two months for 10-hour blocks; all other packages must be used within six months from the time of booking the first lesson.",
      ],
    },
    {
      title: "Liability & Safety",
      icon: (
        <AlertCircle
          className="text-[#ff6600] group-hover:text-white transition-colors duration-300"
          size={30}
        />
      ),
      items: [
        "All lessons will start and finish at the same location unless agreed in advance. Your instructor will decide a location suitable to your needs according to ability. Your driving instructor will wait at the appointed location at the scheduled time for a maximum of 20 minutes. Beyond this time, it will be considered a no-show, and the full lesson fee will be charged.",
        "Your instructor will always endeavour to arrive on time; however, due to unforeseen circumstances such as breakdowns, accidents, or traffic hold-ups, lesson times may need to be changed or cancelled. If cancelled by the instructor, no cancellation fee will be charged.",
        "Candidates on tests/driving lessons are responsible for any damage they cause to the learner vehicle or other vehicles (Third party) which is subsequently not covered by insurance (minimum excess fees apply). Also, any PCN or Penalty charge incurred whilst in a Driving School Vehicle, the driver (Learner) will be liable for any traffic contravention, including Box Junction, Bus lane, or traffic light offences.",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 overflow-x-hidden">
      {/* 1. HERO BANNER */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img
          src="/images/hero-3.avif"
          className="w-full h-full object-cover"
          alt="Terms and Conditions"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#ff6600] text-[10px] font-black uppercase tracking-[0.5em] mb-4"
          >
            TM Drive Oldham • Manual Tuition Specialists
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-white"
          >
            Terms & <span className="text-[#ff6600]">Conditions</span>
          </motion.h1>

          <p className="text-gray-200 mt-4 max-w-2xl font-bold uppercase tracking-widest text-sm">
            Professional standards for manual driving tuition. By booking, you
            enter a formal agreement with TM Drive Oldham.
          </p>
        </div>
      </div>

      {/* 2. FULL WIDTH SECTIONS */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="space-y-4">
          {sections.map((section, idx) => (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={idx}
              className="group border-b border-gray-100 py-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-orange-50 rounded-2xl group-hover:bg-[#ff6600] group-hover:text-white transition-all duration-300 text-[#ff6600]">
                    {section.icon}
                  </div>
                  <h2 className="font-black uppercase italic tracking-tighter text-3xl md:text-4xl text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <div className="hidden md:block h-px flex-grow bg-gray-100 group-hover:bg-orange-100 transition-colors"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start p-4 rounded-2xl hover:bg-gray-50 transition-all border border-transparent"
                  >
                    <div className="mt-1 bg-[#ff6600] rounded-full p-1 shrink-0">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <p className="text-gray-600 font-bold leading-relaxed uppercase text-[11px] md:text-xs tracking-wide italic">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* 3. WIDE ACTION FOOTER */}
        <div className="mt-20 p-10 md:p-16 bg-gray-900 rounded-[3.5rem] text-white relative overflow-hidden">
          <div className="absolute right-[-2%] top-[-10%] opacity-10 rotate-12">
            <Scale size={300} strokeWidth={1} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-3 tracking-tighter leading-none">
                Questions <span className="text-[#ff6600]">?</span>
              </h3>
              <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                Administration: +44 7949 488211
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="/contact"
                className="flex items-center justify-center gap-3 bg-[#ff6600] px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-xl shadow-orange-600/20"
              >
                Contact Now
              </a>
              <a href="/price" className="w-full sm:w-auto">
                <button className="flex items-center justify-center gap-3 border border-white/20 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white hover:text-gray-900 transition-all w-full">
                  Pricing <ArrowRight size={18} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;