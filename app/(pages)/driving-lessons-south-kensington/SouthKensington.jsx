"use client";

import { motion } from "framer-motion";
import ClientFAQ from "./ClientFAQ";
import Link from "next/link";

export default function DrivingLessonsSouthKensington() {
  const instructorPoints = [
    "• mirror checks",
    "• lane use",
    "• clutch work",
    "• road planning",
    "• parking",
    "• junction control",
    "• meeting traffic",
    "• mock test skill",
  ];

  const testHelpPoints = [
    "• weak points",
    "• parking",
    "• junctions",
    "• mirrors",
    "• mock tests",
    "• confidence on busy roads",
  ];

  const whyChooseUs = [
    "• calm teaching",
    "• local road knowledge",
    "• manual driving lessons",
    "• help for nervous learners",
    "• simple lesson structure",
    "• clear support before the test",
  ];

  return (
    <main className="font-sans bg-[#fafafa] text-gray-900">
      {/* HERO */}
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
            className="text-5xl md:text-7xl font-black uppercase italic text-white leading-[1.1] tracking-tight"
          >
            South <span className="text-[#ff6600]">Kensington</span>
          </motion.h1>

          <p className="text-gray-200 mt-4 font-bold uppercase tracking-widest text-sm italic">
            Driving Lessons in South Kensington
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-black">
          Driving Lessons in South Kensington
        </h1>

        <p className="text-lg">
          Need driving lessons in South Kensington? Clear teaching helps
          learners make real progress. A good lesson should feel calm, useful,
          and easy to follow.
        </p>

        <p className="text-lg">
          TM Drive School offers manual driving lessons in South Kensington for
          new learners, nervous learners, and people who need more work before a
          practical test. Lessons are planned around your level, so your road
          time has a clear purpose.
        </p>

        <p className="text-lg">
          If you want to check prices first, visit our{" "}
          <Link href="/price" className="text-[#ff6600] font-bold">
            price page
          </Link>
          . If you want to ask about lesson times, use our{" "}
          <Link href="/contact" className="text-[#ff6600] font-bold">
            contact page
          </Link>
          .
        </p>

        {/* Instructor */}
        <h2 className="text-2xl font-bold mt-8">
          Learn with a local driving instructor in South Kensington
        </h2>

        <p className="text-lg">
          South Kensington has busy roads, lane changes, side streets,
          junctions, and normal city traffic. Learning here can help you build
          strong road sense for daily driving in London.
        </p>

        <p className="text-lg">
          A local driving instructor in South Kensington can help you improve:
        </p>

        <ul className="pl-8 space-y-2">
          {instructorPoints.map((item, i) => (
            <li
              key={i}
              className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-black before:rounded-full before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="text-lg">
          Each lesson is set up to help you improve one step at a time.
        </p>

        {/* Manual */}
        <h2 className="text-2xl font-bold mt-8">
          Manual driving lessons in South Kensington
        </h2>

        <p className="text-lg">
          TM Drive School focuses on manual lessons. Manual tuition helps
          learners build strong car control and full licence choice.
        </p>

        <p className="text-lg">
          If you want lessons that are calm, clear, and planned around your
          current skill level, manual driving lessons can be a strong option.
        </p>

        {/* Test Help */}
        <h2 className="text-2xl font-bold mt-8">Help before test day</h2>

        <p className="text-lg">
          Some learners need full lessons from the start. Some learners need
          extra help before test day.
        </p>

        <p className="text-lg">
          If you are close to test standard, lessons can focus on:
        </p>

        <ul className="pl-8 space-y-2">
          {testHelpPoints.map((item, i) => (
            <li
              key={i}
              className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-black before:rounded-full before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="text-lg">
          If you want to ask about lesson options, use our{" "}
          <Link href="/contact" className="text-[#ff6600] font-bold">
            contact page
          </Link>
          .
        </p>

        {/* Why */}
        <h2 className="text-2xl font-bold mt-8">
          Why learners choose TM Drive School in South Kensington
        </h2>

        <ul className="pl-8 space-y-2">
          {whyChooseUs.map((item, i) => (
            <li
              key={i}
              className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-black before:rounded-full before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="text-lg">
          If you want proof before you book, read our{" "}
          <Link href="/testimonials" className="text-[#ff6600] font-bold">
            pupil reviews
          </Link>
          .
        </p>

        {/* Book */}
        <h2 className="text-2xl font-bold mt-8">
          Book driving lessons in South Kensington
        </h2>

        <p className="text-lg">
          If you want driving lessons in South Kensington with a calm local
          instructor, take the next step today.
        </p>

        <ul className="pl-8 space-y-2">
          <li>
            • Check{" "}
            <span className="text-[#ff6600] font-bold">lesson prices</span>
          </li>
          <li>
            • Read <span className="text-[#ff6600] font-bold">reviews</span>
          </li>
          <li>
            • Use the{" "}
            <span className="text-[#ff6600] font-bold">contact page</span> to
            ask about local cover
          </li>
        </ul>
      </section>

      <ClientFAQ />
    </main>
  );
}
