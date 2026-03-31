import Blog1 from "../_components/Blog1";
import Blog2 from "../_components/Blog2";
import Blog3 from "../_components/Blog3";


// Add 'async' here
export default async function BlogPost({ params }) {
  // Await the params before destructuring
  const { slug } = await params;

  const components = {
    "new-driving-test-rules-2026": <Blog1 />,
    "a40-westway-roadworks-2026": <Blog2 />,
    "manual-vs-automatic-benefits": <Blog3 />,
   
  };

  return components[slug] || (
    <div className="h-screen flex items-center justify-center font-black uppercase italic text-2xl">
      Post Not Found
    </div>
  );
}