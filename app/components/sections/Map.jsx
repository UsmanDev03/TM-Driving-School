"use client";

import { motion } from "framer-motion";
import LocationCard from "./LocationCard";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { locations_map } from "@/utils/RawData";

const containerStyle = {
  width: "100%",
  height: "100%", // Iframe ki tarah container full height lega
};

// West London ka center point (Notting Hill area)
const center = { lat: 51.5095, lng: -0.2043 };

const Map = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-24 space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">
          AREAS <span className="text-[#ff6600]">COVERED</span>
        </h2>
        <div className="w-20 h-1.5 bg-[#ff6600] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grid List */}
      <LocationCard />

      {/* Google Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl h-[500px] relative bg-gray-100 group"
      >
        <div className="absolute inset-0 bg-[#ff6600]/5 pointer-events-none group-hover:bg-transparent transition-colors z-10" />
        
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            options={{
              styles: [
                { featureType: "all", elementType: "all", stylers: [{ saturation: -100 }] }
              ],
              disableDefaultUI: false,
            }}
          >
            {locations_map?.map((loc, index) => (
              <MarkerF
                key={index}
                position={{ lat: loc.lat, lng: loc.lng }}
                title={loc.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </motion.div>
    </div>
  );
};

export default Map;