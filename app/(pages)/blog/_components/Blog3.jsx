"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Calendar, ChevronLeft, Clock } from "lucide-react";

export default function Blog3() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is a manual car hard to drive?",
      a: "It takes a bit of practice, but most learners get comfortable within a few weeks.",
    },
    {
      q: "Can I switch to automatic later?",
      a: "Yes, you can switch if you prefer automatic after starting manual lessons.",
    },
    {
      q: "What car do you use?",
      a: "We use a modern Mercedes A-Class, designed to make learning smooth and easy.",
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
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1.1] mb-6 italic text-balance">
              Manual vs Automatic in 2026: <br />
              <span className="text-[#ff6600]">
                Why a Manual License is Smart
              </span>
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-400 font-bold uppercase tracking-widest text-[11px] border-y border-gray-100 py-5">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#ff6600]" /> APRIL 13, 2026
              </div>
              <div className="text-gray-200">|</div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#ff6600]" /> 6 MIN READ
              </div>
            </div>
          </header>

          {/* HERO IMAGE */}
          <div className="mb-16 flex justify-center">
            <div className="relative aspect-video overflow-hidden rounded-[30px] w-full max-w-4xl shadow-sm">
              <img
                src="/images/hero-3.avif"
                alt="Manual vs Automatic Driving 2026"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="max-w-3xl mx-auto space-y-12 px-4">
            <p className="text-lg leading-relaxed text-gray-600 font-medium">
              Most new cars in 2026 are electric or automatic. You might wonder
              why people still learn in a manual car. At our driving school,
              many students still pick the manual gearbox.
              <br />
              If you want to understand more about our instructors, training
              style, and how we help beginners become confident drivers, you can
              visit our About TM Drive School.
            </p>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                Lower Insurance Costs for New Drivers
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Insurance for new drivers is very high in London. In 2026, data
                shows that a manual license can save you money. Automatic cars
                are often more expensive to fix after a crash. Insurance
                companies also charge higher premiums for them.
                <br />
                If you pass in a manual car, you can save hundreds of pounds
                every year, which is a major benefit for new drivers in London
              </p>
            </section>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                More Choice of Cars and Jobs
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                When you pass in a manual car, you can drive both manual and
                automatic vehicles. If you pass in an automatic, you are
                restricted to automatic only.
                <br />
                You also miss out on driving many work vans, delivery vehicles,
                and cheaper used cars, which are still mostly manual in the UK.
                <br />
                At our driving school London, we prepare learners for real life
                driving so they can confidently drive different types of
                vehicles after passing their test.
              </p>
            </section>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                Better Control on London Streets
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In a manual car, you control the gears yourself. This helps in
                situations like steep roads, slow traffic, and engine braking.
                <br />
                Our Mercedes A-Class makes learning smooth and easy, helping
                students understand gears without stress or stalling.
              </p>
            </section>

            <section className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
                The Pass Plus Edge
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We recommend doing Pass Plus after you pass your test. It helps
                you learn motorway driving, night driving, and advanced road
                skills.
                <br />
                It also improves your confidence and can further reduce your
                insurance costs.
              </p>
            </section>
