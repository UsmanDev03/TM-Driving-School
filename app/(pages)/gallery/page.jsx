import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Training Car & Student Gallery | TM Driving School West",
  description: "Explore our modern training vehicle and see our happy students who passed their tests. View the TM Driving School gallery for West London learners now.",
  alternates: {
    canonical: "https://www.tmdriveschool.co.uk/gallery",
  },
};

export default function Page() {
  return <GalleryClient />;
}