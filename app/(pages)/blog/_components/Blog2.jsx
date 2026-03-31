"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Calendar, ChevronLeft, Clock } from "lucide-react";

export default function Blog2() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Will my test route change?", a: "Examiners know about the roadworks. They pick roads that are clear but still test your skill." },
    { q: "Is it better to learn at night?", a: "We offer evening lessons when the roads are a bit more quiet." },
    { q: "How long do the works last?", a: "The main work ends in April, but weekend closures last until July 2026." },
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
              Driving Near the A40 Westway: <br />
              <span className="text-[#ff6600]">Navigating 2026 Roadworks</span>
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
                alt="A40 Westway Roadworks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="max-w-3xl mx-auto space-y-12 px-4">
            <section className="space-y-8 pt-10">
              <p className="text-lg leading-relaxed text-gray-600 font-medium">
                If you drive in Notting Hill or Shepherd's Bush, you have seen the cones. The A40 Westway is closed for big repairs. This changes how we do our driving lessons.
              </p>

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                  Current Status of Westway Closures in West London
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Westway is shut between the roundabout and Marylebone Flyover until late April 2026. After that, it will close on weekends until July. This makes local roads very busy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                  Impact on Local Roads in W10 and W11
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Harrow Road and Ladbroke Grove have more cars and buses than ever. This is a tough time for learners, but it is a good way to learn real skills.
                </p>

                <div className="space-y-4 mt-4">
                  <h3 className="text-xl font-black text-[#ff6600] uppercase italic">
                    Avoiding Congestion on Ladbroke Grove
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We try to avoid the worst traffic to give you more time behind the wheel. We use the back roads to teach you how to steer and brake safely.
                  </p>

                  <h3 className="text-xl font-black text-[#ff6600] uppercase italic">
                    New Hazards for Learner Drivers
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    More people are using bikes and scooters to avoid the car jams. You must check your mirrors twice before you turn. We show you how to spot these hazards early.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                  How TM Drive School Adjusts Your Lesson Routes
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We use the traffic as a classroom. In our Mercedes A-Class, we show you how to keep the car steady in slow queues. We also teach you how to stay calm when the roads are loud and busy.
                </p>
              </div>
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
                Conclusion: <span className="text-[#ff6600]">Why Local Knowledge Matters in 2026</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Westway works make driving in West London harder than usual. But learning in these conditions makes you a better driver. We know these roads better than anyone. We can show you how to drive safely even when the traffic is at its worst. Join us to start your lessons in Notting Hill today.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}