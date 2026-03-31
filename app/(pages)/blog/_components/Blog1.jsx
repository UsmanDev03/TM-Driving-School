"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Calendar, ChevronLeft, Clock } from "lucide-react";

export default function Blog1() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Can my instructor still see my booking?", a: "Yes. Give us your number and we can check our diary." },
    { q: "What if I get ill?", a: "You can get a refund if you give 10 working days' notice." },
    { q: "Are the rules the same for all cars?", a: "Yes, these rules apply to both manual and automatic car tests." },
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
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to all stories
          </Link>
        </nav>

        <article>
          {/* HEADER */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1.1] mb-6 italic">
              New Driving Test Rules for <br />
              <span className="text-[#ff6600]">West London Learners in 2026</span>
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
                src="/images/hero-3.avif"
                alt="Driving Test Rules 2026"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="max-w-3xl mx-auto space-y-12 px-4">
            <section className="space-y-8 pt-10">
              <p className="text-lg leading-relaxed text-gray-600 font-medium">
                The way you book a driving test in the UK just changed. If you
                live in Notting Hill or nearby, you must know these facts. The
                DVSA wants to stop people from reselling test slots. They also
                want to make sure you are ready to pass before you book.
              </p>

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                  Major Booking Changes Starting March 2026
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The government has made it harder to move your test date. This
                  is to stop the long queues for tests in London.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#ff6600] uppercase italic">
                  The Two-Move Limit on Test Dates
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From 31 March 2026, you can only change your test date two
                  times. Before, you could move it six times. If you try to move
                  it a third time, the system will cancel your test. You will
                  lose the money you paid. Do not book a test just to "save a
                  spot." Wait until we say you are ready for your manual driving
                  lessons.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#ff6600] uppercase italic">
                  You Must Book Your Own Test
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From 12 May 2026, only the learner can book the test. Driving
                  schools and apps cannot do it for you. You have to tick a box
                  to say you are booking for yourself. This stops bots from
                  taking all the slots in West London.
                </p>
              </div>
            </section>

            {/* GEOGRAPHIC RESTRICTIONS */}
            <section className="space-y-6 pt-10">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic">
                Geographic Restrictions on Test Centres
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From 9 June 2026, you can only move your test to a centre near
                your first choice. You can pick from the three closest sites.
                You cannot book a test in a quiet town and then move it to a
                busy place like Greenford or Isleworth later.
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
                        <span className="font-semibold text-gray-900">{faq.q}</span>
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
                        {isOpen && <p className="text-gray-700 text-lg">{faq.a}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* CONCLUSION */}
            <section className="space-y-6 pt-4">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic">
                Conclusion: <span className="text-[#ff6600]">Getting Ready for Your 2026 Test</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The new DVSA rules mean you must be sure of your skills before
                you book. In West London, test spots are valuable. We help you
                check your progress so you don't waste your two chances to move
                a date. If you want to pass without the stress of these new
                rules, get in touch with us today.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}