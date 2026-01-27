'use client'
import { Star, Quote } from 'lucide-react'; // CheckCircle agar use nahi ho raha to hata sakte hain
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
          // 1. Added 'flex flex-col' to the card
          className="group relative bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-3xl hover:shadow-orange-200/40 transition-all duration-500 flex flex-col h-full"
        >
          {/* Floating Quote */}
          <div className="absolute -top-5 right-10 bg-[#ff6600] text-white p-4 rounded-2xl shadow-lg shadow-orange-500/40">
            <Quote size={24} fill="currentColor" />
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-8 bg-orange-50 w-fit px-4 py-1.5 rounded-full">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={12} fill="#ff6600" className="text-[#ff6600]" />
            ))}
            <span className="text-[10px] font-black text-[#ff6600] ml-2 italic">5.0</span>
          </div>

          {/* Review Text - 2. Added 'flex-grow' so it pushes the info down */}
          <div className="flex-grow">
             <p className="text-gray-700 font-bold italic text-lg mb-10 leading-snug tracking-tight">
               "{item.text}"
             </p>
          </div>

          {/* Student Info - 3. Added 'mt-auto' to ensure it stays at bottom */}
          <div className="flex items-center gap-5 border-t border-gray-50 pt-8 mt-auto">
            <div className="relative w-16 h-16 shrink-0">
               <div className="absolute inset-0 bg-[#ff6600] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
               <img 
                src={item.img} 
                alt={item.name} 
                className="relative w-full h-full object-cover rounded-2xl border-2 border-white shadow-md grayscale group-hover:grayscale-0 transition-all duration-500"
               />
            </div>
            <div>
              <h4 className="font-black uppercase tracking-tight text-gray-900 text-md leading-none mb-1">
                {item.name}
              </h4>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-[10px] font-black text-[#ff6600] uppercase tracking-widest">
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

export default TestimonialCard