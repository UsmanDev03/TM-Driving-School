// export const locations = [
//         { area: "Oldham", address: "17 Hertfordshire Park Close, TM, OL2 7YP" },
//         { area: "Rochdale", address: "Main Street, Rochdale Area" },
//         { area: "Tameside", address: "Local Service Area, Tameside" },
//         { area: "North Manchester", address: "Serving North Manchester" },
//         { area: "Middleton", address: "Middleton & Surrounding" }

import { Clock, Smartphone, User } from "lucide-react";

//     ];
      export const locations = [
    { area: "Maida Vale" },
    { area: "Notting Hill" },
    { area: "Shepherds Bush" },
    { area: "Hammersmith" },
    { area: "South Kensington" },
    { area: "Fulham" },
    { area: "Chelsea" },
  ];
export const formFields = [
  {
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
    options: [
      { label: "Morning (8am - 12pm)", value: "morning" },
      { label: "Afternoon (12pm - 4pm)", value: "afternoon" },
      { label: "Evening (4pm - 8pm)", value: "evening" },
      { label: "Weekends Only", value: "weekends" },
    ],
  },
];