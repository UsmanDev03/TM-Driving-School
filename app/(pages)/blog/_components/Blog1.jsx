"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Calendar, ChevronLeft, Clock } from "lucide-react";

export default function Blog1() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Can my instructor still see my booking?",
      a: "Yes. If you share your booking details, your instructor can review your test date and help you plan accordingly.",
    },
    {
      q: "What if I get ill before my test?",
      a: "You can request a refund or reschedule if you provide at least 10 working days notice.",
    },
    {
      q: "Are the new rules the same for manual and automatic tests?",
      a: "Yes. These DVSA changes apply to all driving tests, regardless of vehicle type.",
    },
  ];

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
              New Driving Test Rules for <br />
              <span className="text-[#ff6600]">
                West London Learners in 2026
              </span>
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-400 font-bold uppercase tracking-widest text-[11px] border-y border-gray-100 py-5">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#ff6600]" /> MARCH 31, 2026
              </div>
              <div className="text-gray-200">|</div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#ff6600]" /> 5 MIN READ
              </div>
            </div>
          </header>

          {/* HERO IMAGE */}
          <div className="mb-16 flex justify-center">
            <div className="relative aspect-video overflow-hidden rounded-[30px] w-full max-w-4xl shadow-sm">
              <img
                src="/images/blog1.webp"
                alt="Driving Test Rules 2026"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="max-w-3xl mx-auto space-y-12 px-4">
            <p className="text-lg leading-relaxed text-gray-600 font-medium">
              The way you book a driving test in the UK has changed in 2026. If
              you live in Notting Hill, Shepherd’s Bush, or nearby West London
              areas, these updates are very important to understand before you
              book your test.
              <br />
              The DVSA has introduced new rules to reduce waiting times, prevent
              test slot misuse, and ensure learners are fully ready before
              booking a practical test. For many students, this means planning
              lessons more carefully and working closely with their instructor
              from a trusted driving school London.
            </p>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                Why These Changes Have Been Introduced
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Over the past few years, driving test demand in London has
                increased significantly. Many learners were booking tests too
                early or rescheduling multiple times, which created long waiting
                lists and limited availability.
              </p>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
                  The DVSA now aims to:
                </p>

                {/* BRANDED GRID LIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Reduce test booking abuse",
                    "Stop automated systems and bots",
                    "Ensure learners are test ready before booking",
                    "Improve fairness for all candidates",
                    "Reduce long waiting times in busy areas like West London",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-2 bg-gray-50/50"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                These changes are designed to make the system more efficient,
                but they also mean learners must be more prepared than before.
              </p>
            </section>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                Major Booking Changes Starting March 2026
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From March 2026, several new rules will affect how learners book
                and manage their driving tests. These updates are especially
                important for learners in high demand areas like London. The
                biggest changes include stricter rescheduling limits, personal
                booking requirements, and location restrictions.
                <br />
                At our driving school London, we always advise learners to
                understand these rules before planning their test date to avoid
                unnecessary stress or loss of fees.
              </p>
            </section>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                The Two Move Limit on Test Dates
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From 31 March 2026, learners can only change their driving test
                date two times. Previously, learners were allowed to move their
                test up to six times.
              </p>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
                  What this means for you:
                </p>

                {/* BRANDED GRID LIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Choose your test date more carefully",
                    "Only two chances to reschedule",
                    "A third change will cancel your booking",
                    "You may lose your test fee completely",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-2 bg-gray-50/50"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                This rule is very important for learners in West London, where
                test centres are already in high demand. Because of this change,
                it is strongly recommended that you only book your test when
                your instructor confirms you are fully ready during your manual
                driving lessons or automatic training sessions.
              </p>
            </section>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                You Must Book Your Own Test
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From 12 May 2026, only the learner is allowed to book their
                driving test. Driving schools, instructors, and third party apps
                can no longer complete bookings on your behalf.
              </p>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
                  Key points of this rule:
                </p>

                {/* BRANDED GRID LIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "You must log in and book yourself",
                    "You must confirm you are the actual learner",
                    "You must manually select your test date",
                    "You must prevent automated bookings or bots",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-2 bg-gray-50/50"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                This change has been introduced to stop unfair booking systems
                that were blocking test availability in busy London centres.
                Even though instructors cannot book for you, a professional
                driving school London can still guide you on the best time to
                book based on your progress.
              </p>
            </section>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic">
                Geographic Restrictions on Test Centres
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From 9 June 2026, learners will face new restrictions when
                changing test centres. You will only be allowed to switch your
                test to one of the three nearest test centres from your original
                booking location.
              </p>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
                  This means:
                </p>

                {/* BRANDED GRID LIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "No switching to distant quieter towns",
                    "Only nearby test centres allowed",
                    "Less flexibility in changing locations",
                    "More consistency in test environments",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-2 bg-gray-50/50"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                For example, if you book in West London, you cannot later move
                your test to a quieter rural area. This ensures fairness and
                equal difficulty levels across all candidates. This is
                especially important for learners who prepare through real
                traffic conditions during their driving lessons in London.
              </p>
            </section>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic">
                How These Rules Affect Learners in West London
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For learners in areas like Notting Hill, Ladbroke Grove, and
                Shepherd’s Bush, these changes mean:
              </p>

              {/* BRANDED GRID LIST */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Less flexibility in test planning",
                  "More importance on lesson readiness",
                  "Higher pressure to pass first or second attempt",
                  "Need for better preparation before booking",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-2 bg-gray-50/50"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                This is why it is more important than ever to train with an
                experienced instructor who understands local test routes and
                DVSA expectations.
              </p>
            </section>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                How to Prepare for These Changes
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To stay ahead of the new system, learners should focus on proper
                preparation rather than early booking. Here are some key tips:
              </p>

              {/* BRANDED GRID LIST */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Only book your test when your instructor confirms readiness",
                  "Take consistent lessons to build confidence",
                  "Practise common test routes in West London",
                  "Focus on weak areas like roundabouts and parking",
                  "Avoid rushing your test booking",
                  "Follow your instructor’s feedback carefully",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase border-l-4 border-[#ff6600] pl-4 py-2 bg-gray-50/50"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                A structured learning approach is the best way to avoid losing
                test chances under the new rules.
              </p>
            </section>

            {/* FAQ */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-xl shadow-sm overflow-hidden border transition-colors duration-300 ${
                        isOpen
                          ? "border-2 border-[#ff6600]"
                          : "border border-gray-200"
                      }`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className={`w-full text-left px-6 py-4 flex justify-between items-center transition-colors duration-300 ${
                          isOpen
                            ? "bg-[#ff6600]/10"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <span className="font-semibold text-gray-900">
                          {faq.q}
                        </span>
                        <span
                          className={`text-xl font-bold transform transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          +
                        </span>
                      </button>
                      <div
                        className={`px-6 overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-96 py-4 bg-white" : "max-h-0"
                        }`}
                      >
                        {isOpen && (
                          <p className="text-gray-700 text-lg">{faq.a}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* CONCLUSION */}
            <section className="space-y-6 pt-16 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic">
                Conclusion:{" "}
                <span className="text-[#ff6600]">
                  Getting Ready for Your 2026 Test
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The new DVSA driving test rules in 2026 mean learners must be
                more prepared, more focused, and more confident before booking
                their test.
                <br />
                
                In West London, where test demand is already very high, careful
                planning is now essential. You only get limited chances to
                change your booking, so preparation matters more than ever.
                <br />
                
                With the right guidance from a professional driving school
                London, you can track your progress properly, avoid unnecessary
                booking mistakes, and make sure you are fully ready before
                taking your test.
                <br />
               
                If you want to pass with confidence and avoid stress under the
                new system, start your training early, follow your instructor’s
                advice, and book your test only when you are truly ready.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
