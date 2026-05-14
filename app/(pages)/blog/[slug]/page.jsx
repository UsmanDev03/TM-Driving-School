import Blog1 from "../_components/Blog1";
import Blog2 from "../_components/Blog2";
import Blog3 from "../_components/Blog3";
import Blog4 from "../_components/Blog4";

// --- SCHEMAS FOR EACH BLOG POST ---
const getBlogSchema = (slug) => {
  const schemas = {
    "new-driving-test-rules-2026": {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": "https://www.tmdriveschool.co.uk/blog/new-driving-test-rules-2026/#article",
      "mainEntityOfPage": "https://www.tmdriveschool.co.uk/blog/new-driving-test-rules-2026",
      "headline": "New Driving Test Rules for West London Learners in 2026",
      "description": "Discover new DVSA driving test rules in 2026. Learn about the two-move booking limit, geographic restrictions, and how West London learners can prepare.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.tmdriveschool.co.uk/images/blog1.webp",
        "width": 1200,
        "height": 630
      },
      "datePublished": "2026-03-31",
      "dateModified": "2026-03-31",
      "author": { "@id": "https://www.tmdriveschool.co.uk/#organization" },
      "publisher": { "@id": "https://www.tmdriveschool.co.uk/#organization" },
      "articleSection": "Test Prep",
      "wordCount": 1200,
      "timeRequired": "PT5M",
      "inLanguage": "en-GB"
    },
    "a40-westway-roadworks-2026": {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": "https://www.tmdriveschool.co.uk/blog/a40-westway-roadworks-2026/#article",
      "mainEntityOfPage": "https://www.tmdriveschool.co.uk/blog/a40-westway-roadworks-2026",
      "headline": "Driving Near the A40 Westway: Navigating 2026 Roadworks",
      "description": "The Westway is shut for major repairs. Learn how TM Drive School is adjusting lesson routes in W10 and W11.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.tmdriveschool.co.uk/images/blog2.webp",
        "width": 1200,
        "height": 630
      },
      "datePublished": "2026-03-31",
      "dateModified": "2026-03-31",
      "author": { "@id": "https://www.tmdriveschool.co.uk/#organization" },
      "publisher": { "@id": "https://www.tmdriveschool.co.uk/#organization" },
      "articleSection": "Local Guides",
      "wordCount": 1400,
      "timeRequired": "PT6M",
      "inLanguage": "en-GB"
    },
    "manual-vs-automatic-benefits": {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": "https://www.tmdriveschool.co.uk/blog/manual-vs-automatic-benefits/#article",
      "mainEntityOfPage": "https://www.tmdriveschool.co.uk/blog/manual-vs-automatic-benefits",
      "headline": "Manual vs Automatic in 2026: Why a Manual License is Smart",
      "description": "Even with the rise of electric cars, a manual driving licence offers lower insurance costs and more job freedom.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.tmdriveschool.co.uk/images/blog3.webp",
        "width": 1200,
        "height": 630
      },
      "datePublished": "2026-03-31",
      "dateModified": "2026-03-31",
      "author": { "@id": "https://www.tmdriveschool.co.uk/#organization" },
      "publisher": { "@id": "https://www.tmdriveschool.co.uk/#organization" },
      "articleSection": "Tips & Tricks",
      "wordCount": 900,
      "timeRequired": "PT4M",
      "inLanguage": "en-GB"
    },
    "how-many-driving-lessons-required": {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": "https://www.tmdriveschool.co.uk/blog/how-many-driving-lessons-required/#article",
      "mainEntityOfPage": "https://www.tmdriveschool.co.uk/blog/how-many-driving-lessons-required",
      "headline": "How Many Driving Lessons Do You Need Before Your Test?",
      "description": "Most learners need 40-50 hours of professional tuition. Discover how local West London factors impact your timeline.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.tmdriveschool.co.uk/images/blog4.webp",
        "width": 1200,
        "height": 630
      },
      "datePublished": "2026-05-01",
      "dateModified": "2026-05-01",
      "author": { "@id": "https://www.tmdriveschool.co.uk/#organization" },
      "publisher": { "@id": "https://www.tmdriveschool.co.uk/#organization" },
      "articleSection": "Learner Guides",
      "wordCount": 1600,
      "timeRequired": "PT7M",
      "inLanguage": "en-GB"
    }
  };
  return schemas[slug];
};

const getBreadcrumbSchema = (slug, title) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.tmdriveschool.co.uk/"
      },
      {
        "@type": "ListItem",
        "position": 2",
        "name": "Blog",
        "item": "https://www.tmdriveschool.co.uk/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `https://www.tmdriveschool.co.uk/blog/${slug}`
      }
    ]
  };
};

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
    },
    "how-many-driving-lessons-required": {
      title: "How Many Driving Lessons Do I Need? | West London 2026 Guide",
      description: "Find out how many hours of driving lessons are needed to pass your test in 2026. Expert breakdown for Fulham, Notting Hill, and London learners.",
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
    "how-many-driving-lessons-required": <Blog4 />,
  };

  const blogTitles = {
    "new-driving-test-rules-2026": "New Driving Test Rules for West London Learners in 2026",
    "a40-westway-roadworks-2026": "Driving Near the A40 Westway: Navigating 2026 Roadworks",
    "manual-vs-automatic-benefits": "Manual vs Automatic in 2026: Why a Manual License is Smart",
    "how-many-driving-lessons-required": "How Many Driving Lessons Do You Need Before Your Test?"
  };

  const blogSchema = getBlogSchema(slug);
  const breadcrumbSchema = getBreadcrumbSchema(slug, blogTitles[slug]);

  return (
    <>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="pt-20">
        {components[slug] || (
          <div className="h-screen flex items-center justify-center font-black uppercase italic text-2xl text-gray-400">
            Story Not Found
          </div>
        )}
      </div>
    </>
  );
}