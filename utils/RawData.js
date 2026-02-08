import {
  Clock,
  Smartphone,
  User,
  MapPin,
  Mail
} from "lucide-react";

export const locations_map = [{
    name: "Notting Hill (W8)",
    lat: 51.5096,
    lng: -0.1960
  },
  {
    name: "Maida Vale (W9)",
    lat: 51.5295,
    lng: -0.1857
  },
  {
    name: "Holland Park (W8)",
    lat: 51.5056,
    lng: -0.2056
  },
  {
    name: "Kensington (W8)",
    lat: 51.5009,
    lng: -0.1936
  },
  {
    name: "Bayswater (W2)",
    lat: 51.5123,
    lng: -0.1878
  },
  {
    name: "Queensway (W2)",
    lat: 51.5128,
    lng: -0.1870
  },
  {
    name: "Paddington (W2)",
    lat: 51.5154,
    lng: -0.1755
  },
  {
    name: "Westbourne Grove (W2)",
    lat: 51.5145,
    lng: -0.1973
  },

  {
    name: "Earls Court (SW5)",
    lat: 51.4915,
    lng: -0.1939
  },
  {
    name: "South Kensington (SW7)",
    lat: 51.4941,
    lng: -0.1739
  },
  {
    name: "Fulham (SW6)",
    lat: 51.4751,
    lng: -0.2011
  },
  {
    name: "Chelsea (SW3)",
    lat: 51.4875,
    lng: -0.1687
  },

  {
    name: "Hammersmith (W6)",
    lat: 51.4927,
    lng: -0.2235
  },
  {
    name: "White City (W12)",
    lat: 51.5123,
    lng: -0.2245
  },
  {
    name: "Shepherd’s Bush (W12)",
    lat: 51.5058,
    lng: -0.2265
  },
  {
    name: "East Acton (W3)",
    lat: 51.5175,
    lng: -0.2478
  },
  {
    name: "Acton (W3/W12)",
    lat: 51.5088,
    lng: -0.2765
  },

  {
    name: "Park Royal (NW10)",
    lat: 51.5276,
    lng: -0.2844
  },
  {
    name: "Queens Park (NW6)",
    lat: 51.5344,
    lng: -0.2045
  },
  {
    name: "Ladbroke Grove (W10/W11)",
    lat: 51.5179,
    lng: -0.2106
  },
  {
    name: "Kensal Rise (NW10)",
    lat: 51.5341,
    lng: -0.2202
  },

  {
    name: "St John's Wood (NW8)",
    lat: 51.5348,
    lng: -0.1740
  },
  {
    name: "Swiss Cottage (NW8)",
    lat: 51.5430,
    lng: -0.1749
  },
  {
    name: "West Hampstead (NW6)",
    lat: 51.5467,
    lng: -0.1907
  },
];

export const locations = [{
    area: "Notting Hill",
    postcode: "W8"
  },
  {
    area: "Maida Vale",
    postcode: "W9"
  },
  {
    area: "Holland Park",
    postcode: "W8"
  },
  {
    area: "Kensington",
    postcode: "W8"
  },
  {
    area: "Bayswater",
    postcode: "W2"
  },
  {
    area: "Queensway",
    postcode: "W2"
  },
  {
    area: "Paddington",
    postcode: "W2"
  },
  {
    area: "Westbourne Grove",
    postcode: "W2"
  },
  {
    area: "Earls Court",
    postcode: "SW5"
  },
  {
    area: "South Kensington",
    postcode: "SW7"
  },
  {
    area: "Fulham",
    postcode: "SW6"
  },
  {
    area: "Chelsea",
    postcode: "SW3"
  },
  {
    area: "Hammersmith",
    postcode: "W6"
  },
  {
    area: "White City",
    postcode: "W12"
  },
  {
    area: "Shepherd’s Bush",
    postcode: "W12"
  },
  {
    area: "East Acton",
    postcode: "W3"
  },
  {
    area: "Acton",
    postcode: "W3, W12"
  },
  {
    area: "Park Royal",
    postcode: "NW10"
  },
  {
    area: "Queens Park",
    postcode: "NW6"
  },
  {
    area: "Ladbroke Grove",
    postcode: "W10, W11"
  },
  {
    area: "Kensal Rise",
    postcode: "NW10"
  },
  {
    area: "St John's Wood",
    postcode: "NW8"
  },
  {
    area: "Swiss Cottage",
    postcode: "NW8"
  },
  {
    area: "West Hampstead",
    postcode: "NW6"
  }
];

export const formFields = [{
    id: "name",
    type: "text",
    placeholder: "Full Name",
    icon: User,
  },
  {
    id: "email",
    type: "email",
    placeholder: "Email Address",
    icon: Mail,
  },
  {
    id: "phone",
    type: "tel",
    placeholder: "Mobile Number",
    icon: Smartphone,
  },
  {
    id: "area", // Naya Area Dropdown
    type: "select",
    placeholder: "Select Your Area",
    icon: MapPin,
    options: [{
        label: "Notting Hill W8",
        value: "notting-hill-w8"
      },
      {
        label: "Maida Vale W9",
        value: "maida-vale-w9"
      },
      {
        label: "Holland Park W8",
        value: "holland-park-w8"
      },
      {
        label: "Kensington W8",
        value: "kensington-w8"
      },
      {
        label: "Bayswater W2",
        value: "bayswater-w2"
      },
      {
        label: "Queensway W2",
        value: "queensway-w2"
      },
      {
        label: "Paddington W2",
        value: "paddington-w2"
      },
      {
        label: "Westbourne Grove W2",
        value: "westbourne-grove-w2"
      },
      {
        label: "Earls Court SW5",
        value: "earls-court-sw5"
      },
      {
        label: "South Kensington SW7",
        value: "south-kensington-sw7"
      },
      {
        label: "Fulham SW6",
        value: "fulham-sw6"
      },
      {
        label: "Chelsea SW3",
        value: "chelsea-sw3"
      },
      {
        label: "Hammersmith W6",
        value: "hammersmith-w6"
      },
      {
        label: "White City W12",
        value: "white-city-w12"
      },
      {
        label: "Shepherd’s Bush W12",
        value: "shepherds-bush-w12"
      },
      {
        label: "East Acton W3",
        value: "east-acton-w3"
      },
      {
        label: "Acton W3, W12",
        value: "acton-w3-w12"
      },
      {
        label: "Park Royal NW10",
        value: "park-royal-nw10"
      },
      {
        label: "Queens Park NW6",
        value: "queens-park-nw6"
      },
      {
        label: "Ladbroke Grove W10, W11",
        value: "ladbroke-grove-w10-w11"
      },
      {
        label: "Kensal Rise NW10",
        value: "kensal-rise-nw10"
      },
      {
        label: "St John's Wood NW8",
        value: "st-johns-wood-nw8"
      },
      {
        label: "Swiss Cottage NW8",
        value: "swiss-cottage-nw8"
      },
      {
        label: "West Hampstead NW6",
        value: "west-hampstead-nw6"
      },
    ],
  },
  {
    id: "time",
    type: "select",
    placeholder: "Preferred Lesson Time",
    icon: Clock,
    options: [{
        label: "Morning (8am - 12pm)",
        value: "Morning (8am - 12pm)"
      },
      {
        label: "Afternoon (12pm - 4pm)",
        value: "Afternoon (12pm - 4pm)"
      },
      {
        label: "Evening (4pm - 8pm)",
        value: "Evening (4pm - 8pm)"
      },
      {
        label: "Weekends Only",
        value: "Weekends Only"
      },
    ],
  },
];

export const testimonialsData = [
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