"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Calendar, ChevronLeft, Clock, CheckCircle2 } from "lucide-react";

export default function Blog4() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="bg-white min-h-screen pb-24 font-sans text-gray-900 w-full">
      <div className="max-w-5xl mx-auto px-6 pt-8">
        {/* NAVIGATION */}
        <nav className="mb-12">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-[#ff6600] font-black uppercase tracking-widest text-[10px]"
          >
            <ChevronLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to all stories
          </Link>
        </nav>

        <article>
          {/* HEADER */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1.1] mb-6 italic">
              How Many Driving Lessons <br />
              <span className="text-[#ff6600]">
                Do You Need Before Your Test ?
              </span>
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-400 font-bold uppercase tracking-widest text-[11px] border-y border-gray-100 py-5">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#ff6600]" /> MAY 1, 2026
              </div>
              <div className="text-gray-200">|</div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#ff6600]" /> 7 MIN READ
              </div>
            </div>
          </header>

          {/* HERO IMAGE */}
          <div className="mb-16 flex justify-center">
            <div className="relative aspect-video overflow-hidden rounded-[30px] w-full max-w-4xl shadow-sm">
              <img
                src="/images/blog4.png"
                alt="Driving Lesson Requirements 2026"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-12 px-4">
            <p className="text-lg leading-relaxed text-gray-600 font-medium">
              Most learners need around 40 to 50 hours of professional driving
              lessons before they are ready for their practical driving test.
              Many learners also benefit from extra private practice with family
              or friends.
              <br /> The exact number depends on your confidence, previous
              experience, lesson frequency, location, and how quickly you
              develop safe driving habits.
              <br /> For a learner in a busy area like London, Fulham, Notting
              Hill, or South Kensington, it can sometimes take longer because
              you need to become comfortable with traffic, bus lanes, cyclists,
              parked cars, narrow streets, and complex junctions.
            </p>
            {/* SECTION: AVERAGE HOURS TABLE */}
            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                How many hours does the average learner need?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                A typical learner may need:
              </p>

              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white uppercase text-[10px] tracking-[0.2em] italic">
                      <th className="px-6 py-4">Learner type</th>
                      <th className="px-6 py-4">Estimated lesson hours</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-bold text-gray-600 uppercase italic">
                    {[
                      {
                        type: "Fast learner with private practice",
                        hours: "25–35 hours",
                      },
                      { type: "Average beginner", hours: "40–50 hours" },
                      { type: "Nervous learner", hours: "50–70+ hours" },
                      {
                        type: "Learner in busy London areas",
                        hours: "45–65+ hours",
                      },
                      { type: "Refresher learner", hours: "5–15 hours" },
                      {
                        type: "Test-ready learner needing final preparation",
                        hours: "2–10 hours",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">{row.type}</td>
                        <td className="px-6 py-4 text-[#ff6600]">
                          {row.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed font-medium pt-4">
                There is no fixed number that guarantees you will pass. The goal
                is not just to complete a certain number of hours. The goal is
                to drive safely, independently, and confidently in different
                road conditions.
              </p>
            </section>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                Major Booking Changes Starting March 2026
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Several factors affect how many driving lessons you need before
                your test.
              </p>

              <div className="space-y-4 mt-8">
                <h3 className="text-xl font-black text-gray-900 uppercase italic flex items-center gap-3">
                  <span className="text-[#ff6600]">01.</span> Your previous
                  driving experience
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Complete beginners usually need more lessons because they are
                  learning everything from scratch: steering, clutch control,
                  observation, road positioning, mirrors, signals, junctions,
                  roundabouts, and parking. Learners who have already had
                  lessons or private practice may progress faster.
                </p>
              </div>
            </section>
            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h3 className="text-xl font-black text-gray-900 uppercase italic flex items-center gap-3">
                <span className="text-[#ff6600]">02.</span> Lesson frequency
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Taking one lesson every few weeks can slow your progress because
                you spend time relearning what you covered before. For faster
                progress, many learners do best with:
              </p>

              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white max-w-2xl mt-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white uppercase text-[10px] tracking-[0.2em] italic">
                      <th className="px-6 py-4">Schedule</th>
                      <th className="px-6 py-4">Best for</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-bold text-gray-600 uppercase italic">
                    <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">
                        1 lesson per week
                      </td>
                      <td className="px-6 py-4 text-[#ff6600]">
                        Steady learners
                      </td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">
                        2 lessons per week
                      </td>
                      <td className="px-6 py-4 text-[#ff6600]">
                        Faster progress
                      </td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">
                        Intensive course
                      </td>
                      <td className="px-6 py-4 text-[#ff6600]">
                        Learners with a test date or deadline
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">
                        Extra lessons before test
                      </td>
                      <td className="px-6 py-4 text-[#ff6600]">
                        Final confidence and correction
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h3 className="text-xl font-black text-gray-900 uppercase italic flex items-center gap-3">
                <span className="text-[#ff6600]">03.</span> Confidence and
                nerves
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Nervous learners often need more time, and that is completely
                normal. Driving is a practical skill, and confidence builds
                through repetition. If you feel anxious, the best approach is
                not to rush. Work with an instructor who gives calm feedback,
                explains mistakes clearly, and helps you practise difficult
                situations gradually.
              </p>
            </section>
            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h3 className="text-xl font-black text-gray-900 uppercase italic flex items-center gap-3">
                <span className="text-[#ff6600]">04.</span> Where you learn to
                drive
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Learning in London can be more demanding than learning in
                quieter areas. Learners in
                <span className="text-gray-900 font-bold">
                  {" "}
                  Fulham, Notting Hill, South Kensington, Chelsea, and wider
                  West London
                </span>{" "}
                often face:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  "Heavy traffic",
                  "Narrow residential roads",
                  "Cyclists and pedestrians",
                  "Bus lanes",
                  "Complex junctions",
                  "Difficult parking situations",
                  "Stop-start driving",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-2 bg-gray-50/50"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600 leading-relaxed font-medium pt-4">
                This can make lessons more challenging, but it also prepares you
                well for real driving after you pass.
              </p>
            </section>
            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h3 className="text-xl font-black text-gray-900 uppercase italic flex items-center gap-3">
                <span className="text-[#ff6600]">05.</span> Private practice
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Private practice can reduce the number of professional lessons
                you need, but only if it is done safely and correctly. It is
                most useful for practising:
              </p>

              {/* Using the grid point styling you requested */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  "Steering control",
                  "Moving off and stopping",
                  "General road awareness",
                  "Parking",
                  "Confidence on familiar roads",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-2 bg-gray-50/50"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600 leading-relaxed font-medium pt-4">
                However, private practice should not replace professional
                lessons. A qualified instructor can identify bad habits early
                and prepare you properly for the driving test standard.
              </p>
            </section>
            {/* SECTION: TEST READINESS */}
            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                How do you know you are ready for your driving test?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                You may be ready for your test when you can drive independently
                without regular help from your instructor. Signs you are
                test-ready include:
              </p>

              {/* TEST-READY TABLE */}
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white mt-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white uppercase text-[10px] tracking-[0.2em] italic">
                      <th className="px-6 py-4">Skill</th>
                      <th className="px-6 py-4">Test-ready standard</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-bold text-gray-600 uppercase italic">
                    {[
                      {
                        skill: "Moving off and stopping",
                        std: "Smooth and controlled",
                      },
                      {
                        skill: "Mirrors and observations",
                        std: "Consistent and timely",
                      },
                      {
                        skill: "Junctions",
                        std: "Safe approach and good judgement",
                      },
                      {
                        skill: "Roundabouts",
                        std: "Correct lane choice and signalling",
                      },
                      { skill: "Parking", std: "Controlled and accurate" },
                      {
                        skill: "Speed control",
                        std: "Appropriate for road conditions",
                      },
                      {
                        skill: "Independent driving",
                        std: "Confident following signs or sat nav",
                      },
                      {
                        skill: "Hazard awareness",
                        std: "Early recognition and safe response",
                      },
                      {
                        skill: "Mistakes",
                        std: "You can correct minor errors safely",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-gray-900">{row.skill}</td>
                        <td className="px-6 py-4 text-[#ff6600]">{row.std}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                If your instructor still has to regularly help with braking,
                steering, observations, or decision-making, you probably need
                more practice before booking or taking the test.
              </p>
              {/* SECTION: BOOKING STRATEGY */}
              <section className="space-y-6 pt-10 border-t border-gray-100">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                  Should you book your test before finishing lessons?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  You can book your driving test before you are fully ready,
                  especially because waiting times can be long. However, you
                  should only take the test when your instructor agrees that you
                  are at test standard.
                </p>

                <h3 className="text-xl font-black text-gray-900 uppercase italic mt-8 mb-4">
                  A good strategy is:
                </h3>

                {/* TWO-COLUMN GRID TO MATCH IMAGE_4C343D.PNG */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Start lessons",
                    "Build core driving skills",
                    "Ask your instructor when you are close to the test standard",
                    "Book your test",
                    "Use the final weeks for mock tests and weak-area practice",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-2 bg-gray-50/50"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-600 leading-relaxed font-medium pt-4">
                  Following this path ensures you don't waste money on a test
                  you aren't prepared for while still managing London's long
                  waiting lists.
                </p>
              </section>
            </section>
            {/* SECTION: INTENSIVE COURSES */}
            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                Are intensive driving courses faster?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Yes, intensive driving courses can help you reach test standards
                faster, especially if you already have some driving experience.
                They work well for learners who:
              </p>

              {/* GRID STYLING TO MATCH IMAGE_4C3097.PNG */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Have a test date coming soon",
                  "Want to learn quickly",
                  "Can commit to several lessons per week",
                  "Already understand basic driving skills",
                  "Need focused test preparation",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-2 bg-gray-50/50"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                However, complete beginners may still need a realistic number of
                hours. A short course is not always enough if you are starting
                from zero.
              </p>
            </section>
          </div>
          {/* SECTION: FINAL TEST PREPARATION */}
          <section className="space-y-6 pt-10 border-t border-gray-100">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
              How many lessons should you take before the test itself?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              In the final 1–2 weeks before your practical test, it is usually
              helpful to take extra lessons focused on:
            </p>

            {/* GRID STYLING TO MATCH IMAGE_4C3097.PNG */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Mock tests",
                "Manoeuvres",
                "Roundabouts",
                "Junctions",
                "Independent driving",
                "Test routes",
                "Any recurring mistakes",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-2 bg-gray-50/50"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Many learners take{" "}
              <span className="text-[#ff6600] font-black">2 to 5 final</span>{" "}
              lessons before test day, depending on their confidence.
            </p>
          </section>

          {/* SECTION: FINAL ANSWER */}
          <section className="pt-10 border-t border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 uppercase italic mb-6">
              Final answer
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Most learners need{" "}
              <span className="text-[#ff6600] font-black">40 to 50 hours</span>{" "}
              of professional driving lessons before taking their practical
              driving test. Some need fewer, especially with private practice,
              while nervous learners or learners in busy London areas may need
              more.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-medium mt-6">
              The best measure is not the number of lessons. The best measure is
              whether you can drive safely, independently, and confidently
              without regular help from your instructor.
            </p>
          </section>

          {/* SEPARATE SECTION */}
          <section className="mt-12 pt-10 border-t border-gray-100">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic">
              Ready to find out how many lessons you need?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium mt-4">
              Book a driving lesson with{" "}
              <a
                href="https://www.tmdriveschool.co.uk/"
                className="text-[#ff6600] font-black hover:underline underline-offset-4"
              >
                TM Drive School
              </a>{" "}
              in Fulham, Notting Hill, South Kensington, or nearby West London
              areas. Our instructor can assess your current level and recommend
              the right plan for your test.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
