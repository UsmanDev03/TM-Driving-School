// "use client";
// import { useState } from "react";
// import Link from "next/link";

// export default function ClientFAQ() {
//   const faqs = [
//     {
//       q: "Do you offer driving lessons in South Kensington?",
//       a: "Yes. TM Drive School offers manual driving lessons in South Kensington and nearby West London areas.",
//     },
//     {
//       q: "Are lessons suitable for nervous learners?",
//       a: "Yes. Calm teaching and short lesson goals can help nervous learners feel more at ease.",
//     },
//     {
//       q: "Can I check prices before I contact you?",
//       a: <>Yes. You can see current lesson rates on our <Link href="/price" className="text-[#ff6600] font-semibold">price page</Link>.</>,
//     },
//     {
//       q: "Do you help with mock tests and test prep?",
//       a: "Yes. Lessons can focus on weak points, parking, junctions, and mock test work.",
//     },
//     {
//       q: "Where can I read learner reviews?",
//       a: <>You can read learner feedback on our <Link href="/testimonials" className="text-[#ff6600] font-semibold">testimonials page</Link>.</>,
//     },
//   ];

//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
//       <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-gray-900">
//         Frequently Asked Questions
//       </h2>

//       <div className="space-y-4">
//         {faqs.map((faq, idx) => {
//           const isOpen = openIndex === idx;

//           return (
//             <div
//               key={idx}
//               className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
//                 isOpen
//                   ? "border-2 border-[#ff6600] shadow-md"
//                   : "border-gray-200"
//               }`}
//             >
//               {/* Question */}
//               <button
//                 onClick={() => setOpenIndex(isOpen ? null : idx)}
//                 className={`w-full text-left px-6 py-5 flex justify-between items-center transition ${
//                   isOpen
//                     ? "bg-[#ff6600]/10"
//                     : "bg-white hover:bg-gray-50"
//                 }`}
//               >
//                 <span className="font-semibold text-gray-900">
//                   {faq.q}
//                 </span>

//                 <span
//                   className={`text-xl font-bold transition-transform duration-300 ${
//                     isOpen ? "rotate-45" : ""
//                   }`}
//                 >
//                   +
//                 </span>
//               </button>

//               {/* Divider (only when open) */}
//               {isOpen && <div className="h-px bg-gray-200"></div>}

//               {/* Answer */}
//               <div
//                 className={`transition-all duration-300 ${
//                   isOpen ? "max-h-96 py-5 px-6 bg-white" : "max-h-0"
//                 } overflow-hidden`}
//               >
//                 {isOpen && (
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     {faq.a}
//                   </p>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }