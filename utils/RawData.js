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
    name: "James Wilson",
    role: "Manual Pass",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
    carImg: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1000",
    text: "Paul is an incredible instructor. Calm, composed, and knows exactly how to handle nervous learners. Passed with only 2 minors!",
    rating: 5,
    size: "large"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Automatic Pass",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    carImg: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000",
    text: "Best driving school in Shaw. Period. The prices are fair and the quality of teaching is top-notch.",
    rating: 5,
    size: "small"
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Refresher Course",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000",
    carImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
    text: "I hadn't driven in years. Marcus helped me regain my confidence in just 3 sessions.",
    rating: 5,
    size: "small"
  },
  {
    id: 4,
    name: "Emma Stone",
    role: "Intensive Course",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000",
    carImg: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000",
    text: "Passed my test in just 2 weeks! The intensive course is worth every penny. Highly recommended!",
    rating: 5,
    size: "medium"
  },
  {
    id: 5,
    name: "Liam Neeson",
    role: "Motorway Pro",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    carImg: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000",
    text: "Professional, punctual, and very knowledgeable. The motorway training was excellent.",
    rating: 5,
    size: "small"
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