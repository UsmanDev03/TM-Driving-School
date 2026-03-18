"use client";

import { motion } from "framer-motion";
import ClientFAQ from "./ClientFAQ";
import Link from "next/link";

export default function DrivingLessonsMaidaVale() {
  const instructorPoints = [
    "• moving off",
    "• stopping well",
    "• clutch control",
    "• mirror checks",
    "• parking",
    "• turning left and right",
    "• road position",
    "• meeting traffic",
    "• basic mock test work",
  ];

  const extraPracticePoints = [
    "• parking",
    "• busy roads",
    "• junctions",
    "• clutch work",
    "• road confidence",
  ];

  const whyChooseUs = [
    "• calm one-to-one teaching",
    "• manual driving lessons",
    "• local road knowledge",
    "• simple lesson plans",
    "• support for nervous learners",
    "• help before test day",
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
            Maida <span className="text-[#ff6600]">Vale</span>
          </motion.h1>

          <p className="text-gray-200 mt-4 font-bold uppercase tracking-widest text-sm italic">
            Driving Lessons in Maida Vale
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-black">
          Driving Lessons in Maida Vale
        </h1>

        <p className="text-lg">
          Need driving lessons in Maida Vale? A clear lesson plan can help you
          use your time well and build skill without extra stress. Good driving
          lessons should feel simple, useful, and easy to follow.
        </p>

        <p className="text-lg">
          TM Drive School offers manual driving lessons in Maida Vale for new
          learners, part trained learners, and drivers who want more road
          practice before test day. Each lesson is built around your level, so
          you can work on the right things at the right time.
        </p>

        <p className="text-lg">
          If you want to see lesson prices first, visit our{" "}
          <Link href="/price" className="text-[#ff6600] font-bold">
            price page
          </Link>
          . If you want to ask about local cover, use our{" "}
          <Link href="/contact" className="text-[#ff6600] font-bold">
            contact page
          </Link>
          .
        </p>

        {/* Instructor */}
        <h2 className="text-2xl font-bold mt-8">
          Learn with a local driving instructor in Maida Vale
        </h2>

        <p className="text-lg">
          Maida Vale has a mix of local roads, parked cars, junctions, and
          normal West London traffic. Learning in this area can help you build
          useful road skill for real driving.
        </p>

        <p className="text-lg">
          A local driving instructor in Maida Vale can help you work on:
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
          Lessons are kept clear and steady. This helps learners make progress
          without feeling rushed.
        </p>

        {/* Manual */}
        <h2 className="text-2xl font-bold mt-8">
          Manual driving lessons in Maida Vale
        </h2>

        <p className="text-lg">
          TM Drive School focuses on manual tuition. Manual lessons help
          learners build strong car control and give more licence choice later.
        </p>

        <p className="text-lg">
          If you want to learn in a calm way and build skill step by step,
          manual driving lessons can be a good fit.
        </p>

        {/* Extra Practice */}
        <h2 className="text-2xl font-bold mt-8">
          Refresher and extra practice lessons
        </h2>

        <p className="text-lg">
          Some learners need a full course. Some need a few more lessons to
          build trust before a practical test.
        </p>

        <p className="text-lg">
          Extra lessons can help if you want more work on:
        </p>

        <ul className="pl-8 space-y-2">
          {extraPracticePoints.map((item, i) => (
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
          Why learners choose TM Drive School in Maida Vale
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
          If you want learner proof before you book, read our{" "}
          <Link href="/testimonials" className="text-[#ff6600] font-bold">
            pupil reviews
          </Link>
          .
        </p>

        {/* Book */}
        <h2 className="text-2xl font-bold mt-8">
          Book driving lessons in Maida Vale
        </h2>

        <p className="text-lg">
          If you want driving lessons in Maida Vale with a calm local
          instructor, take the next step today.
        </p>

        <ul className="pl-8 space-y-2">
          <li>
            • View{" "}
            <span className="text-[#ff6600] font-bold">lesson prices</span>
          </li>
          <li>
            • Read{" "}
            <span className="text-[#ff6600] font-bold">pupil reviews</span>
          </li>
          <li>
            • Use our{" "}
            <span className="text-[#ff6600] font-bold">contact page</span> to
            ask about lesson times
          </li>
        </ul>
      </section>

      <ClientFAQ />
    </main>
  );
}
