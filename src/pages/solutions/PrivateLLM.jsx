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
    <section className="min-h-screen w-full py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-purple-400 mb-8">
          Gridspark Private LLM Deployments
        </h1>
        <p className="mb-12 text-lg text-gray-300 max-w-3xl">
          Bring generative AI to your own infrastructure—cloud, datacenter, or on-prem—with Gridspark’s secure, fast, and fully customizable LLM stacks. Protect your IP, accelerate workflows, and ensure compliance in every industry.
        </p>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-purple-300 mb-2">
            Deployment Options & Features
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-100">
            <li>Full privacy: all data stays in your infra, zero vendor storage</li>
            <li>Optimized for Azure, AWS, GCP, and private clouds</li>
            <li>GPU, ARM, Apple Silicon, and hybrid cluster support</li>
            <li>Enterprise SSO, SAML, RBAC, and audit compliance</li>
            <li>Model serving: GPT, LLaMA2, Mistral, Falcon, custom fine-tuning</li>
            <li>Full monitoring, usage tracking, and role dashboards</li>
            <li>No vendor lock-in, portable infra and open standards</li>
          </ul>
        </div>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-purple-300 mb-2">
            Gridspark LLM Deployment Scenarios
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {deployments.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-900/80 rounded-xl border border-purple-400/20 px-6 py-5 shadow-md"
              >
                <div className="font-bold text-purple-200 mb-2">
                  {item.title}
                </div>
                <div className="text-gray-100">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-purple-300 mb-2">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-900/80 rounded-xl border border-purple-400/20 px-6 py-4 shadow-md"
              >
                <div className="font-bold text-purple-200 mb-2">
                  {faq.question}
                </div>
                <div className="text-gray-200">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-purple-900/40 border-t border-purple-400/30 mt-12 pt-8 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            Deploy Private AI with Gridspark
          </h2>
          <p className="mb-4 text-gray-100">
            Our team will scope, provision, and onboard your bespoke LLM stack—end-to-end privacy, performance SLAs, and global coverage.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl shadow hover:bg-yellow-300 transition"
          >
            Contact Gridspark Private AI
          </a>
        </div>
      </div>
    </section>
  );
}

export default PrivateLLM;
