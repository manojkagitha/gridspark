import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-gray-700 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-white focus:outline-none"
      >
        <span>{question}</span>
        <span className="transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "What kind of technologies do you specialize in?",
      answer: "We are full-stack specialists with deep expertise in cloud platforms (Azure, AWS), modern frontend frameworks (React, Angular), and robust backend technologies (Node.js, Spring Boot). Our core focus is leveraging AI and machine learning to build intelligent, scalable solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity, but we follow an agile methodology to deliver value quickly. A typical MVP (Minimum Viable Product) can be developed in 8-12 weeks. We provide a detailed project roadmap with clear milestones after our initial discovery phase.",
    },
    {
      question: "What does your project engagement process look like?",
      answer: "Our process begins with a free consultation to understand your goals. From there, we move to a discovery and planning phase, followed by iterative design, development sprints, and rigorous testing. We believe in full transparency and provide regular updates and demos throughout the project lifecycle.",
    },
    {
      question: "Do you provide support after the project is launched?",
      answer: "Absolutely. We offer flexible post-launch support and maintenance packages to ensure your application remains secure, updated, and performs optimally. We see ourselves as long-term technology partners, not just one-time project developers.",
    },
  ];

  return (
    <section className="bg-dark py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