<section className="space-y-6 pt-10 border-t border-gray-100">
  <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
    Manual vs Automatic in Real Life (London Driving Conditions)
  </h2>
  <p className="text-lg text-gray-600 leading-relaxed">
    Driving in London is very different from other places. You deal with heavy traffic, 
    tight roads, frequent stops, and busy roundabouts.
  </p>

  <div className="space-y-4">
    <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
      Manual driving helps you handle situations like:
    </p>

    {/* BRANDED GRID LIST */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        "Stop start traffic during rush hour",
        "Narrow streets with parked cars",
        "Hill starts in busy areas",
        "Complex junctions and roundabouts",
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
    Learning manual builds stronger control and awareness, especially in real London driving conditions.
  </p>
</section>
<section className="space-y-6 pt-10 border-t border-gray-100">
  <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
    Cost Comparison in 2026
  </h2>
  <p className="text-lg text-gray-600 leading-relaxed">
    Cost is one of the biggest reasons learners choose manual over automatic. 
    Even in 2026, opting for a manual gearbox provides several financial advantages for new drivers.
  </p>

  <div className="space-y-4">
    <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
      Here is how manual helps you save money:
    </p>

    {/* BRANDED GRID LIST */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        "Lower car purchase price",
        "More affordable used cars available",
        "Cheaper driving lessons in most cases",
        "Better fuel control with gear use",
        "Lower insurance costs for many drivers",
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
    Overall, manual driving remains the more budget-friendly option for those starting 
    their driving journey in 2026.
  </p>
</section>
<section className="space-y-6 pt-10 border-t border-gray-100">
  <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
    Who Should Choose Automatic Instead
  </h2>
  <p className="text-lg text-gray-600 leading-relaxed">
    Manual driving is not for everyone, and that is completely fine. 
  </p>

  <div className="space-y-4">
    <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
      Automatic may be better if you:
    </p>

    {/* BRANDED GRID LIST */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        "Feel very nervous about driving",
        "Want a simpler learning experience",
        "Drive mainly in heavy traffic",
        "Struggle with clutch control",
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
    Automatic cars remove gear changes, making driving easier, but keep in mind they 
    limit your licence to automatic vehicles only.
  </p>
</section>
<section className="space-y-6 pt-10 border-t border-gray-100">
  <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
    Tips for Learning Manual Faster
  </h2>
  <p className="text-lg text-gray-600 leading-relaxed">
    Learning manual becomes much easier if you follow the right steps. With the right 
    guidance, most learners improve quickly and feel comfortable within a few weeks.
  </p>

  <div className="space-y-4">
    <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
      To accelerate your progress:
    </p>

    {/* BRANDED GRID LIST */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        "Focus on clutch control early",
        "Practise moving off smoothly",
        "Stay calm in traffic situations",
        "Take regular driving lessons",
        "Listen carefully to your instructor",
        "Don’t worry about stalling at first",
        "Build confidence step by step",
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
    Consistency is key. Regular practice helps the physical movements of manual 
    driving become second nature, allowing you to focus on the road ahead.
  </p>
</section>
<section className="space-y-6 pt-10 border-t border-gray-100">
  <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-6">
    Why Manual Still Matters in the Future
  </h2>
  <p className="text-lg text-gray-600 leading-relaxed">
    Even with electric and automatic cars increasing, manual driving is still very important 
    in 2026.
  </p>

  <div className="space-y-4">
    <p className="text-lg text-gray-600 leading-relaxed font-bold uppercase tracking-tight text-sm italic">
      Key benefits for your future:
    </p>

    {/* BRANDED GRID LIST */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        "Many jobs still require manual skills",
        "You can drive both manual and automatic cars",
        "You gain better vehicle control understanding",
        "More flexibility when buying cars",
        "Stronger long term driving skills",
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
    Manual driving is still a valuable skill for the future, especially in the UK job market.
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

           <section className="space-y-6 pt-16 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic">
                Conclusion:{" "}
                <span className="text-[#ff6600]">
                 Pick the License That Gives You More
                </span>
              </h2>
  
 <p className="text-lg text-gray-600 leading-relaxed">
    Even in 2026, a manual driving license is still one of the smartest choices for 
    new drivers in London. It offers versatility and a deeper understanding of 
    vehicle mechanics that serves you for a lifetime.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10 text-left">
    {[
      "More freedom to drive different cars",
      "Lower long term costs",
      "Better control on busy roads",
      "More job opportunities",
      "Strong driving skills for life",
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
    If you are ready to start your driving journey, book your lessons with a 
    trusted driving school London and learn with confidence.
  </p>
</section>
          </div>
        </article>
      </div>
    </main>
  );
}
