import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/common/SEO";

const agentTypes = [
  {
    title: "Sales Agent",
    description:
      "Autonomous AI that researches prospects, drafts personalized outreach, schedules meetings, and follows up — reducing sales cycles by up to 40%.",
    features: ["Lead research & enrichment", "Auto email/LinkedIn outreach", "Meeting scheduling", "Deal health monitoring"],
  },
  {
    title: "Support Agent",
    description:
      "24/7 intelligent support across web, WhatsApp, Slack, and Teams. Resolves 80%+ queries autonomously with seamless human handoff.",
    features: ["Multi-channel deployment", "Context-aware responses", "Ticket creation & routing", "Sentiment analysis"],
  },
  {
    title: "Research Agent",
    description:
      "Ingests documents, crawls data sources, and synthesizes insights. Automates competitive analysis, market research, and due diligence.",
    features: ["Document ingestion & RAG", "Web search & synthesis", "Report generation", "Citation tracking"],
  },
  {
    title: "Finance Agent",
    description:
      "Automates invoice processing, expense categorization, fraud detection, and financial reporting with auditability built-in.",
    features: ["Invoice & receipt processing", "Anomaly detection", "Regulatory compliance", "Automated reconciliation"],
  },
  {
    title: "Operations Agent",
    description:
      "Orchestrates cross-functional workflows — from inventory management to HR onboarding — with intelligent decision-making and escalation.",
    features: ["Workflow automation", "Resource allocation", "Escalation routing", "KPI monitoring"],
  },
  {
    title: "DevOps Agent",
    description:
      "Monitors infrastructure, auto-remediates incidents, manages deployments, and keeps CI/CD pipelines healthy around the clock.",
    features: ["Incident auto-remediation", "Deployment automation", "Log analysis & alerting", "Cost optimization"],
  },
];

const frameworks = [
  { name: "LangGraph", desc: "Stateful multi-agent orchestration with cycles and branching" },
  { name: "CrewAI", desc: "Role-based collaborative agent teams for complex tasks" },
  { name: "AutoGen", desc: "Microsoft's framework for conversational multi-agent systems" },
  { name: "LangChain", desc: "Composable chains and tool-using agent architectures" },
  { name: "Semantic Kernel", desc: "Enterprise AI orchestration for .NET and Python" },
  { name: "n8n + AI", desc: "Visual workflow automation with embedded AI agent nodes" },
];

const capabilities = [
  "Tool-using agents — web search, code execution, CRM actions, email, calendar",
  "Memory and RAG-powered agents with persistent context across sessions",
  "Multi-agent orchestration — parallel, sequential, and hierarchical pipelines",
  "Human-in-the-loop workflows with approval gates and escalation",
  "Self-improving agents with evaluation loops and prompt optimization",
  "Private & secure — deploy on your infrastructure with full compliance",
  "Multi-model support — GPT-4o, Claude 3.7, Gemini 2.0, LLaMA 3.3, Mistral",
  "Real-time monitoring dashboards with cost tracking and performance analytics",
];

const faqs = [
  {
    question: "What is Agentic AI and how is it different from traditional AI?",
    answer:
      "Traditional AI handles single tasks reactively. Agentic AI systems autonomously plan, execute multi-step workflows, use tools, and adapt to outcomes — acting more like a digital employee than a simple chatbot.",
  },
  {
    question: "Which frameworks do you use for multi-agent systems?",
    answer:
      "We work with LangGraph, CrewAI, AutoGen, LangChain, and Semantic Kernel — choosing the right framework based on your use case complexity, latency needs, and deployment environment.",
  },
  {
    question: "Can agents integrate with our existing CRM and tools?",
    answer:
      "Yes. Our agents connect to Salesforce, HubSpot, Zoho, Slack, Teams, Jira, email, and custom APIs. We build tool-using agents that interact with your stack natively.",
  },
  {
    question: "How do you ensure agent safety and compliance?",
    answer:
      "We implement guardrails, approval gates, human-in-the-loop oversight, audit trails, and compliance frameworks (GDPR, HIPAA, SOC2). Every agent action is logged and explainable.",
  },
  {
    question: "What's the typical timeline for deploying an AI agent?",
    answer:
      "A single-purpose agent can be deployed in 2-4 weeks. Multi-agent orchestration systems typically take 6-10 weeks including testing, guardrails, and production hardening.",
  },
];

