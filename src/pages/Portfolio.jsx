import React from "react";

const portfolioItems = [
  {
    title: "Restaurant POS",
    desc: "Scalable point-of-sale system implemented for 80+ venues.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Sports Platform",
    desc: "Live scoring, fan engagement app with 10,000+ users.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Creative Web Design",
    desc: "Award-winning UI for e-commerce and SaaS businesses.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
];

const Portfolio = () => (
  <section className="section-padding max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-primary mb-12">Portfolio Highlights</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {portfolioItems.map(({ title, desc, img }) => (
        <div key={title} className="card flex flex-col h-full">
          <img src={img} alt={title} className="rounded-xl mb-4 h-40 object-cover" />
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
