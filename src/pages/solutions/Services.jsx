import React from 'react';
import { Link } from 'react-router-dom';

// Icon components for visual clarity
const BrainCircuitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-accent"><path d="M12 2a10 10 0 0 0-4.3 19.42"/><path d="M12 2a10 10 0 0 1 4.3 19.42"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/><path d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"/><path d="M12 15a6 6 0 0 0 6-6"/><path d="M12 9a6 6 0 0 0-6 6"/><path d="M15 12a3 3 0 0 0-3-3"/><path d="M9 12a3 3 0 0 0 3 3"/></svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-accent"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
);

const CloudCogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-accent"><path d="M12 22a5.52 5.52 0 0 0 5.5-5.5c0-1.63-2.06-3.5-5.5-3.5s-5.5 1.87-5.5 3.5a5.52 5.52 0 0 0 5.5 5.5Z"/><path d="M12 13.5V11a4 4 0 1 1 4 4h-1.5"/><path d="m14.5 9.5 3-3"/><path d="M12 6a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>
);

const AppWindowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-accent"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/></svg>
);


const ServiceCard = ({ icon, title, description, items }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-2xl font-bold text-white ml-4">{title}</h3>
    </div>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <svg className="h-5 w-5 text-accent flex-shrink-0 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          <span className="text-gray-300">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const servicesData = [
    {
      icon: <BrainCircuitIcon />,
      title: "Custom AI Development",
      description: "We design and build bespoke AI models and applications from the ground up to solve your unique business challenges.",
      items: ["Generative AI & LLM Applications", "Predictive Analytics & Forecasting", "Computer Vision & Image Analysis", "Natural Language Processing (NLP)", "Recommendation Engines"]
    },
    {
      icon: <ZapIcon />,
      title: "AI Integration & Automation",
      description: "Seamlessly integrate cutting-edge AI capabilities into your existing workflows and systems to boost efficiency and unlock new opportunities.",
      items: ["AI-Powered Chatbots & Virtual Assistants", "Intelligent Document Processing", "Workflow Automation with RPA & AI", "CRM & ERP AI Enhancement", "API Integration with OpenAI, Gemini & more"]
    },
    {
      icon: <CloudCogIcon />,
      title: "Cloud & DevOps Excellence",
      description: "Our robust cloud infrastructure and DevOps practices provide the scalable, secure, and reliable foundation your AI solutions need to thrive.",
      items: ["Cloud Migration & Strategy (Azure, AWS, GCP)", "CI/CD Pipeline Automation", "Infrastructure as Code (IaC)", "Kubernetes & Containerization", "AI Model Deployment & MLOps"]
    },
    {
      icon: <AppWindowIcon />,
      title: "Digital Product Engineering",
      description: "Beyond AI, we offer end-to-end software development services to build the high-performance web and mobile applications your business runs on.",
      items: ["Full-Stack Web Application Development", "Native & Cross-Platform Mobile Apps", "UI/UX Design & Prototyping", "Scalable Backend Architecture", "Third-Party API Integration"]
    }
  ];

  return (
    <div className="bg-dark text-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">Our Services</h1>
          <p className="mt-4 text-xl text-gray-300">
            From custom AI solutions to scalable cloud infrastructure, we provide the end-to-end technical expertise to transform your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Our Approach to Innovation</h2>
          <p className="text-lg text-gray-400 mb-12">We follow a proven, collaborative process to ensure your project's success from concept to launch and beyond.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-accent text-dark rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold">Discover & Plan</h3>
              <p className="text-gray-400 mt-2">We dive deep into your goals to create a strategic roadmap.</p>
            </div>
             <div className="flex flex-col items-center">
              <div className="bg-accent text-dark rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold">Design & Prototype</h3>
              <p className="text-gray-400 mt-2">We craft intuitive designs and functional prototypes.</p>
            </div>
             <div className="flex flex-col items-center">
              <div className="bg-accent text-dark rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold">Develop & Test</h3>
              <p className="text-gray-400 mt-2">Our engineers build and rigorously test your solution.</p>
            </div>
             <div className="flex flex-col items-center">
              <div className="bg-accent text-dark rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold">Deploy & Scale</h3>
              <p className="text-gray-400 mt-2">We launch your product and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-lg text-gray-300 mb-8">Let's turn your vision into a reality. Contact us today for a free consultation.</p>
          <Link to="/contact" className="btn-primary text-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
