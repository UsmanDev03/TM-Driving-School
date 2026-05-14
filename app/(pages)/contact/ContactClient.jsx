"use client";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import Map from "@/app/components/sections/Map";
import ContactForm from "@/app/components/sections/ContactForm";

const ContactClient = () => {
  // ContactPage Schema
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.tmdriveschool.co.uk/contact/#webpage",
    "url": "https://www.tmdriveschool.co.uk/contact",
    "name": "Contact TM Drive School | Book Manual Driving Lessons West London",
    "description": "Contact TM Drive School for expert manual driving lessons in West London. Call +44 7949 488211 or fill out our form to book your first lesson.",
    "isPartOf": {
      "@id": "https://www.tmdriveschool.co.uk/#website"
    },
    "about": {
      "@id": "https://www.tmdriveschool.co.uk/#organization"
    },
    "publisher": {
      "@id": "https://www.tmdriveschool.co.uk/#organization"
    },
    "inLanguage": "en-GB",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.tmdriveschool.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://www.tmdriveschool.co.uk/contact"
        }
      ]
    }
  };

  // ContactPoint Schema (specific to contact page)
  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "telephone": "+447949488211",
    "contactType": "customer service",
    "email": "info@tmdriveschool.co.uk",
    "availableLanguage": "English",
    "areaServed": "West London, UK",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
      />

      <div className="bg-white min-h-screen pb-20">
        {/* Toaster Configuration */}
        <Toaster 
          position="top-right" 
          reverseOrder={false} 
          toastOptions={{
            duration: 3000, 
            style: {
              background: '#1f2937',
              color: '#fff',
              borderRadius: '16px',
              fontSize: '14px',
              fontWeight: '600',
              border: '1px solid #ff6600',
            },
            success: {
              iconTheme: {
                primary: '#ff6600',
                secondary: '#fff',
              },
            },
          }}
        />

        {/* Hero Section */}
        <div className="relative h-[450px] md:h-[500px] w-full overflow-hidden bg-gray-900">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: "url('/images/hero-3.avif')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-white"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 text-[#ff6600] font-bold tracking-[0.2em] uppercase text-sm mb-4"
            >
              <div className="h-[2px] w-8 bg-[#ff6600]"></div>
              Let's Get On The Road
              <div className="h-[2px] w-8 bg-[#ff6600]"></div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none"
            >
              Contact <span className="text-[#ff6600] ml-2">Us</span>
            </motion.h1>
          </div>
        </div>

        <ContactForm />
        <Map />
      </div>
    </>
  );
};

export default ContactClient;