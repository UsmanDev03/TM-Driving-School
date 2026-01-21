"use client";
import {
  Car,
  Clock,
  MessageSquare,
  Navigation,
  Send,
  Smartphone,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import Input from "./Input";
import { formFields } from "@/utils/RawData";

const ContactForm = () => {
  return (
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

          <form className="space-y-4">
            {formFields.map((data) => (
              <Input
                key={data.id}
                type={data.type}
                placeholder={data.placeholder}
                icon={data.icon}
                options={data.options} // Ye line lazmi add karein
              />
            ))}

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
          <img
            src="/images/contact-image.avif"
            alt="Professional Driving Lesson"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                  opacity-100 group-hover:opacity-100 group-hover:via-black/60 transition-all duration-1000"
          ></div>
          <div className="absolute top-8 right-8 bg-[#ff6600] text-white p-4 rounded-full shadow-2xl animate-pulse">
            <Car size={32} strokeWidth={2.5} />
          </div>
          <div className="absolute bottom-12 left-12 text-white z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#ff6600] p-2 rounded-xl shadow-lg shadow-orange-500/20">
                <Navigation size={22} strokeWidth={3} />
              </div>
              <span className="font-black italic tracking-tighter text-xl uppercase">
                Established 2004
              </span>
            </div>
            <p className="text-sm text-gray-300 font-bold max-w-xs leading-relaxed uppercase tracking-wider">
              High Pass Rate in West London Areas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
