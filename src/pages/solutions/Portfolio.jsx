import React from "react";

// Updated images can be replaced with real RMS app/sports screenshots!
const portfolioItems = [
  {
    title: "Restaurant RMS Platform",
    desc: "Cloud-based point-of-sale, order management with smart analytics for modern restaurants. Used in 80+ venues.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    tags: ["POS", "Order Management", "Analytics"],
  },
  {
    title: "Live Score Sports App",
    desc: "Fan engagement app with live scores, player stats, tournament management, and instant updates for sports fans.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    tags: ["Scores", "Stats", "Mobile App"],
  },
  {
    title: "Modern Restaurant UI/UX",
    desc: "Award-winning mobile design for restaurant brands, smooth ordering and payment integration.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    tags: ["UI/UX", "Branding", "Mobile"],
  },
];

const Portfolio = () => (
  <section className="section-padding max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-primary mb-12">Portfolio Highlights</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {portfolioItems.map(({ title, desc, img, tags }) => (
        <div key={title} className="card flex flex-col h-full">
          <img src={img} alt={title} className="rounded-xl mb-4 h-56 object-cover border-2 border-primary" />
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-2">{desc}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span key={tag} className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
