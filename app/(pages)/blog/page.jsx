"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { ArrowRight, Clock } from "lucide-react";

const allPosts = [
  {
    id: 1,
    title: "New Driving Test Rules for West London Learners in 2026",
    description:
      "The way you book a driving test just changed. From the 'two-move limit' to geographic restrictions, learn how to protect your booking in Notting Hill.",
    date: "MARCH 31, 2026",
    readTime: "5 MIN READ",
    category: "TEST PREP",
    slug: "new-driving-test-rules-2026",
    image: "/images/blog1.webp",
  },
  {
    id: 2,
    title: "Driving Near the A40 Westway: Navigating 2026 Roadworks",
    description:
      "The Westway is shut for major repairs. Learn how we are adjusting lesson routes in W10 and W11 to help you master heavy traffic and local hazards.",
    date: "MARCH 31, 2026",
    readTime: "6 MIN READ",
    category: "LOCAL GUIDES",
    slug: "a40-westway-roadworks-2026",
    image: "/images/blog2.webp",
  },
  {
    id: 3,
    title: "Manual vs Automatic in 2026: Why a Manual License is Smart",
    description:
      "Even with the rise of electric cars, a manual license offers lower insurance costs and more job freedom. See why our learners still choose the gearbox.",
    date: "MARCH 31, 2026",
    readTime: "4 MIN READ",
    category: "TIPS & TRICKS",
    slug: "manual-vs-automatic-benefits",
    image: "/images/blog3.webp",
  },
  {
    id: 4,
    title: "How Many Driving Lessons Do You Need Before Your Test?",
    description:
      "Most learners need 40-50 hours of professional tuition. Discover how local West London factors like the A40 and narrow Chelsea streets impact your timeline.",
    date: "MAY 1, 2026",
    readTime: "7 MIN READ",
    category: "LEARNER GUIDES",
    slug: "how-many-driving-lessons-required",
    image: "/images/blog4.webp",
  },
];

// ========== ORGANIZATION SCHEMA ==========
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  "@id": "https://www.tmdriveschool.co.uk/#organization",
  "name": "TM Drive School",
  "alternateName": "TM Drive",
  "url": "https://www.tmdriveschool.co.uk",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.tmdriveschool.co.uk/images/logo.webp",
    "width": 300,
    "height": 60,
  },
  "image": "https://www.tmdriveschool.co.uk/images/hero-3.avif",
  "description": "Expert manual driving lessons in West London. High first-time pass rates and affordable tuition in Notting Hill, Fulham, South Kensington & Maida Vale.",
  "telephone": "+447949488211",
  "email": "info@tmdriveschool.co.uk",
  "areaServed": [
    {
      "@type": "City",
      "name": "West London",
      "containedInPlace": {
        "@type": "City",
        "name": "London",
        "containedInPlace": {
          "@type": "Country",
          "name": "United Kingdom",
        },
      },
    },
    { "@type": "Place", "name": "Notting Hill, London" },
    { "@type": "Place", "name": "Fulham, London" },
    { "@type": "Place", "name": "South Kensington, London" },
    { "@type": "Place", "name": "Maida Vale, London" },
    { "@type": "Place", "name": "Shepherd's Bush, London" },
    { "@type": "Place", "name": "Ladbroke Grove, London" },
    { "@type": "Place", "name": "Chelsea, London" },
  ],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61587049696186",
    "https://www.instagram.com/tmdrive1",
    "https://x.com/tmdrive1",
    "http://www.tiktok.com/@tmdrive1",
    "https://www.trustpilot.com/review/tmdriveschool.co.uk",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+447949488211",
    "email": "info@tmdriveschool.co.uk",
    "contactType": "customer service",
    "availableLanguage": "English",
    "areaServed": "GB",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Driving Lesson Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Manual Driving Lessons",
          "description": "High standard manual driving tuition in West London with expert coaching, safety techniques, and high first-time pass rates.",
        },
      },
    ],
  },
};

