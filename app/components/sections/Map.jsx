'use clinet'
import { motion } from "framer-motion";
import LocationCard from './LocationCard'

const Map = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-24 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">
            AREAS <span className="text-[#ff6600]">COVERED</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#ff6600] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Updated Grid with New Locations */}
        <LocationCard/>

        {/* Updated Map: Focus on West London Areas */}
        {/* Updated Map: Focus on West London Areas */}
        {/* Updated Map: Focus on West London Areas using Lat/Lon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl h-[400px] relative bg-gray-100 group"
        >
          <div className="absolute inset-0 bg-[#ff6600]/5 pointer-events-none group-hover:bg-transparent transition-colors z-10" />
          <iframe
            // Lat/Lon Based Embed URL
            // Center point set to Notting Hill (51.5095, -0.2043)
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d19864.734812328135!2d-0.2043!3d51.5095!3m2!1i1024!2i768!4f13.1!2m1!1sMaida+Vale,+Notting+Hill,+Shepherds+Bush,+Hammersmith,+South+Kensington,+Fulham,+Chelsea!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
            className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Paul May Service Areas"
          ></iframe>
        </motion.div>
      </div>
  )
}

export default Map