import React, { useState } from "react";

const faqs = [
  {
    question: "What is Gridspark Solutions?",
    answer:
      "Gridspark Solutions delivers advanced AI, cloud, and automation tools for organizations seeking to modernize operations securely, reliably, and at scale.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "We adhere to industry best practices for cloud security and privacy, including encrypted data flows, secure storage, and strict access controls for all client deployments.",
  },
  {
    question: "Can I see a live demo of your AI products?",
    answer:
      "Absolutely! Visit our AI Demos page or contact us for a custom demo tailored to your workflow.",
  },
  {
    question: "Do you help migrate from legacy systems?",
    answer:
      "Yes, our team specializes in smooth migrations from on-prem or legacy cloud stacks to modern, scalable solutions using Azure, AWS, or hybrid architectures.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "We provide full lifecycle support, including monitoring, optimization, feature updates, and technical support as needed.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(-1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-accent mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-700 pb-4">
            <button
              onClick={() => setOpen(open === idx ? -1 : idx)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <span className={`font-medium ${open === idx ? "text-secondary" : "text-gray-200"}`}>{faq.question}</span>
              <span className="ml-2 text-accent">{open === idx ? "−" : "+"}</span>
            </button>
            {open === idx && (
              <div className="text-gray-400 mt-2 pl-2 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-gray-400">
        Still have a question? <a href="/contact" className="text-accent underline">Contact our team</a> for more info!
      </p>
    </div>
  );
};

export default FAQ;
