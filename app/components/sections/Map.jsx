"use client";

import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { locations_map } from "@/utils/RawData";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(m => m.Popup), { ssr: false });

const Map = () => {
  const icon = typeof window !== 'undefined' ? 
    new (require('leaflet')).Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    }) : null;

  return (
    <div className="max-w-7xl mx-auto px-6 mt-12 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">
          AREAS <span className="text-[#ff6600]">COVERED</span>
        </h2>
        <div className="w-20 h-1.5 bg-[#ff6600] mx-auto mt-4 rounded-full"></div>
      </div>

     <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  // Added z-0 to push the map behind other elements
  className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl h-[500px] flex-shrink-0 relative bg-gray-100 z-0"
>
        <MapContainer 
          center={[51.5095, -0.2043]} 
          zoom={12} 
          scrollWheelZoom={false} 
          style={{ height: "500px", width: "100%" }} // Explicit height here
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {locations_map?.map((loc, index) => (
            <Marker key={index} position={[loc.lat, loc.lng]} icon={icon}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>
    </div>
  );
};

export default Map;