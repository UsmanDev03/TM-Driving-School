"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ChevronLeft, Clock } from "lucide-react";

const blog = {
  title: {
    black: "Mastering the",
    orange2: "Isleworth & Ashford Routes:",
    sub: "tm-drive",
  },
  date: "MARCH 20, 2026",
  readTime: "6 MIN READ",
  mainImage: "/images/hero-3.avif",
  lessonHighlights: [
    "Clutch Control & Moving Off",
    "Mastering Roundabouts",
    "Meeting Heavy Traffic",
    "Reverse Parking Maneuvers",
    "Mock Test Preparation",
    "Local Test Route Knowledge",
  ],
};

export default function SingleBlogPage() {
  return (
    <main className="bg-[#fafafa] min-h-screen pb-24 font-sans text-gray-900 w-full">
      {/* Outer wrapper - mt-0 and pt-6/8 reduces the large gap at the very top */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16 pt-8">
        
        {/* Breadcrumb - Removed mt-6 to pull it closer to the top */}
        <nav className="mb-12">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-[#ff6600] font-black uppercase tracking-widest text-[10px] hover:opacity-80 transition-opacity"
          >
            <ChevronLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to all stories
          </Link>
        </nav>

        <article>
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1.1] mb-6">
              <span className="text-black italic">{blog.title.black}</span>{" "}
              <span className="text-[#ff6600]">{blog.title.orange2}</span>
              <br />
              <span className="text-black text-2xl md:text-3xl tracking-tight block mt-2">
                {blog.title.sub}
              </span>
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-400 font-bold uppercase tracking-widest text-[11px] border-y border-gray-100 py-5">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#ff6600]" /> {blog.date}
              </div>
              <div className="text-gray-200">|</div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#ff6600]" /> {blog.readTime}
              </div>
            </div>
          </header>

          {/* Centered Image */}
          <div className="mb-16 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video overflow-hidden rounded-[30px] w-full sm:w-[90%] md:w-[85%]"
            >
              <img
                src={blog.mainImage}
                alt="Driving School Car"
                className="w-full h-full object-cover shadow-lg"
              />
            </motion.div>
          </div>

          {/* Content Body */}
          <div className="space-y-12 max-w-3xl mx-auto mt-16">
            <section className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                Mastering the Isleworth & Ashford Routes
              </h2>

              <p className="text-lg leading-relaxed text-gray-700">
                Need driving lessons that actually get you to test standard? A calm environment, a clear training plan, and a local instructor are the keys to making real progress.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                Our manual driving lessons are structured around your specific level, whether you are a complete beginner or looking for a mock test to polish your skills.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                If you want to check costs first, view our driving lesson
                <Link
                  href="/price"
                  className="text-[#ff6600] font-bold ml-1 hover:underline underline-offset-4 decoration-2"
                >
                  prices
                </Link>
                . If you are ready to start, head over to our
                <Link
                  href="/contact"
                  className="text-[#ff6600] font-bold ml-1 hover:underline underline-offset-4 decoration-2"
                >
                  contact page
                </Link>
                .
              </p>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-[3rem] shadow-sm border border-gray-100 max-w-4xl mx-auto mt-12">
              <h3 className="text-2xl font-black mb-8 uppercase italic text-[#0f172a] border-l-8 border-[#ff6600] pl-5">
                WHAT YOU'LL MASTER
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {blog.lessonHighlights.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-900 font-bold text-[12px] uppercase border-l-4 border-[#ff6600] pl-4 py-4 bg-[#fafafa] hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}