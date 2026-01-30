'use client'
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonialsData } from '@/utils/RawData';

const TestimonialCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {testimonialsData.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-3xl hover:shadow-blue-200/40 transition-all duration-500 flex flex-col h-full"
        >
          {/* UPDATED: Quote Icon to Blue */}
          <div className="absolute -top-5 right-10 bg-[#0009c5] text-white p-4 rounded-2xl shadow-lg shadow-blue-500/20">
            <Quote size={24} fill="currentColor" />
          </div>

          {/* UPDATED: Stars to Golden Color */}
          <div className="flex gap-1 mb-8 bg-amber-50 w-fit px-4 py-1.5 rounded-full">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={12} fill="#FFD700" className="text-[#FFD700]" />
            ))}
            <span className="text-[10px] font-black text-amber-600 ml-2 italic">5.0</span>
          </div>

          <div className="flex-grow">
             {/* UPDATED: Quote text remains blue/dark as per theme but name is highlighted */}
             <p className="text-gray-700 font-bold italic text-lg mb-10 leading-snug tracking-tight">
                "{item.text}"
             </p>
          </div>

          <div className="flex items-center gap-5 border-t border-gray-50 pt-8 mt-auto">
            <div className="relative w-16 h-16 shrink-0">
               <div className="absolute inset-0 bg-[#0009c5] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
               <img 
                src={item.img} 
                alt={item.name} 
                className="relative w-full h-full object-cover rounded-2xl border-2 border-white shadow-md grayscale group-hover:grayscale-0 transition-all duration-500"
               />
            </div>
            <div>
              {/* UPDATED: Name to Red */}
              <h4 className="font-black uppercase tracking-tight text-[#b50926] text-md leading-none mb-1">
                {item.name}
              </h4>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default TestimonialCard;