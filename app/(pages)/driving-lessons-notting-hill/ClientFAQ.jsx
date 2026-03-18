"use client";
import { useState } from "react";
import Link from "next/link";

export default function ClientFAQ() {
  const faqs = [
    { 
      q: "Do you offer driving lessons in Notting Hill?", 
      a: "Yes. TM Drive School offers manual driving lessons in Notting Hill and nearby parts of West London." 
    },
    { 
      q: "Can I book lessons if I am a new learner?", 
      a: "Yes. Lessons are suitable for new learners, part-trained learners, and nervous learners." 
    },
    { 
      q: "Do you cover nearby W8 and W11 areas?", 
      a: <>Yes, local cover may include nearby W8 and W11 areas. Use our <Link href='/contact' className='text-[#ff6600] font-semibold'>contact page</Link> to check lesson slots.</> 
    },
    { 
      q: "Can I read reviews before I book?", 
      a: <>Yes. You can read real learner feedback on our <Link href='/testimonials' className='text-[#ff6600] font-semibold'>testimonials page</Link>.</> 
    },
    { 
      q: "Can I see pass photos or student results?", 
      a: <>Yes. Visit our <Link href='/gallery' className='text-[#ff6600] font-semibold'>gallery page</Link> to view student images and recent passes.</> 
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
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
                isOpen ? "border-2 border-[#ff6600]" : "border border-gray-200"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className={`w-full text-left px-6 py-4 flex justify-between items-center transition-colors duration-300 ${
                  isOpen ? "bg-[#ff6600]/10" : "bg-gray-50 hover:bg-gray-100"
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

              {/* Answer - only visible when open */}
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
  );
}