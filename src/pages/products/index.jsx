import React from "react";

const products = [
  {
    name: "TinyKola – Restaurant AI RMS",
    description:
      "Revolutionize your restaurant with TinyKola’s AI-powered Restaurant Management Suite. Tailored for busy Indian eateries, it offers lightning-fast order processing, digital menu updates, secure billing, and automated GST filing. Features include a user-friendly POS, role-based staff controls, real-time AI sales analytics, and seamless inventory management—all supported by offline reliability, advanced security, and 24/7 expert help. Whether you run a cloud kitchen, a fine-dine, or a quick-serve outlet, TinyKola unlocks actionable insights, maximizes margins, and ensures happier staff, delighted customers, and hassle-free compliance.",
  },
  {
    name: "ChecKaro Home Inspection",
    description:
      "ChecKaro is Hyderabad’s most trusted home inspection platform. Our certified professionals deploy German & US tech—including wall scanners, borescopes, and thermal imaging—for comprehensive civil, electrical, plumbing, and interior audits. Get a detailed digital report with room-by-room images, defect highlights, and actionable recommendations. Choose from Basic to Premium plans—perfect for pre-purchase, post-renovation, rental, or move-in/move-out inspections. ChecKaro helps you catch hidden issues, save lakhs by rectifying defects early, and live absolutely stress-free. Clients rave about our transparent process, rigorous quality, and expert support—all for the price of peace of mind.",
  },
  {
    name: "AI Chat Assistant",
    description:
      "A customizable chatbot that integrates into your platform, handling live Q&A, customer support, and automated scheduling.",
  },
  {
    name: "GenAI Transcription Suite",
    description:
      "Real-time meeting and interview transcription tool powered by large language models, compatible with Zoom, Teams, and web calls.",
  },
  {
    name: "OpenSearch Monitoring Dashboard",
    description:
      "Enterprise dashboard for scalable log analytics, search events, and real-time metrics, built for OpenSearch clusters.",
  },
  {
    name: "Cloud Cost Analyzer",
    description:
      "Smart Azure and AWS cost tracking and alerting engine, helping teams optimize resources and spot budget issues early.",
  },
];

const Products = () => (
  <section
    className="
      py-20 min-h-screen
      bg-[var(--color-bg)]
      text-[var(--color-text)]
      transition-colors duration-300
    "
  >
    <div className="max-w-6xl mx-auto px-4">
      <h1
        className="
          text-5xl font-extrabold mb-8
          text-[var(--color-primary)]
        "
      >
        Our Products
      </h1>
      <p
        className="
          text-xl mb-12 max-w-3xl
          opacity-85
        "
      >
        Explore Gridspark Solutions’ suite of scalable products designed for
        enterprise automation, AI insight, and cloud optimization. Each product
        can be deployed, customized, and supported by our expert team.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map(({ name, description }) => (
          <div
            key={name}
            className="
              p-8 rounded-xl shadow-lg flex flex-col
              bg-[var(--color-card)]
              border border-[var(--color-border)]
              hover:shadow-2xl hover:-translate-y-1
              transition-all duration-300
            "
          >
            <h2
              className="
                text-2xl font-bold mb-2
                text-[var(--color-primary)]
              "
            >
              {name}
            </h2>
            <p className="opacity-85">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
