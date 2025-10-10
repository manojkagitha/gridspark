import React from "react";

const testimonials = [
  {
    name: "Anjali Patel",
    company: "Nova Restaurant Group",
    role: "GM, Customer Experience",
    quote: "Gridspark delivered a seamless billing and analytics solution for our venues. Their AI expertise is unmatched—our team works smarter, faster, and we’ve seen real ROI in a matter of weeks.",
    image: "/assets/anjali.jpg", // swap with your actual images/avatars
  },
  {
    name: "James Williams",
    company: "FinEdge Insurance",
    role: "Director of Innovation",
    quote: "Automated claims, instant response to client questions, and real-time dashboards. Partnering with Gridspark transformed our customer journey.",
    image: "/assets/james.jpg",
  },
  {
    name: "Fatima Noor",
    company: "OpenSearch Ops",
    role: "Head of Ops",
    quote: "The real-time log insights and smart alerts Gridspark built for us eliminated outages and proactively improved reliability. Highly recommended!",
    image: "/assets/fatima.jpg",
  },
];

const Testimonials = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-accent mb-8">What Our Clients Say</h1>
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-dark border border-gray-700 rounded-lg p-6 shadow flex flex-col items-center text-center">
          <img
            src={t.image}
            alt={t.name}
            className="h-16 w-16 rounded-full mb-2 object-cover border-2 border-accent"
            onError={e => {e.target.src="/assets/profile-default.png"}}
          />
          <div className="font-medium text-lg text-secondary mb-1">{t.name}</div>
          <div className="text-xs text-gray-400 mb-2">{t.role}, {t.company}</div>
          <blockquote className="text-sm text-gray-200 italic border-l-4 border-accent pl-3">{t.quote}</blockquote>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
