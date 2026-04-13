"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Calendar, ChevronLeft, Clock } from "lucide-react";

export default function Blog2() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Will my driving test be affected by Westway closures?",
      a: "Examiners are aware of roadworks and choose suitable routes that still test your driving skills properly.",
    },
    {
      q: "Is it better to take lessons at night?",
      a: "Yes, evening lessons can be helpful as traffic is usually lighter, making it easier to practise key skills.",
    },
    {
      q: "How long will the roadworks last?",
      a: "The main closures continue until April 2026, with weekend restrictions expected until July 2026.",
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
                alt="A40 Westway Roadworks 2026"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="max-w-3xl mx-auto space-y-12 px-4">
            <p className="text-lg leading-relaxed text-gray-600 font-medium">
              If you drive in Notting Hill or Shepherd’s Bush, you have seen the
              cones. The A40 Westway is closed for major repairs, and this has
              changed how learners and instructors plan driving lessons in West
              London
              <br />
              At our driving school London, we understand how frustrating
              roadworks can feel for beginners. However, these conditions also
              provide a great opportunity to develop real driving confidence in
              busy environments.
              <br />
              If you want to know more about our instructors and training
              approach, visit our About TM Drive School page.
            </p>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                Current Status of Westway Closures
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Westway is currently shut between the roundabout and
                Marylebone Flyover until late April 2026. After this, it will
                continue to have weekend closures until July 2026.
              </p>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
                  These changes are causing:
                </p>

                {/* BRANDED GRID LIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Longer travel times during peak hours",
                    "Increased traffic on alternative routes",
                    "More pressure on local junctions and side roads",
                    "Delays in normal trafficacross W10 and W11 zones",
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
                For learner drivers, this means lessons may feel more
                challenging, but also more realistic.
              </p>
            </section>
            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                Impact on Local Roads in W10 and W11
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Because of the Westway closures, nearby roads like Harrow Road,
                Ladbroke Grove, and Westbourne Park Road are much busier than
                usual.
              </p>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
                  This increased traffic creates real world learning conditions such as:
                </p>

                {/* BRANDED GRID LIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Frequent stop start driving",
                    "More pedestrian crossings",
                    "Bus lane awareness",
                    "Complex junction decision making",
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
                Although it may feel overwhelming at first, these conditions
                help learners improve faster. At our driving school London, we
                use these routes to teach patience, awareness, and safe decision
                making.
              </p>
            </section>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                Avoiding Congestion on Ladbroke Grove
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                One of the biggest challenges during 2026 roadworks is
                congestion around Ladbroke Grove. To manage this, our
                instructors carefully plan routes based on traffic levels and
                lesson goals.
              </p>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
                  We often use quieter side streets to help learnersfocus on:
                </p>

                {/* BRANDED GRID LIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Steering control in tight spaces",
                    "Smooth braking and acceleration",
                    "Gear changes without pressure",
                    "Observation and mirror checks",
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
                This balance between busy and quiet roads helps students build
                confidence step by step.
              </p>
            </section>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                New Hazards for Learner Drivers
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With traffic increasing, more cyclists, scooters, and
                pedestrians are using side roads to avoid congestion. This
                creates new hazards that every learner must understand.
              </p>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
                  Key things we focus on during lessons:
                </p>

                {/* BRANDED GRID LIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Checking mirrors more frequently",
                    "Anticipating sudden movements from cyclists",
                    "Giving extra space at junctions",
                    "Slowing down near parked vehicles",
                    "Staying alert in blind spots",
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
                These real life hazards make learners more careful and aware
                drivers.
              </p>
            </section>
            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                How TM Drive School Adjusts Your Lesson Routes
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At TM Drive School, we do not avoid challenges. Instead, we use
                them as part of your learning experience. Our instructors adapt
                lesson routes daily depending on traffic conditions.
              </p>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
                  In busy West London areas, we focus on:
                </p>

                {/* BRANDED GRID LIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Slow moving traffic control",
                    "Safe lane positioning",
                    "Decision making at busy junctions",
                    "Confidence building in real traffic",
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
                Our Mercedes A-Class is smooth and easy to handle, which helps
                learners stay calm even in heavy congestion. We believe real
                driving confidence comes from real road experience, not just quiet practice routes.
              </p>
            </section>
            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                Learning Benefits of Driving in Roadworks
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Although roadworks can feel inconvenient, they actually create
                some of the best learning conditions for new drivers.
              </p>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
                  Here is why:
                </p>

                {/* BRANDED GRID LIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "You learn patience in slow traffic",
                    "You improve clutch control in stop start",
                    "You develop stronger observation skills",
                    "You become more confident in unpredictable conditions",
                    "You learn how to stay calm under pressure",
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
                These skills are extremely valuable when preparing for the
                driving test and real life driving in London.
              </p>
            </section>
            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                Tips for Driving in West London Traffic
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                If you are a learner or new driver, here are some helpful tips
                to stay safe and confident during Westway roadworks:
              </p>

              <div className="space-y-4">
                {/* BRANDED GRID LIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Always plan your route before starting",
                    "Keep a safe distance from the vehicle ahead",
                    "Use mirrors frequently in busy traffic",
                    "Avoid sudden braking or acceleration",
                    "Stay calm even when traffic is slow",
                    "Listen carefully to your instructor’s guidance",
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
                Small habits like these make a big difference in your driving
                progress and safety on the road.
              </p>
            </section>
            {/* FAQ SECTION */}
            <section className="max-w-5xl mx-auto py-12 border-t border-gray-100">
              <h2 className="text-3xl md:text-4xl font-black mb-10 text-center text-gray-900 uppercase italic">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-xl shadow-sm overflow-hidden border transition-all duration-300 ${
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
                        <span className="font-bold text-gray-900 uppercase tracking-tight text-sm">
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
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {faq.a}
                          </p>
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
                The A40 Westway roadworks have made driving in West London more
                challenging, but also more valuable for learners.
                <br />
                Instead of avoiding difficult routes, we use them to build
                stronger, more confident drivers who can handle real traffic
                conditions anywhere in London.
                <br />
                At TM Drive School, we understand these roads better than
                anyone. Our instructors know how to turn busy streets into
                learning opportunities.
                <br />
                If you are ready to start driving in real London conditions,
                book your lessons today with a trusted driving school London and
                learn how to stay confident even in the busiest traffic.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
