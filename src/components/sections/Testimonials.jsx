import React from 'react';

const TestimonialCard = ({ quote, author, role, company }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
    <p className="text-gray-300 italic text-lg mb-6">"{quote}"</p>
    <div className="flex items-center">
      <div>
        <p className="font-bold text-white">{author}</p>
        <p className="text-accent text-sm">{role}, {company}</p>
      </div>
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
    <section className="bg-dark py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-12">Trusted by Industry Leaders</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
       <p className="text-center text-gray-500 mt-8 text-sm">
        Note: Customer names and companies have been changed for confidentiality.
      </p>
    </section>
  );
};

export default Testimonials;
