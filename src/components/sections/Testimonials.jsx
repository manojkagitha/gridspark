import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ quote, author, role, company }) => (
  <div className="card hover:bg-white/5 hover:border-blue-500/30 text-left transition-all">
    {/* Star Rating */}
    <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-yellow-500 text-xs sm:text-sm" />
      ))}
    </div>

    <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed italic">"{quote}"</p>

    <div className="flex items-center gap-2.5 sm:gap-3">
      {/* Avatar placeholder */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg flex-shrink-0">
        {author.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-white text-sm sm:text-base">{author}</p>
        <p className="text-[var(--color-primary)] text-xs sm:text-sm">
          {role} at {company}
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The AI automation solution from Gridspark reduced our processing time by 75%. Their team understood our needs perfectly and delivered beyond expectations.",
      author: "Rajesh Kumar",
      role: "Operations Director",
      company: "TechVentures India",
    },
    {
      quote:
        "Working with Gridspark was a game-changer for our business. The custom platform they built is intuitive, scalable, and has significantly improved our workflow efficiency.",
      author: "Priya Sharma",
      role: "Head of Product",
      company: "CloudScale Solutions",
    },
    {
      quote:
        "Their expertise in AI and cloud technologies is exceptional. The team delivered a robust solution that perfectly aligned with our business objectives and timeline.",
      author: "Amit Patel",
      role: "CTO",
      company: "DataFlow Systems",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto text-center px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
        What Our <span className="text-gradient-blue">Clients Say</span>
      </h2>

      <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
        Trusted by businesses across industries to deliver innovative AI solutions
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
