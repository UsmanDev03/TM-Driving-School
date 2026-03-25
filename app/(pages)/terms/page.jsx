import TermsClient from "./TermsClient"; 

export const metadata = {
  title: "Terms & Conditions | TM Driving School UK",
  description: "Review our professional standards for manual driving tuition.",
  alternates: {
    canonical: "https://www.tmdriveschool.co.uk/terms",
  },
};

export default function Page() {
  return <TermsClient />;
}