"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import WhatWeOffer from "./WhatWeOffer";

export default function AboutPage() {
  // AboutPage Schema
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.tmdriveschool.co.uk/about/#webpage",
    "url": "https://www.tmdriveschool.co.uk/about",
    "name": "About TM Drive School | Manual Driving Lessons West London",
    "description": "Learn about TM Drive School, led by Turon - a DVSA approved driving instructor. We offer expert manual driving lessons across West London with high first-time pass rates.",
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
          "name": "About",
          "item": "https://www.tmdriveschool.co.uk/about"
        }
      ]
    }
  };

  // Instructor Person Schema
  const instructorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Turon",
    "jobTitle": "DVSA Approved Driving Instructor",
    "worksFor": {
      "@type": "DrivingSchool",
      "name": "TM Drive School",
      "@id": "https://www.tmdriveschool.co.uk/#organization"
    },
    "url": "https://www.tmdriveschool.co.uk/about",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61587049696186",
      "https://www.instagram.com/tmdrive1"
    ],
    "knowsAbout": ["Manual Driving Instruction", "DVSA Test Preparation", "West London Driving Routes"],
    "description": "DVSA approved driving instructor with years of experience teaching manual driving in West London. High first-time pass rates and patient, calm instruction approach."
  };

  return (
    <>

      <main className="font-sans bg-[#fafafa] text-gray-900">
        {/* HERO */}
        <div className="relative h-[500px] w-full overflow-hidden">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="/images/hero-3.avif"
            className="w-full h-full object-cover"
            alt="TM Drive School About Us"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#fafafa]"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <motion.h1
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black uppercase italic text-white"
            >
              About <span className="text-[#ff6600]">Us</span>
            </motion.h1>

            <p className="text-gray-200 mt-4 font-bold uppercase tracking-widest text-sm italic">
              TM Drive School – Manual Driving Tuition in West London
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 mt-12 space-y-6">
          <p className="text-lg leading-relaxed">
            <span className="text-2xl font-black text-[#ff6600]">
              Welcome to TM Drive
            </span>{" "}
            Based in the heart of West London, TM Drive is a premier driving
            school dedicated to creating safe, confident, and skilled drivers. Led
            by Turon, a DVSA-approved expert, we offer high-standard manual
            tuition across West, NW, and SW London.
          </p>
          <p className="text-lg leading-relaxed">
            We specialize in manual driving lessons for all ages and experience
            levels. From your very first session to advanced motorway training,
            our mission is to provide a refreshing approach to driving—one that is
            calm under pressure and entirely focused on your success. At TM Drive,
            you aren’t just learning to pass a test; you’re gaining the confidence
            to master the road for years to come.
          </p>
        </section>

        <WhatWeOffer />
        
        <div className="flex justify-center mt-12 mb-20 px-4">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-left text-gray-800 max-w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl">
            Join the many successful drivers who started their journey with TM
            Drive. Book your session today and drive with confidence.
          </p>
        </div>
      </main>
    </>
  );
}