import Blog1 from "../_components/Blog1";
import Blog2 from "../_components/Blog2";
import Blog3 from "../_components/Blog3";

// --- SEO METADATA GENERATOR ---
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const metaData = {
    "new-driving-test-rules-2026": {
      title: "New Driving Test Rules UK 2026 | West London Guide",
      description: "Discover new DVSA driving test rules in 2026. Learn booking limits, test changes, and how West London learners can prepare to pass first time.",
    },
    "a40-westway-roadworks-2026": {
      title: "A40 Westway Driving Lessons London | Roadworks Guide",
      description: "Learn how A40 Westway roadworks affect driving lessons in London. Tips, routes, and expert guidance from TM Drive School in West London.",
    },
    "manual-vs-automatic-benefits": {
      title: "Manual vs Automatic 2026 | Driving Lessons London Guide",
      description: "Learn manual vs automatic in 2026. Discover costs, benefits, insurance savings, and why manual driving lessons in London still matter today.",
    }
  };

  const current = metaData[slug] || { title: "Blog | TM Drive School" };

  return {
    title: current.title,
    description: current.description,
  };
}

// --- DYNAMIC PAGE RENDERER ---
export default async function BlogPost({ params }) {
  const { slug } = await params;

  const components = {
    "new-driving-test-rules-2026": <Blog1 />,
    "a40-westway-roadworks-2026": <Blog2 />,
    "manual-vs-automatic-benefits": <Blog3 />,
  };

  return (
    <div className="pt-20">
      {components[slug] || (
        <div className="h-screen flex items-center justify-center font-black uppercase italic text-2xl text-gray-400">
          Story Not Found
        </div>
      )}
    </div>
  );
}