// ========== WEBPAGE SCHEMA ==========
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.tmdriveschool.co.uk/blog/#webpage",
  "url": "https://www.tmdriveschool.co.uk/blog",
  "name": "Driving School West London | Manual Lessons | TM Drive — Blog",
  "description": "Get expert manual driving lessons in West London. Read our latest blogs on 2026 driving test updates, West London driving guides, tips & tricks for learners.",
  "isPartOf": {
    "@id": "https://www.tmdriveschool.co.uk/#website",
  },
  "about": {
    "@id": "https://www.tmdriveschool.co.uk/#organization",
  },
  "publisher": {
    "@id": "https://www.tmdriveschool.co.uk/#organization",
  },
  "inLanguage": "en-GB",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.tmdriveschool.co.uk/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": "https://www.tmdriveschool.co.uk/blog",
      },
    ],
  },
};

// ========== WEBSITE SCHEMA ==========
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.tmdriveschool.co.uk/#website",
  "url": "https://www.tmdriveschool.co.uk",
  "name": "TM Drive School",
  "description": "Expert manual driving lessons in West London. High first-time pass rates and affordable pricing.",
  "publisher": {
    "@id": "https://www.tmdriveschool.co.uk/#organization",
  },
  "inLanguage": "en-GB",
};

// ========== ITEMLIST SCHEMA ==========
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "TM Drive School Blog — 2026 Updates & West London Driving Guides",
  "description": "Latest blog posts from TM Drive School covering driving test updates, West London route guides, and learner tips for 2026.",
  "numberOfItems": 4,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "url": "https://www.tmdriveschool.co.uk/blog/new-driving-test-rules-2026",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "url": "https://www.tmdriveschool.co.uk/blog/a40-westway-roadworks-2026",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "url": "https://www.tmdriveschool.co.uk/blog/manual-vs-automatic-benefits",
    },
    {
      "@type": "ListItem",
      "position": 4,
      "url": "https://www.tmdriveschool.co.uk/blog/how-many-driving-lessons-required",
    },
  ],
};

export default function BlogPage() {
  const heroImg = "/images/hero-3.avif";
  const [visiblePosts, setVisiblePosts] = useState(4);

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 2, allPosts.length));
  };

  return (
    <>
      <Head>
        <title>TM Drive School | Driving School West London | Manual Lessons — Blog</title>
        <meta
          name="description"
          content="Get expert manual driving lessons in West London. Read our latest blogs on 2026 driving test updates, West London driving guides, tips & tricks for learners."
        />
        <link rel="canonical" href="https://www.tmdriveschool.co.uk/blog" />
        
        {/* All Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      </Head>

      <main className="font-sans bg-[#fafafa] text-gray-900 pb-24">
        {/* HERO BANNER */}
        <div className="relative h-[500px] w-full overflow-hidden">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={heroImg}
            className="w-full h-full object-cover"
            alt="Driving"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#fafafa]"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <motion.h1
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black uppercase italic text-white leading-[1.1] tracking-tight"
            >
              OUR <span className="text-[#ff6600]">BLOGS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-200 mt-4 max-w-2xl font-bold uppercase tracking-widest text-sm italic"
            >
              2026 Updates & West London Driving Guides
            </motion.p>
          </div>
        </div>

        {/* BLOG FEED */}
        <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-12">
          {allPosts.slice(0, visiblePosts).map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row bg-white rounded-[40px] overflow-hidden shadow-xl shadow-gray-200/40 border border-gray-100 min-h-[360px]"
            >
              <div className="w-full lg:w-1/2 p-4 md:p-6 flex items-center justify-center">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[30px] shadow-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#ff6600] font-black text-[11px] uppercase tracking-[0.2em] border-l-4 border-[#ff6600] pl-3">
                    {post.category}
                  </span>
                  <span className="text-gray-300 text-[11px]">|</span>
                  <span className="text-gray-400 font-bold text-[11px] tracking-widest">
                    {post.date}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic leading-[1.1] mb-4 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-500 text-base leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 tracking-widest">
                    <Clock size={14} className="text-[#ff6600]" />
                    {post.readTime}
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <div className="flex items-center gap-2 text-[#ff6600] font-black uppercase tracking-[0.2em] text-[10px] cursor-pointer group">
                      READ STORY{" "}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {visiblePosts < allPosts.length && (
            <div className="mt-12 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={loadMore}
                className="flex items-center justify-center gap-3 bg-[#ff6600] px-10 py-4 rounded-2xl font-black uppercase text-sm tracking-widest text-white shadow-xl shadow-orange-600/20 hover:scale-105 transition-all"
              >
                LOAD MORE
              </motion.button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}