function AIAgents() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Agent Development - GridSpark Solutions",
    "description": "Build autonomous AI agents and multi-agent systems for enterprise automation. Sales agents, support agents, research agents, and custom agentic workflows.",
    "provider": {
      "@type": "Organization",
      "name": "GridSpark Solutions",
    },
  };

  return (
    <>
      <SEO
        title="AI Agents — Autonomous Agentic AI Solutions"
        description="Build intelligent AI agents that autonomously execute multi-step workflows. Sales agents, support agents, multi-agent orchestration with LangGraph, CrewAI, and AutoGen."
        keywords="AI agents, agentic AI, multi-agent systems, autonomous AI, LangGraph, CrewAI, AutoGen, AI sales agent, AI support agent, enterprise AI automation"
        canonical="https://www.gridsparksolutions.com/solutions/ai-agents"
        ogType="website"
        schema={pageSchema}
      />

      <section className="min-h-screen w-full pt-20 sm:pt-24 pb-12 sm:pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-[-10%] right-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Hero */}
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
              The Agentic AI Company
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Build <span className="text-gradient-blue">Autonomous AI Agents</span>
              <br />That Work for Your Business
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From single-purpose assistants to multi-agent orchestration systems — we design, build, and deploy
              intelligent agents that plan, reason, use tools, and deliver measurable outcomes autonomously.
            </p>
          </div>

          {/* Why Agentic AI */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 sm:mb-20" data-aos="fade-up" data-aos-delay="100">
            <div className="card p-6 text-center opacity-50">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg font-bold text-gray-500 mb-2">Traditional Software</h3>
              <p className="text-sm text-gray-600">Rule-based, brittle, requires manual updates for every edge case</p>
            </div>
            <div className="card p-6 text-center opacity-60">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold text-gray-400 mb-2">Standard AI</h3>
              <p className="text-sm text-gray-500">Reactive, single-task, no memory or multi-step reasoning</p>
            </div>
            <div className="card p-6 text-center border-[var(--color-primary)] bg-blue-500/5">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">Agentic AI ✅</h3>
              <p className="text-sm text-gray-300">Autonomous, multi-step, tool-using, self-improving, production-ready</p>
            </div>
          </div>

          {/* Agent Types Grid */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10" data-aos="fade-up">
              AI Agents We <span className="text-gradient-blue">Build</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {agentTypes.map(({ title, description, features }, idx) => (
                <div
                  key={title}
                  className="glass-panel p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-start text-sm text-gray-300">
                        <span className="text-[var(--color-primary)] mr-2 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[var(--color-border)]" data-aos="fade-right">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white border-b border-[var(--color-border)] pb-4">
                Core Agentic Capabilities
              </h2>
              <ul className="space-y-3">
                {capabilities.map((item, i) => (
                  <li key={i} className="flex items-start text-sm sm:text-base text-gray-300">
                    <span className="text-[var(--color-primary)] mr-2 sm:mr-3 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[var(--color-border)]" data-aos="fade-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white border-b border-[var(--color-border)] pb-4">
                Agent Frameworks & Stack
              </h2>
              <div className="space-y-4">
                {frameworks.map(({ name, desc }, i) => (
                  <div key={i} className="flex items-start text-gray-300">
                    <span className="text-[var(--color-primary)] mr-3 flex-shrink-0 font-bold">▹</span>
                    <div>
                      <span className="font-semibold text-white">{name}</span>
                      <span className="text-sm text-gray-400"> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16 sm:mb-20" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, idx) => (
                <div key={idx} className="card group hover:border-[var(--color-primary)]">
                  <div className="font-bold mb-2 text-white group-hover:text-[var(--color-primary)] transition-colors">
                    {faq.question}
                  </div>
                  <div className="text-gray-400 text-sm leading-relaxed">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl text-center border border-[var(--color-border)] max-w-4xl mx-auto" data-aos="zoom-in">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Ready to Build Your AI Agent?
            </h2>
            <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
              From concept to production — we design, build, and deploy intelligent agents that transform how your business operates.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block">
              Start Your AI Agent Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AIAgents;
