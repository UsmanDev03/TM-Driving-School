"use client";

import { motion } from "framer-motion";
import ClientFAQ from "./ClientFAQ";
import Link from "next/link";

export default function DrivingContent() {
  const instructorPoints = [
    "moving off and stopping",
    "clutch control",
    "gear changes",
    "meeting traffic",
    "roundabouts",
    "lane use",
    "parked cars",
    "junctions",
    "parking",
    "mock test work",
  ];

  const whyChooseUs = [
    "calm and clear teaching",
    "one-to-one manual lessons",
    "local road knowledge",
    "support for nervous learners",
    "lessons planned around your level",
    "help from first lesson to test day",
  ];

  return (
    <main className="font-sans bg-[#fafafa] text-gray-900">
      {/* HERO BANNER */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="/images/hero-3.avif"
          className="w-full h-full object-cover"
          alt="Driving"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#fafafa]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black uppercase italic text-white leading-[1.1] tracking-tight"
          >
            Ful<span className="text-[#ff6600]">Ham</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-200 mt-4 max-w-2xl font-bold uppercase tracking-widest text-sm italic"
          >
            Driving Lessons in Fulham
          </motion.p>
        </div>
      </div>

      {/* BODY CONTENT */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Driving Lessons in Fulham
        </h1>

        <p className="text-lg leading-relaxed">
          Need driving lessons in Fulham? A calm lesson, a clear plan, and a
          local instructor can help you make better progress. Good lessons
          should help you build skill step by step, not leave you confused at
          the end.
        </p>

        <p className="text-lg leading-relaxed">
          TM Drive School offers manual driving lessons in Fulham for new
          learners, part-trained learners, and nervous learners. Each lesson has
          a clear goal, so you know what you are working on and what comes next.
        </p>

        <p className="text-lg leading-relaxed">
          If you want to check costs first, view our driving lesson
          <Link href="/price" className="text-[#ff6600] font-bold">
            {" "}
            prices
          </Link>
          . If you want to get started, use our{" "}
          <Link href="/contact" className="text-[#ff6600] font-bold">
            contact page
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Learn with a local driving instructor in Fulham
        </h2>
        <p className="text-lg leading-relaxed">
          Fulham has a mix of busy roads, side streets, parked cars, lane
          changes, and city traffic. Learning in this area gives you useful road
          practice for daily driving in West London.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          A local driving instructor in Fulham can help you get used to:
        </p>

        {/* Instructor Points Grid Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
          {instructorPoints.map((point, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-1"
            >
              {point.trim()}
            </div>
          ))}
        </div>

        <p className="text-lg leading-relaxed mt-4">
          Each lesson builds on the last one. This helps you improve in a clear
          and steady way.
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Manual driving lessons in Fulham
        </h2>
        <p className="text-lg leading-relaxed">
          TM Drive School focuses on manual driving lessons. Manual lessons help
          you build strong car control and give you full licence choice later.
          <br />
          If you want simple lessons with clear teaching, manual tuition can be
          a good fit. Lessons are planned around your skill level, so you do not
          waste time on work you already know.
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Intensive driving course in Fulham
        </h2>
        <p className="text-lg leading-relaxed">
          Some learners want weekly lessons. Some want to move faster.
          <br />
          If you want a short and focused plan, an intensive driving course in
          Fulham may suit you. This can work well if you already have some
          lesson time or want more practice in a short period.
        </p>
        <p className="text-lg leading-relaxed">
          If you would like to ask about course options, use our{" "}
          <Link href="/contact" className="text-[#ff6600] font-bold">
            contact page
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Why learners choose TM Drive School in Fulham
        </h2>

        {/* Why Choose Us Grid Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-1"
            >
              {item.trim()}
            </div>
          ))}
        </div>

        <p className="text-lg leading-relaxed mt-4">
          If you want proof before you book, read our{" "}
          <Link href="/testimonials" className="text-[#ff6600] font-bold">
            pupil reviews
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Book driving lessons in Fulham
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          If you want driving lessons in Fulham with a calm local instructor,
          the next step is simple.
        </p>

        {/* Book Links Grid Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <Link
            href="/price"
            className="flex items-center gap-2 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-3 py-1.5 bg-white/50 hover:bg-white transition-colors"
          >
            View <span className="text-[#ff6600] ml-1">lesson prices</span>
          </Link>
          <Link
            href="/testimonials"
            className="flex items-center gap-2 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-3 py-1.5 bg-white/50 hover:bg-white transition-colors"
          >
            Read <span className="text-[#ff6600] ml-1">pupil reviews</span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-3 py-1.5 bg-white/50 hover:bg-white transition-colors"
          >
            Use <span className="text-[#ff6600] ml-1">contact page</span>to book
          </Link>
        </div>
      </section>

      <ClientFAQ />
    </main>
  );
}
