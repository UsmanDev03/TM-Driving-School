// "use client";
// import { useState } from "react";
// import Link from "next/link";

// export default function ClientFAQ() {
//   const faqs = [
//     {
//       q: "Do you offer driving lessons in Maida Vale?",
//       a: "Yes. TM Drive School offers manual driving lessons in Maida Vale and nearby West London areas.",
//     },
//     {
//       q: "Are lessons in Maida Vale suitable for new learners?",
//       a: "Yes. Lessons are suitable for new learners, nervous learners, and part-trained learners.",
//     },
//     {
//       q: "Can I check prices before I book?",
//       a: <>Yes. You can view current lesson rates on our <Link href="/price" className="text-[#ff6600] font-semibold">price page</Link>.</>,
//     },
//     {
//       q: "Do you help learners who need more practice before test day?",
//       a: "Yes. Lessons can focus on parking, junctions, mock tests, and road confidence.",
//     },
//     {
//       q: "Where can I read learner reviews?",
//       a: <>You can read learner feedback on our <Link href="/testimonials" className="text-[#ff6600] font-semibold">testimonials page</Link>.</>,
//     },
//   ];

//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
//       <h2 className="text-3xl font-extrabold text-center mb-10">
//         Frequently Asked Questions
//       </h2>

//       <div className="space-y-4">
//         {faqs.map((faq, idx) => {
//           const isOpen = openIndex === idx;

//           return (
//             <div
//               key={idx}
//               className={`rounded-2xl overflow-hidden border ${
//                 isOpen ? "border-2 border-[#ff6600]" : "border-gray-200"
//               }`}
//             >
//               <button
//                 onClick={() => setOpenIndex(isOpen ? null : idx)}
//                 className="w-full flex justify-between px-6 py-5 bg-white hover:bg-gray-50"
//               >
//                 <span className="font-semibold">{faq.q}</span>
//                 <span className={`${isOpen ? "rotate-45" : ""}`}>+</span>
//               </button>

//               {isOpen && <div className="h-px bg-gray-200"></div>}

//               <div className={`${isOpen ? "max-h-96 py-5 px-6" : "max-h-0"} overflow-hidden`}>
//                 {isOpen && <p className="text-gray-700">{faq.a}</p>}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }