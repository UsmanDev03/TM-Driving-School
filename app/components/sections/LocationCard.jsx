"use client";
import { motion } from "framer-motion";
import {locations} from '@/utils/RawData'
import { MapPin } from "lucide-react";


const LocationCard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
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
              <h4 className="font-extrabold text-gray-800 text-[11px] uppercase tracking-tight relative z-10">
                {loc.area}
              </h4>
            </motion.div>
          ))}
        </div>
  )
}

export default LocationCard