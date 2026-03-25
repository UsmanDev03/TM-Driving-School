import PriceClient from "./PriceClient";

export const metadata = {
  title: "Driving Lesson Prices West London | Manual Tuition Fees",
  description: "View affordable driving lesson prices for West London. Save with block booking discounts and student specials. Quality manual tuition at great rates",
  alternates: {
    canonical: "https://www.tmdriveschool.co.uk/price",
  },
};

export default function Page() {
  return <PriceClient />;
}