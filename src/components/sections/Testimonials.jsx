import React from 'react';

// Accent color from your design reference
const accentClass = "text-[#FFB53A]";

const TestimonialCard = ({ quote, author, role, company }) => (
  <div className="bg-gray-900 p-8 rounded-xl shadow-xl border border-[#FFB53A]/10">
    <p className="text-gray-300 italic text-lg mb-6">"{quote}"</p>
    <div>
      <p className="font-bold text-white">{author}</p>
      <p className={`${accentClass} text-sm`}>{role}, {company}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Gridspark transformed our operations. Their AI-driven automation solution cut our manual data entry by 90% and allowed our team to focus on strategic growth. They are true partners, not just developers.",
      author: "Jane Doe",
      role: "COO",
      company: "Innovate Logistics Inc.",
    },
    {
      quote: "The custom CRM they built for us was a game-changer. It's intuitive, powerful, and perfectly tailored to our sales process. The project was delivered on time, on budget, and exceeded our expectations.",
      author: "John Smith",
      role: "VP of Sales",
      company: "Future Forward Tech",
    },
    {
      quote: "Working with the Gridspark team was seamless. Their technical expertise is top-notch, and their ability to translate complex business needs into a functional, elegant cloud solution is unmatched.",
      author: "Emily White",
      role: "Founder & CEO",
      company: "SaaSify Startups",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto text-center px-4">
      <h2 className={`text-4xl font-extrabold mb-12 ${accentClass}`}>Trusted by Industry Leaders</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
      <p className="text-center text-gray-400 mt-8 text-sm">
        Note: Customer names and companies have been changed for confidentiality.
      </p>
    </div>
  );
};

export default Testimonials;
