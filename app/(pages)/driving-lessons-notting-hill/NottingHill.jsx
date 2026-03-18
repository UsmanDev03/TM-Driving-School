"use client";

import { motion } from "framer-motion";
import ClientFAQ from "./ClientFAQ";
import Link from "next/link";

export default function DrivingLessonsNottingHill() {
  const instructorPoints = [
    "• clutch control",
    "• safe mirror use",
    "• lane position",
    "• meeting traffic",
    "• junction work",
    "• parking",
    "• planning ahead",
    "• mock test skills",
  ];

  const whyChooseUs = [
    "• calm one-to-one lessons",
    "• simple and clear teaching",
    "• local road knowledge",
    "• support for nervous learners",
    "• help before test day",
    "• lesson plans built around your level",
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
          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black uppercase italic text-white leading-[1.1]"
          >
            <span className="tracking-wide md:tracking-wider">Notting</span>{" "}
            <span className="text-[#ff6600] tracking-wide md:tracking-wider">
              Hill
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-200 mt-4 max-w-2xl font-bold uppercase tracking-widest text-sm italic"
          >
            Driving Lessons in Notting Hill
          </motion.p>
        </div>
      </div>

      {/* BODY CONTENT */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Driving Lessons in Notting Hill
        </h1>

        <p className="text-lg leading-relaxed">
          Need driving lessons in Notting Hill? A good start can save time,
          money, and stress. Clear teaching helps learners build good habits
          early and avoid slow progress later.
        </p>

        <p className="text-lg leading-relaxed">
          TM Drive School offers manual driving lessons in Notting Hill for new
          learners, part-trained learners, and nervous learners. Each lesson is
          built around your level, so you can move forward at a steady pace.
        </p>

        <p className="text-lg leading-relaxed">
          If you want to see lesson costs first, visit our{" "}
          <Link href="/price" className="text-[#ff6600] font-bold">
            price page
          </Link>
          . If you are ready to ask about local cover, use our{" "}
          <Link href="/contact" className="text-[#ff6600] font-bold">
            contact page
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Learn with a local driving instructor in Notting Hill
        </h2>
        <p className="text-lg leading-relaxed">
          Notting Hill has busy streets, side roads, tight parking spaces, and
          normal London traffic. These roads can give learners strong practice
          when lessons are clear and well planned.
        </p>
        <p className="text-lg leading-relaxed">
          A local driving instructor in Notting Hill can help you with:
        </p>

        {/* Instructor Points */}
        <ul className="pl-8 space-y-2">
          {instructorPoints.map((point, idx) => (
            <li
              key={idx}
              className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-black before:content-[''] pl-4"
            >
              {point}
            </li>
          ))}
        </ul>

        <p className="text-lg leading-relaxed mt-2">
          Lessons are kept simple and focused. That helps you leave each lesson
          with clear progress.
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Manual driving lessons in Notting Hill
        </h2>
        <p className="text-lg leading-relaxed">
          TM Drive School offers manual lessons for learners who want full
          licence choice and strong car control.
          <br />
          Manual lessons can suit learners who want to build confidence with
          gears, clutch work, and road planning from the start. A calm teaching
          style can make a big difference, especially for new learners.
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Intensive driving course in Notting Hill
        </h2>
        <p className="text-lg leading-relaxed">
          Some learners want to spread lessons out. Some want more time on the
          road in a shorter period.
          <br />
          If you want a shorter learning plan, ask about an intensive driving
          course through our{" "}
          <Link href="/contact" className="text-[#ff6600] font-bold">
            contact page
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Why learners choose TM Drive School in Notting Hill
        </h2>

        {/* Why Choose Us List */}
        <ul className="pl-8 space-y-2">
          {whyChooseUs.map((item, idx) => (
            <li
              key={idx}
              className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-black before:content-[''] pl-4"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="text-lg leading-relaxed mt-2">
          If you want learner proof before you book, read our{" "}
          <Link href="/testimonials" className="text-[#ff6600] font-bold">
            pupil reviews
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Book driving lessons in Notting Hill
        </h2>
        <p className="text-lg leading-relaxed">
          If you want driving lessons in Notting Hill with a calm local
          instructor, take the next step today.
        </p>

        {/* Book Links */}
        <ul className="pl-8 space-y-2">
          <li className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-black before:content-[''] pl-4">
            <Link href="/price">
              • View{" "}
              <span className="font-bold text-[#ff6600]">lesson prices</span>
            </Link>
          </li>
          <li className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-black before:content-[''] pl-4">
            <Link href="/testimonials">
              • Read{" "}
              <span className="font-bold text-[#ff6600]">pupil reviews</span>
            </Link>
          </li>
          <li className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-black before:content-[''] pl-4">
            <Link href="/contact">
              • Use the{" "}
              <span className="font-bold text-[#ff6600]">contact page</span> to
              ask about lesson times
            </Link>
          </li>
        </ul>
      </section>

      <ClientFAQ />
    </main>
  );
}
