import React from 'react';

// Individual showcase item component
const ShowcaseCard = ({ title, description, tags, imageUrl }) => (
  <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-accent text-white text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const AIShowcase = () => {
  const showcases = [
    {
      title: "Intelligent Support Chatbot",
      description: "A custom-trained NLP model that resolves over 80% of customer queries instantly, understands conversational context, and seamlessly hands off complex issues to human agents. Deployed for a leading e-commerce platform.",
      tags: ["NLP", "Customer Support", "Automation", "React"],
      imageUrl: "https://placehold.co/600x400/3498db/ffffff?text=AI+Chatbot",
    },
    {
      title: "Predictive Sales Analytics",
      description: "A machine learning dashboard that analyzes historical sales data, market trends, and CRM activity to forecast quarterly revenue with 95% accuracy and identify high-value leads for the sales team.",
      tags: ["Machine Learning", "Data Visualization", "Salesforce", "Python"],
      imageUrl: "https://placehold.co/600x400/2ecc71/ffffff?text=Analytics",
    },
    {
      title: "Automated Document Summarizer",
      description: "An AI-powered tool for legal and compliance teams that ingests lengthy contracts and reports, extracting key clauses, summaries, and potential risks in seconds, reducing manual review time by hours.",
      tags: ["AI", "Document Processing", "Compliance", "Cloud"],
      imageUrl: "https://placehold.co/600x400/9b59b6/ffffff?text=Doc+AI",
    },
  ];

  return (
    <section className="bg-dark py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">Our AI in Action</h2>
        <p className="text-gray-300 text-lg mb-12">We don't just talk about AI—we build intelligent solutions that drive real business results.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcases.map((item) => (
            <ShowcaseCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
