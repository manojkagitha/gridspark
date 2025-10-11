import React from 'react';

// Using inline SVGs for icons
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-900/90 p-6 rounded-xl shadow-xl text-center border border-accent/20">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 text-white mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-accent mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Features = () => {
  const featuresData = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4h.01M17 20h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "Custom AI Development",
      description: "We build and fine-tune Large Language Models (LLMs), computer vision systems, and predictive models tailored to your unique data."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-1.806.547z" /></svg>,
      title: "Intelligent Automation",
      description: "Deploy autonomous AI agents to automate complex business processes, from customer support to data entry and financial analysis."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
      title: "AI Cloud Integration",
      description: "Seamlessly deploy, manage, and scale your AI solutions on major cloud platforms like Azure, AWS, and Google Cloud."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      title: "Advanced Data Analytics",
      description: "Transform your raw data into actionable intelligence. We use AI to uncover trends, forecast outcomes, and drive smarter decisions."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-accent mb-4">Your End-to-End AI Partner</h2>
        <p className="text-lg text-gray-300 mb-12">From strategy to deployment, we provide the expertise to make your AI vision a reality.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map(feature => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
