// export const locations = [
//         { area: "Oldham", address: "17 Hertfordshire Park Close, TM, OL2 7YP" },
//         { area: "Rochdale", address: "Main Street, Rochdale Area" },
//         { area: "Tameside", address: "Local Service Area, Tameside" },
//         { area: "North Manchester", address: "Serving North Manchester" },
//         { area: "Middleton", address: "Middleton & Surrounding" }

import {
  Clock,
  Smartphone,
  User
} from "lucide-react";

//     ];
export const locations = [{
    area: "Maida Vale"
  },
  {
    area: "Notting Hill"
  },
  {
    area: "Shepherds Bush"
  },
  {
    area: "Hammersmith"
  },
  {
    area: "South Kensington"
  },
  {
    area: "Fulham"
  },
  {
    area: "Chelsea"
  },
];
export const formFields = [{
    id: "name",
    type: "text",
    placeholder: "Full Name",
    icon: User, // <User /> ki jagah sirf User likhen
  },
  {
    id: "phone",
    type: "tel",
    placeholder: "Mobile Number",
    icon: Smartphone, // Smartphone likhen
  },
  {
    id: "time",
    type: "select",
    placeholder: "Preferred Lesson Time",
    icon: Clock, // Clock likhen
    options: [{
        label: "Morning (8am - 12pm)",
        value: "morning"
      },
      {
        label: "Afternoon (12pm - 4pm)",
        value: "afternoon"
      },
      {
        label: "Evening (4pm - 8pm)",
        value: "evening"
      },
      {
        label: "Weekends Only",
        value: "weekends"
      },
    ],
  },
];

export const testimonialsData = [{
    id: 1,
    name: "Rodner Matienzo",
    rating: 5,
    text: "Turon  was a great instructor.",
    date: "Jan 22, 2025",
    img: "/images/star.png",
    role: "Verified Student"
  },
  {
    id: 2,
    name: "Rafael",
    rating: 5,
    text: "Turon was an amazing instructor! I would definitely recommend him to anyone that would like to learn and to pass their driving test.",
    date: "Jan 15, 2025",
    img: "/images/star.png",
    role: "Verified Student"
  },
  {
    id: 3,
    name: "Tarcayani",
    rating: 5,
    text: "Had a great experience learning to drive with Turon who is extremely patient and knowledgeable! I had a big fear of driving and he managed to help me slowly progress over time and eventually passed on my first attempt!",
    date: "Nov 27, 2024",
    img: "/images/star.png",
    role: "First Time Pass"
  },
  {
    id: 4,
    name: "Raluca",
    rating: 5,
    text: "Thanks to the help of my driving instructor Turon Miah I was able to pass first time. He is an amazing instructor and very knowledgable. He is very calm and helps you build your confidence behind the wheel. I really appreciate all the help and fully recommend him. 10/10 experience!",
    date: "Feb 26, 2024",
    img: "/images/star.png",
    role: "10/10 Experience"
  },
  {
    id: 5,
    name: "Hicham Boumediane",
    rating: 5,
    text: "Turon Miah is an exceptional driving instructor. He's very experienced, devoted, patient and friendly. He also pointed out all my mistakes at the end of each session to make sure that I fully understand them before taking the driving test.",
    date: "Jan 5, 2024",
    img: "/images/star.png",
    role: "Exceptional Student"
  },
  {
    id: 6,
    name: "Aleksandra Kovaleva",
    rating: 5,
    text: "Turon was a great instructor and helped me to pass first time with 2 minors after 5 weeks.",
    date: "Mar 25, 2025",
    img: "/images/star.png",
    role: "Passed First Time"
  },
  {
    id: 7,
    name: "Nayef",
    rating: 5,
    text: "Turon was a really great instructor, patient and prepared me well for the exam and real world driving. His understanding of what it takes to become a good driver helped me pass my test with only 3 minors.",
    date: "Jul 30, 2025",
    img: "/images/star.png",
    role: "Verified Student"
  },
  {
    id: 8,
    name: "Ayesha",
    rating: 5,
    text: "Turon is lovely, calm and helped me loads while still being kind and friendly. Made me feel at ease and helped me pass with a lot less anxiety! I always looked forward to the lessons and left them feeling more and more prepared. Very grateful!",
    date: "Oct 9, 2025",
    img: "/images/star.png",
    role: "Verified Student"
  },
  {
    id: 9,
    name: "Amine Achour",
    rating: 5,
    text: "I don't think there is a better driving instructor to go through if you are looking for a license. My instructor's patience and great understanding of the roads made me feel so confident on the road and therefore made my test feel so easy. I really appreciate the patience and hard work I was put through.",
    date: "Oct 9, 2025",
    img: "/images/star.png",
    role: "Verified Student"
  },
  {
    id: 10,
    name: "Graziele Perini",
    rating: 5,
    text: "Today I passed my test with 0 faults thanks to my instructor Turon Miah! He was so helpful and patient with me along my journey learning how to drive a manual car. His teaching is exceptional, he is so dedicated to his students.",
    date: "Oct 15, 2025",
    img: "/images/star.png",
    role: "Passed with 0 Faults"
  },
  {
    id: 11,
    name: "Franz-Mathias Kurg",
    rating: 5,
    text: "Great instructor got me to pass my test first time. Highly recommended for anyone looking to learn quickly and safely.",
    date: "Oct 16, 2025",
    img: "/images/star.png",
    role: "First Time Pass"
  },
  {
    id: 12,
    name: "Melo Brion",
    rating: 5,
    text: "Passed my driving test first attempt with ONLY 1 fault. Excellent feedback from the instructor. You worked hard for this. Thank you Turon!",
    date: "Dec 2, 2025",
    img: "/images/star.png",
    role: "1st Attempt Pass"
  },
  {
    id: 13,
    name: "Oscar",
    rating: 5,
    text: "Passed my driving Test with only 2 driver faults. Turon is a legend! See you on the road.",
    date: "Feb 11, 2025",
    img: "/images/star.png",
    role: "2 Minors Pass"
  },
  {
    id: 14,
    name: "Judi",
    rating: 5,
    text: "Passed my driving test in Mill Hill. Good to be independent. Turon's teaching was key to my success. Very well done to me but thanks to him!",
    date: "Feb 24, 2025",
    img: "/images/star.png",
    role: "Verified Student"
  },
  {
    id: 15,
    name: "Sophie Brett",
    rating: 5,
    text: "Passed my test first time in Pinner. Big thanks to Turon Miah for being an amazing instructor and helping me through the process.",
    date: "Jul 28, 2025",
    img: "/images/star.png",
    role: "First Time Pass"
  },
  {
    id: 16,
    name: "Daniel Smith", // Aap yahan image se dekh kar sahi naam likh sakte hain
    rating: 5,
    text: "Turon made the whole experience so much easier. His calm nature and expertise are unmatched. Fully recommend to anyone looking to pass quickly!",
    date: "Nov 2025",
    img: "/images/star.png",
    role: "Verified Student"
  }
];

export const galleryImagesData = [{
    id: 1,
    src: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1000',
    alt: 'Driving Student',
    title: 'First Time Pass'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800',
    alt: 'Instructor Car',
    title: 'Modern Fleet'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800',
    alt: 'Happy Student',
    title: 'Success Story'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800',
    alt: 'Driving Lesson',
    title: 'Expert Coaching'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1526726533690-5cbe947c9052?q=80&w=800',
    alt: 'Road Test',
    title: 'Confidence'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000',
    alt: 'Car Exterior',
    title: 'Quality Cars'
  },
];