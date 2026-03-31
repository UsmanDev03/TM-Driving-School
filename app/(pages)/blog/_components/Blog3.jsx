"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Calendar, ChevronLeft, Clock } from "lucide-react";

export default function Blog3() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is a manual car hard to drive?",
      a: "It takes a bit more work at first. Most people get the hang of it in a few weeks.",
    },
    {
      q: "Can I switch to automatic later?",
      a: "Yes. If you find manuals too hard, we can help you switch.",
    },
    {
      q: "What car do you use?",
      a: "We use a modern Mercedes A-Class. It is smooth and easy to drive.",
    },
  ];

  return (
    <main className="bg-white min-h-screen pb-24 font-sans text-gray-900 w-full">
      {/* NAVIGATION */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
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
              Manual vs Automatic in 2026: <br />
              <span className="text-[#ff6600]">
                Why a Manual License is Smart
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
                src="/images/hero-3.avif"
                alt="Manual vs Automatic 2026"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="max-w-3xl mx-auto space-y-12 px-4">
            <section className="space-y-8 pt-10">
              <p className="text-lg leading-relaxed text-gray-600 font-medium">
                Most new cars in 2026 are electric or automatic. You might
                wonder why people still learn in a manual car. At our driving
                school, many students still pick the manual gearbox.
              </p>

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                  Lower Insurance Costs for New Drivers
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Insurance for new drivers is very high in London. In 2026,
                  data shows that a manual license can save you money. Automatic
                  cars are often more expensive to fix after a crash. Insurance
                  firms charge more for them. If you pass in a manual car, you
                  can save hundreds of pounds.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                  More Choice of Cars and Jobs
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  When you pass in a manual car, you can drive any car. If you
                  pass in an automatic, you are stuck. You cannot drive a manual
                  work van or a friend's car. Many cheap used cars are still
                  manual.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                  Better Control on London Streets
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  In a manual car, you choose the gear. This is good for steep
                  hills or when you need to slow down using the engine. Our
                  Mercedes A-Class makes it easy to learn gears without
                  stalling.
                </p>

                <h3 className="text-xl font-black text-[#ff6600] uppercase italic mt-6">
                  The Pass Plus Edge
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We suggest doing the Pass Plus course after you pass. It
                  teaches you to drive on fast motorways. It also helps lower
                  your insurance even more.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
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
            <section className="space-y-6 pt-4">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic">
                Conclusion:{" "}
                <span className="text-[#ff6600]">
                  Pick the License That Gives You More
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Even with more electric cars on the road, a manual license is
                the best choice for 2026. It saves you money and gives you more
                freedom to drive any car you want. We have the best manual car
                and the best instructors to help you pass. Book your first
                lesson with us now.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
