import TestimonialsHeader from '@/app/components/sections/TestimonialsHeader';
import TestimonialCard from '@/app/components/sections/TestimonialCard';
import TestimonialsBottom from '@/app/components/sections/TestimonialsBottom';
export const metadata = {
  title: "Student Reviews & Pass Rates | TM Driving School UK",
  description: "Read success stories from our students in West London. Discover why we are a top-rated driving school with a high pass rate. Start your journey today.",
  alternates: {
    canonical: "https://www.tmdriveschool.co.uk/testimonials",
  },
};
const Testimonials = () => {
  return (
    <section className="pb-12 bg-[#fcfcfc] overflow-hidden">
      <TestimonialsHeader/>
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid Section */}
        <TestimonialCard/>

        {/* Bottom Stats Section */}
        <TestimonialsBottom/>

      </div>
    </section>
  );
};

export default Testimonials;