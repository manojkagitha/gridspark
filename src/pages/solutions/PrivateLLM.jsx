import React from "react";

const deployments = [
  {
    title: "Private Cloud LLM Deployments",
    description:
      "Deploy your own generative AI on Azure, AWS, GCP, or your secure datacenter, with full control over models, endpoints, data, and user authentication."
  },
  {
    title: "On-Premises GenAI Stacks",
    description:
      "Air-gapped, fully internal LLM clusters for finance, healthcare, and R&D organizations that require highest privacy, compliance, and low latency."
  },
  {
    title: "ARM64 & Custom Hardware Optimization",
    description:
      "Run advanced LLMs on ARM, Apple Silicon, or GPU clusters, compatible with your IT estate. Gridspark handles optimizations for cost, speed, and energy."
  },
  {
    title: "Secure Access & Compliance Integrations",
    description:
      "Integrate with SSO, RBAC, and audit trails. Deploy with multi-region redundancy, ISO/SOC/HIPAA frameworks, and role-based dashboards—no vendor lock-in."
  }
];

const faqs = [
  {
    question: "Why run a private LLM?",
    answer:
      "Private LLMs keep your data, workflows, and intellectual property fully protected. You control access, training, retention, and compliance, unlocking custom use cases without third-party leakage.",
  },
  {
    question: "What models and frameworks do you support?",
    answer:
      "Deploy GPT (open source), LLaMA, Mistral, Falcon, and multimodal/fine-tuned models. Integrations are supported for HuggingFace, Ollama, Nvidia Triton, and custom REST+gRPC endpoints.",
  },
  {
    question: "How does monitoring and scaling work?",
    answer:
      "Gridspark provides real-time dashboards, usage analytics, autoscaling, and alerting—integrated with your existing observability stack (Prometheus, Azure Monitor, Datadog, etc).",
  },
  {
    question: "Do you support air-gapped or hybrid setups?",
    answer:
      "Yes. Gridspark specializes in air-gapped, hybrid, and federated deployments—across sites, regions, and clouds. We automate day-2 ops, patching, and DR failover.",
  },
  {
    question: "What’s required to get started?",
    answer:
      "Just your desired hardware, secure endpoint setup, and business use case. Gridspark provisions, secures, and maintains all infra with transparent onboarding and custom SLAs.",
  }
];

function PrivateLLM() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white py-16 px-0">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-extrabold text-purple-300 mb-2">Gridspark Private LLM Deployments</h1>
        <p className="mb-6 text-lg text-indigo-200">
          Bring generative AI to your own infrastructure—cloud, datacenter, or on-prem—with Gridspark’s secure, fast, and fully customizable LLM stacks. Protect your IP, accelerate workflows, and ensure compliance in every industry.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-200 mb-2">Deployment Options & Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-indigo-100">
            <li>Full privacy: all data stays in your infra, zero vendor storage</li>
            <li>Optimized for Azure, AWS, GCP, and private clouds</li>
            <li>GPU, ARM, Apple Silicon, and hybrid cluster support</li>
            <li>Enterprise SSO, SAML, RBAC, and audit compliance</li>
            <li>Model serving: GPT, LLaMA2, Mistral, Falcon, custom fine-tuning</li>
            <li>Full monitoring, usage tracking, and role dashboards</li>
            <li>No vendor lock-in, portable infra and open standards</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-200 mb-2">Gridspark LLM Deployment Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {deployments.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-indigo-800 via-purple-800 to-black rounded-xl p-5 border border-indigo-900">
                <div className="font-bold text-purple-200 mb-1">{item.title}</div>
                <div className="text-indigo-100">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-200 mb-2">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <div className="font-bold text-purple-300">{faq.question}</div>
                <div className="text-indigo-100">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-purple-700/10 border-t border-purple-400/30 mt-10 pt-6 rounded-xl">
          <h2 className="text-2xl font-bold text-purple-200 mb-2">Deploy Private AI with Gridspark</h2>
          <p className="mb-4 text-indigo-100">
            Our team will scope, provision, and onboard your bespoke LLM stack—end-to-end privacy, performance SLAs, and global coverage.
          </p>
          <a href="/contact" className="inline-block bg-purple-400 text-black font-semibold px-6 py-2 rounded shadow hover:bg-purple-300 transition">
            Contact Gridspark Private AI
          </a>
        </div>
      </div>
    </div>
  );
}

export default PrivateLLM;
