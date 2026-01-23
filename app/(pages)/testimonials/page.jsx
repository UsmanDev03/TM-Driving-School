import TestimonialsHeader from '@/app/components/sections/TestimonialsHeader';
import TestimonialCard from '@/app/components/sections/TestimonialCard';
import TestimonialsBottom from '@/app/components/sections/TestimonialsBottom';

const Testimonials = () => {
  return (
    <section className="pb-24 bg-[#fcfcfc] overflow-hidden">
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