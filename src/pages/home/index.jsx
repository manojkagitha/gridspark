import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Existing sections/components
import Hero from "../../components/sections/Hero";
import Features from "../../components/sections/Features";
import ExpertsSection from "../../components/sections/ExpertsSection";
import Newsletter from "../../components/sections/Newsletter";
import Testimonials from "../../components/sections/Testimonials";
import {
  FaChartBar,
  FaUser,
  FaRobot,
  FaCloud,
  FaCogs,
  FaFolderOpen,
  FaBolt,
  FaBrain,
} from "react-icons/fa";

// Products data
const products = [
  {
    name: "TinyKola – Restaurant AI RMS",
    description:
      "Revolutionize your restaurant with TinyKola's AI-powered Restaurant Management Suite. Lightning-fast order processing, digital menu updates, secure billing, and automated GST filing.",
  },
  {
    name: "ChecKaro Home Inspection",
    description:
      "Hyderabad's most trusted home inspection platform. Certified professionals deploy German & US tech for comprehensive civil, electrical, plumbing, and interior audits.",
  },
];

// Dashboard data
const stats = [
  {
    label: "Active Projects",
    value: "8",
    icon: <FaChartBar className="text-[var(--color-primary)]" />,
  },
  {
    label: "Registered Users",
    value: "125",
    icon: <FaUser className="text-[var(--color-primary)]" />,
  },
  {
    label: "AI Models Deployed",
    value: "4",
    icon: <FaRobot className="text-[var(--color-primary)]" />,
  },
  {
    label: "Cloud Services Active",
    value: "3",
    icon: <FaCloud className="text-[var(--color-primary)]" />,
  },
];

const recentActivities = [
  { id: 1, text: "✔️ New project 'Tinykola ERP' started (Oct 2025)" },
  { id: 2, text: "✔️ Last invoice paid (Sep 2025)" },
  { id: 3, text: "✔️ 'Web Design Sprint' completed (Aug 2025)" },
];

// Quick links
const quickLinks = [
  {
    icon: <FaCogs className="text-4xl text-[var(--color-primary)]" />,
    title: "Services",
    desc: "Engineering, integration, and managed services.",
    link: "/solutions/services",
  },
  {
    icon: <FaFolderOpen className="text-4xl text-[var(--color-primary)]" />,
    title: "Portfolio",
    desc: "AI apps, data platforms, ML deployments.",
    link: "/solutions/portfolio",
  },
  {
    icon: <FaBolt className="text-4xl text-[var(--color-primary)]" />,
    title: "AI Demos",
    desc: "Live chatbots, computer vision, analytics.",
    link: "/solutions/ai-demos",
  },
  {
    icon: <FaBrain className="text-4xl text-[var(--color-primary)]" />,
    title: "AI Showcase",
    desc: "Cutting-edge AI research and use cases.",
    link: "/solutions/ai-showcase",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="relative min-h-screen text-[var(--color-text)]">

      {/* HERO SECTION */}
      <Hero />

      {/* PRODUCTS SECTION */}
      <section id="products" className="section-padding relative z-10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Our <span className="text-gradient-blue">Products</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Robust software products, SaaS platforms, and automation tools designed to streamline your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="card group hover:bg-white/5"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)] group-hover:text-white transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="btn-primary inline-flex items-center">
              Explore All Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK LINKS / SOLUTIONS */}
      <section className="section-padding relative z-10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
            Explore Our <span className="text-gradient-blue">Solutions</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map(({ icon, title, desc, link }, idx) => (
              <Link
                key={idx}
                to={link}
                className="card group flex flex-col items-center text-center hover:bg-blue-600/10 hover:border-blue-500/50"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="mb-4 p-4 bg-white/5 rounded-full group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                  {icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[var(--color-primary)] transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding relative z-10" data-aos="fade-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Your End-to-End <span className="text-gradient-blue">AI Partner</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
              From discovery to deployment, Gridspark drives successful AI
              initiatives — combining data expertise, engineering rigor, and
              cloud scalability.
            </p>
          </div>
          <Features />
        </div>
      </section>

      {/* Dashboard Snapshot Section */}
      <section className="section-padding relative z-10" data-aos="fade-right">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Gridspark <span className="text-gradient-blue">Insights</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Real-time metrics showcasing the heartbeat of our ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {stats.map(({ label, value, icon }) => (
              <div
                key={label}
                className="card flex flex-col items-center p-6 hover:bg-white/5"
                data-aos="zoom-in"
                data-aos-delay={50}
              >
                <div className="mb-3 text-3xl">{icon}</div>
                <div className="text-3xl font-extrabold text-white mb-1">
                  {value}
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>

          <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[var(--color-primary)] rounded-full opacity-20 blur-3xl animate-pulse-glow"></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Recent Activity</h3>
                <ul className="space-y-3">
                  {recentActivities.map(({ id, text }) => (
                    <li key={id} className="flex items-center text-gray-300">
                      <span className="mr-3 text-[var(--color-primary)]">●</span>
                      {text.replace("✔️ ", "")}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                <h4 className="text-xl font-bold mb-2 text-white">Ready to start?</h4>
                <p className="text-gray-400 mb-6">Let's discuss your next big project.</p>
                <Link
                  to="/contact"
                  className="btn-primary inline-block"
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gridspark AI */}
      <section className="section-padding relative z-10" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Why <span className="text-gradient-blue">Gridspark AI?</span>
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            We combine deep AI development and DevOps to build intelligent,
            reliable, and scalable applications that deliver real results.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="card group p-8 text-left hover:border-blue-500/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaBrain className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">LLM Expertise</h3>
                  <p className="text-gray-400 text-sm">Deep knowledge in Large Language Models and Generative AI</p>
                </div>
              </div>
            </div>

            <div className="card group p-8 text-left hover:border-emerald-500/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaRobot className="text-emerald-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">End-to-End Solutions</h3>
                  <p className="text-gray-400 text-sm">Complete AI implementation from concept to production scale</p>
                </div>
              </div>
            </div>

            <div className="card group p-8 text-left hover:border-purple-500/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaBolt className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">Rapid Deployment</h3>
                  <p className="text-gray-400 text-sm">Fast delivery with CI/CD pipelines and continuous improvement</p>
                </div>
              </div>
            </div>

            <div className="card group p-8 text-left hover:border-orange-500/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaChartBar className="text-orange-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">Measurable Results</h3>
                  <p className="text-gray-400 text-sm">Transparent process with clear ROI tracking and milestones</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <Newsletter />
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <ExpertsSection />

      {/* Testimonials Section */}
      <section className="section-padding relative z-10" data-aos="fade-up">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
