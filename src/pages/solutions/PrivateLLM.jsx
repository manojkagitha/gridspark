import React from "react";

const deployments = [
  {
    title: "Private Cloud LLM Deployments",
    description:
      "Deploy your own generative AI stack on Azure, AWS, GCP, or internal clouds—with total control over models, data, endpoints, and authentication.",
  },
  {
    title: "On‑Premises GenAI Stacks",
    description:
      "Air‑gapped configurations for finance, healthcare, and R&D enterprises demanding privacy, compliance, and ultra‑low latency operations.",
  },
  {
    title: "ARM64 & Hardware Optimizations",
    description:
      "Run LLMs efficiently on ARM, Apple Silicon, or GPU clusters. Gridspark custom‑tunes deployments for cost, throughput, and sustainability.",
  },
  {
    title: "Secure Access & Compliance",
    description:
      "Integrated SSO, RBAC, and audit‑ready dashboards. Multi‑region redundancy and full ISO/SOC/HIPAA frameworks—no vendor lock‑in.",
  },
];

const faqs = [
  {
    question: "Why run a private LLM?",
    answer:
      "Private LLMs protect sensitive data and IP. You govern access, retention, and compliance, enabling precise, secure use cases without external data exposure.",
  },
  {
    question: "What models and frameworks do you support?",
    answer:
      "We support GPT (open‑source), LLaMA, Mistral, Falcon, and fine‑tuned variants. Integrations available for HuggingFace, Ollama, and Nvidia Triton endpoints.",
  },
  {
    question: "How does monitoring and scaling work?",
    answer:
      "Gridspark includes real‑time dashboards, usage stats, auto‑scaling, and alerting—integrated with your existing observability stack like Prometheus or Datadog.",
  },
  {
    question: "Do you support air‑gapped or hybrid setups?",
    answer:
      "Yes. We specialize in air‑gapped, multi‑site, and federated environments. Monitoring, patching, compliance, and redundancy are all automated.",
  },
  {
    question: "What’s required to get started?",
    answer:
      "Simply provide your infrastructure preferences and security baseline. Gridspark provisions, secures, and maintains stacks with transparent SLAs.",
  },
];

function PrivateLLM() {
  return (
    <section className="min-h-screen w-full pt-24 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center" data-aos="fade-up">
          Gridspark <span className="text-gradient-blue">Private LLM Deployments</span>
        </h1>

        <p className="mb-16 text-lg max-w-3xl mx-auto text-center text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Deploy generative AI securely on your infrastructure—cloud or on‑prem—using Gridspark’s scalable, compliant LLM platforms. Protect intellectual property, enhance workflows, and achieve unmatched performance within your own environment.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Deployment Features */}
          <div className="glass-panel p-8 rounded-2xl border border-[var(--color-border)]" data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-[var(--color-border)] pb-4">
              Deployment Options & Features
            </h2>
            <ul className="space-y-3">
              {[
                "Zero vendor lock‑in, fully portable architecture",
                "Optimized for Azure, AWS, GCP, and hybrid setups",
                "Secure, private data—never leaving your control",
                "Enterprise‑ready SSO, SAML, RBAC, and audit compliance",
                "Model serving for GPT, LLaMA2, Mistral, Falcon, and custom fine‑tuning",
                "Real‑time monitoring, usage analytics, and dashboards"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="text-[var(--color-primary)] mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Deployment Scenarios */}
          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-6 text-white text-center md:text-left">
              Gridspark LLM Deployment Scenarios
            </h2>
            {deployments.map((item, idx) => (
              <div
                key={idx}
                className="card group hover:border-[var(--color-primary)]"
              >
                <div className="font-bold mb-2 text-white group-hover:text-[var(--color-primary)] transition-colors">
                  {item.title}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="card group hover:border-[var(--color-primary)]"
              >
                <div className="font-bold mb-2 text-white group-hover:text-[var(--color-primary)] transition-colors">
                  {faq.question}
                </div>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="glass-panel p-10 rounded-3xl text-center border border-[var(--color-border)] max-w-4xl mx-auto" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Deploy Private AI with Gridspark
          </h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
            Gridspark handles provisioning, optimization, and ongoing support for your secure, high‑performance LLM deployment—any environment, anywhere.
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block">
            Contact Gridspark Private AI
          </a>
        </div>
      </div>
    </section>
  );
}

export default PrivateLLM;
