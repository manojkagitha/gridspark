import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Existing sections/components
import Hero from "../../components/sections/Hero";
import Features from "../../components/sections/Features";
import Newsletter from "../../components/sections/Newsletter";
import Testimonials from "../../components/sections/Testimonials";
import {
  FaChartBar,
  FaUser,
  FaRobot,
  FaCloud,
  FaCogs,
  FaFolderOpen,
  FaSuitcase,
  FaBolt,
  FaBrain,
  FaIndustry,
  FaHandshake,
  FaUserTie,
  FaBook,
} from "react-icons/fa";

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
  { id: 1, text: "✔️ New project “Tinykola ERP” started (Oct 2025)" },
  { id: 2, text: "✔️ Last invoice paid (Sep 2025)" },
  { id: 3, text: "✔️ “Web Design Sprint” completed (Aug 2025)" },
];

// Section card data for mobile/desktop grid
const sectionCards = [
  {
    icon: <FaCogs className="text-3xl text-[var(--color-primary)]" />,
    title: "Services",
    desc: "Comprehensive engineering, integration, and managed services tailored to accelerate digital transformation.",
    link: "/solutions/services",
  },
  {
    icon: <FaFolderOpen className="text-3xl text-[var(--color-primary)]" />,
    title: "Portfolio",
    desc: "See our proven track of projects—AI apps, data platforms, ML deployments, and cloud solutions.",
    link: "/solutions/portfolio",
  },
  {
    icon: <FaSuitcase className="text-3xl text-[var(--color-primary)]" />,
    title: "Case Studies",
    desc: "Real-world customer success, value delivered, and innovation achieved with Gridspark’s help.",
    link: "/solutions/case-studies",
  },
  {
    icon: <FaBolt className="text-3xl text-[var(--color-primary)]" />,
    title: "AI Demos",
    desc: "Explore live AI demos—see intelligent chatbots, computer vision, analytics, and more in action.",
    link: "/solutions/ai-demos",
  },
  {
    icon: <FaBrain className="text-3xl text-[var(--color-primary)]" />,
    title: "AI Showcase",
    desc: "Cutting-edge AI experiences, unique research and emerging use cases built by our team.",
    link: "/solutions/ai-showcase",
  },
  {
    icon: <FaBook className="text-3xl text-[var(--color-primary)]" />,
    title: "Products",
    desc: "Discover our range of innovative products, SaaS offerings, automation tools, and accelerators.",
    link: "/products",
  },
  {
    icon: <FaBook className="text-3xl text-[var(--color-primary)]" />,
    title: "Resources",
    desc: "Guides, e-books, technical blogs, knowledge base—empowering your technology journey.",
    link: "/resources",
  },
  {
    icon: <FaIndustry className="text-3xl text-[var(--color-primary)]" />,
    title: "Industries",
    desc: "Expertise across industries—finance, healthcare, retail, logistics, and more.",
    link: "/industries",
  },
  {
    icon: <FaUserTie className="text-3xl text-[var(--color-primary)]" />,
    title: "About Us",
    desc: "Learn about our mission, team, vision, and engineering culture.",
    link: "/about",
  },
  {
    icon: <FaUserTie className="text-3xl text-[var(--color-primary)]" />,
    title: "Expertise",
    desc: "Our core strengths—AI/ML, DevOps, Full-Stack Development, Cloud-native delivery.",
    link: "/expertise",
  },
  {
    icon: <FaHandshake className="text-3xl text-[var(--color-primary)]" />,
    title: "Partner With Us",
    desc: "Business collaboration, technology alliances, and growth together.",
    link: "/partner",
  },
  {
    icon: <FaUserTie className="text-3xl text-[var(--color-primary)]" />,
    title: "Careers",
    desc: "View open roles, our hiring process, and why you should work at Gridspark.",
    link: "/careers",
  },
];

const Home = () => {
  // Initialize AOS animations on mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      {/* Optional Overlay Pattern */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2Fsvg%22%3E%3Cg%20fill%3D%22%23cccccc%22%20fill-opacity%3D%220.04%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020zM40%2040V20L20%2040z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30 pointer-events-none"
      />

      <div className="relative z-10">
        <div data-aos="fade-down">
          <Hero />
        </div>

        {/* -- SECTION GRID/SHORTCUTS for all pages -- */}
        <section className="py-12 px-2 max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-9 text-[var(--color-primary)]">
            Explore Everything Gridspark Offers
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
            {sectionCards.map(({ icon, title, desc, link }, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-card)] shadow-lg rounded-xl border border-[var(--color-border)] p-6 flex flex-col h-full justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div>
                  <div className="mb-3">{icon}</div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <div className="opacity-75 mb-5 text-base">{desc}</div>
                </div>
                <div>
                  <Link
                    to={link}
                    className="inline-block mt-2 text-[var(--color-link)] hover:text-[var(--color-primary)] font-medium transition"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="py-14 bg-[var(--color-bg)] border-t border-[var(--color-border)]"
          data-aos="fade-right"
        >
          <div className="max-w-5xl mx-auto px-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-5">
              Services
            </h2>
            <p className="mb-6 text-lg opacity-85">
              Empower your business transformation with our end-to-end
              engineering, consulting, managed IT, and AI-driven services. We
              deliver everything from cloud migration to custom solution
              development, system integration, AI/ML deployment, 24/7 support,
              and more.
            </p>
            <ul className="list-disc px-7 mb-4">
              <li>Custom Application Development & Integration</li>
              <li>Cloud Strategy, Migration, & DevOps Automation</li>
              <li>AI/ML Engineering and Data Science as a Service</li>
              <li>System Architecture & API Enablement</li>
              <li>
                Platform-managed Services (SLA-driven support, monitoring,
                scaling)
              </li>
            </ul>
            <Link
              to="/solutions/services"
              className="btn-primary px-5 py-2 rounded font-semibold mt-4 inline-block"
            >
              View All Services
            </Link>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section
          id="portfolio"
          className="py-14 bg-[var(--color-card)] border-t border-[var(--color-border)]"
          data-aos="fade-left"
        >
          <div className="max-w-5xl mx-auto px-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-5">
              Portfolio
            </h2>
            <p className="mb-6 text-lg opacity-85">
              Explore a diverse portfolio—from enterprise AI chatbots and data
              lakes to retail ML pilots and cloud automation pipelines. Our
              work spans massive industries, rapid POCs, and long-term digital
              partnerships.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded shadow border bg-[var(--color-bg)] p-4">
                <b className="text-[var(--color-primary)]">
                  AI Conversational Platform
                </b>
                <div className="opacity-70 text-sm mb-2">BFSI, 2025</div>
                <p>
                  AI-powered multilingual chatbot for client onboarding and live
                  customer support.
                  <br />
                  <Link
                    to="/solutions/portfolio"
                    className="underline"
                    tabIndex={0}
                  >
                    Details
                  </Link>
                </p>
              </div>
              <div className="rounded shadow border bg-[var(--color-bg)] p-4">
                <b className="text-[var(--color-primary)]">
                  Retail Demand Forecast
                </b>
                <div className="opacity-70 text-sm mb-2">Retail, 2025</div>
                <p>
                  Machine learning-powered SKU forecasting and supply
                  optimization system.
                  <br />
                  <Link
                    to="/solutions/portfolio"
                    className="underline"
                    tabIndex={0}
                  >
                    Details
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section
          id="case-studies"
          className="py-14 bg-[var(--color-bg)] border-t border-[var(--color-border)]"
          data-aos="fade-right"
        >
          <div className="max-w-5xl mx-auto px-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-5">
              Case Studies
            </h2>
            <p className="mb-6 text-lg opacity-85">
              Discover how Gridspark delivers business value—from cost savings
              and risk reduction to speed-to-market—helping our partners win in
              their markets.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded shadow border bg-[var(--color-card)] p-5">
                <b className="text-[var(--color-primary)]">
                  Financial Services: AI KYC Compliance
                </b>
                <div className="opacity-70 text-sm mb-2">
                  Improvement in regulatory compliance time—54%
                </div>
                <p>
                  Automated identity verification with deep learning, OCR, and
                  workflow optimization.
                  <br />
                  <Link
                    to="/solutions/case-studies"
                    className="underline"
                    tabIndex={0}
                  >
                    Full Case
                  </Link>
                </p>
              </div>
              <div className="rounded shadow border bg-[var(--color-card)] p-5">
                <b className="text-[var(--color-primary)]">
                  Healthcare: Smart Document Processing
                </b>
                <div className="opacity-70 text-sm mb-2">
                  Reduced onboarding time by 72%
                </div>
                <p>
                  Deployed NLP pipelines for insurance providers to extract and
                  validate claim data.
                  <br />
                  <Link
                    to="/solutions/case-studies"
                    className="underline"
                    tabIndex={0}
                  >
                    Full Case
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI DEMOS */}
        <section
          id="ai-demos"
          className="py-14 bg-[var(--color-card)] border-t border-[var(--color-border)]"
          data-aos="fade-left"
        >
          <div className="max-w-5xl mx-auto px-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-5">
              AI Demos
            </h2>
            <p className="mb-6 text-lg opacity-85">
              See AI in action! Try our latest showcase demos: GPT chatbots,
              document analyzers, AI summarizers, and more—all running live in
              your browser.
            </p>
            <div className="grid md:grid-cols-2 gap-7">
              <div className="p-4 rounded shadow border bg-[var(--color-bg)] hover:scale-105 transform transition-all duration-300">
                <b>Intelligent Chatbot</b>
                <p>
                  Conversational assistant demo trained on proprietary company
                  data.{" "}
                  <Link to="/solutions/ai-demos" className="underline" tabIndex={0}>
                    Try now
                  </Link>
                </p>
              </div>
              <div className="p-4 rounded shadow border bg-[var(--color-bg)] hover:scale-105 transform transition-all duration-300">
                <b>Invoice Processor</b>
                <p>
                  Upload invoices—NLP pipeline extracts vendor, amount, and due
                  dates.{" "}
                  <Link to="/solutions/ai-demos" className="underline" tabIndex={0}>
                    Try now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI SHOWCASE */}
        <section
          id="ai-showcase"
          className="py-14 bg-[var(--color-bg)] border-t border-[var(--color-border)]"
          data-aos="fade-right"
        >
          <div className="max-w-5xl mx-auto px-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-5">
              AI Showcase
            </h2>
            <p className="mb-8 text-lg opacity-85">
              Explore our most innovative AI/ML work—prototypes, proof-of-concepts,
              and next-gen research.
            </p>
            <div className="grid md:grid-cols-2 gap-7">
              <div className="p-5 rounded-xl border shadow bg-[var(--color-card)] hover:shadow-lg transition-shadow duration-300">
                <b>Private LLM Deployment</b>
                <div className="text-base opacity-75">
                  On-prem LLM for secure enterprise use.
                </div>
                <Link
                  to="/solutions/ai-showcase"
                  className="btn-primary mt-3 px-4 py-2 inline-block rounded font-semibold"
                >
                  See Showcase
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section
          id="products"
          className="py-14 bg-[var(--color-card)] border-t border-[var(--color-border)]"
          data-aos="fade-left"
        >
          <div className="max-w-5xl mx-auto px-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-5">
              Products
            </h2>
            <p className="mb-6 text-lg opacity-85">
              Discover our robust portfolio of ready-to-use software products,
              SaaS platforms, and automation tools. Streamline your business with
              Gridspark's product lineup.
            </p>
            <div className="flex flex-wrap gap-5">
              <div className="bg-[var(--color-bg)] rounded shadow p-5 border w-full sm:w-[45%] md:w-[30%] min-w-[180px] hover:scale-[1.03] transform transition duration-300">
                <b>Huddle CRM</b>
                <div className="opacity-75 text-sm mb-1">
                  AI-powered lightweight CRM for fast-growing teams.
                </div>
              </div>
              <div className="bg-[var(--color-bg)] rounded shadow p-5 border w-full sm:w-[45%] md:w-[30%] min-w-[180px] hover:scale-[1.03] transform transition duration-300">
                <b>Vision AI</b>
                <div className="opacity-75 text-sm mb-1">
                  Computer vision pipeline for document/image analytics.
                </div>
              </div>
            </div>
            <Link
              to="/products"
              className="btn-primary mt-5 px-5 py-2 rounded font-semibold inline-block"
            >
              View All Products
            </Link>
          </div>
        </section>

        {/* RESOURCES */}
        <section
          id="resources"
          className="py-14 bg-[var(--color-bg)] border-t border-[var(--color-border)]"
          data-aos="fade-right"
        >
          <div className="max-w-5xl mx-auto px-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-5">
              Resources
            </h2>
            <p className="mb-6 text-lg opacity-85">
              Level up with our guides, whitepapers, technical blogs, tutorials,
              and research content.
            </p>
            <div className="grid md:grid-cols-2 gap-7">
              <div className="p-5 rounded border shadow bg-[var(--color-card)]">
                <b>Guide: Deploy Your First AI Model</b>
                <div className="opacity-70 mb-1">
                  Step-by-step instructions for deploying ML models using
                  Gridspark tools.
                </div>
                <Link to="/resources" className="underline" tabIndex={0}>
                  See all resources
                </Link>
              </div>
              <div className="p-5 rounded border shadow bg-[var(--color-card)]">
                <b>Blog: Scaling Cloud Infrastructure</b>
                <div className="opacity-70 mb-1">
                  Lessons learned and best practices from real-world migrations.
                </div>
                <Link to="/resources" className="underline" tabIndex={0}>
                  See all resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section
          id="industries"
          className="py-14 bg-[var(--color-card)] border-t border-[var(--color-border)]"
          data-aos="fade-left"
        >
          <div className="max-w-5xl mx-auto px-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-5">
              Industries
            </h2>
            <p className="mb-6 text-lg opacity-85">
              We bring deep industry expertise to every engagement—from FinTech
              and Healthcare to Retail, Telecom, and Mobility.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2">
              <li>Finance & Banking</li>
              <li>Healthcare</li>
              <li>Retail & Commerce</li>
              <li>Supply Chain & Logistics</li>
              <li>Insurance</li>
              <li>Mobility & Automotive</li>
            </ul>
            <Link
              to="/industries"
              className="btn-primary mt-5 px-5 py-2 rounded font-semibold inline-block"
            >
              See All Industries
            </Link>
          </div>
        </section>

        {/* ABOUT US */}
        <section
          id="about"
          className="py-14 bg-[var(--color-bg)] border-t border-[var(--color-border)]"
          data-aos="fade-right"
        >
          <div className="max-w-5xl mx-auto px-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-3">
              About Us
            </h2>
            <p className="mb-6 text-lg opacity-85">
              Gridspark delivers world-class engineering powered by passion,
              purpose, and an obsession with client success. Our team blends
              cross-disciplinary expertise, advanced technology stacks, and a
              relentless work ethic to solve big problems.
            </p>
            <Link
              to="/about"
              className="btn-primary mt-3 px-5 py-2 rounded font-semibold inline-block"
            >
              Meet the Team
            </Link>
          </div>
        </section>

        {/* EXPERTISE */}
        <section
          id="expertise"
          className="py-14 bg-[var(--color-card)] border-t border-[var(--color-border)]"
          data-aos="fade-left"
        >
          <div className="max-w-5xl mx-auto px-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-5">
              Expertise
            </h2>
            <p className="mb-6 text-lg opacity-85">
              Our core strengths span software engineering, AI/ML, cloud-native,
              automation, integration, and product delivery.
            </p>
            <ul className="flex flex-wrap gap-4 mb-5 text-base font-medium px-2">
              <li>AI/ML & Data Science</li>
              <li>Web & Mobile Apps</li>
              <li>DevOps & Automation</li>
              <li>API Engineering</li>
              <li>Cloud Computing</li>
              <li>Security & Compliance</li>
            </ul>
            <Link
              to="/expertise"
              className="btn-primary mt-2 px-5 py-2 rounded font-semibold inline-block"
            >
              Our Expertise
            </Link>
          </div>
        </section>

        {/* PARTNER WITH US */}
        <section
          id="partner"
          className="py-14 bg-[var(--color-bg)] border-t border-[var(--color-border)]"
          data-aos="fade-up"
        >
          <div className="max-w-5xl mx-auto px-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Partner With Us
            </h2>
            <p className="mb-7 text-lg opacity-85">
              Join hands with Gridspark to build, innovate, and grow faster. We
              form alliances with top technology companies, service providers,
              and domain leaders worldwide.
            </p>
            <Link
              to="/partner"
              className="btn-primary mt-3 px-5 py-2 rounded font-semibold inline-block"
            >
              Become a Partner
            </Link>
          </div>
        </section>

        {/* CAREERS */}
        <section
          id="careers"
          className="py-14 bg-[var(--color-card)] border-t border-[var(--color-border)]"
          data-aos="fade-up"
        >
          <div className="max-w-4xl mx-auto px-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-3">
              Careers at Gridspark
            </h2>
            <p className="mb-6 text-lg opacity-85">
              Want to make an impact? We're always hiring engineers, designers,
              and innovators obsessed with excellence!
            </p>
            <Link
              to="/careers"
              className="btn-primary mt-3 px-5 py-2 rounded font-semibold inline-block"
            >
              View Roles
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="py-20 bg-[var(--color-card)] text-[var(--color-text)] border-t border-[var(--color-border)] transition-colors duration-300"
          data-aos="fade-left"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-14 text-center">
              <h2 className="text-5xl font-extrabold mb-4 text-[var(--color-primary)]">
                Your End-to-End AI Partner
              </h2>
              <p className="max-w-3xl mx-auto text-lg md:text-xl mb-2 opacity-85">
                From discovery to deployment, Gridspark drives successful AI
                initiatives — combining data expertise, engineering rigor, and
                cloud scalability.
              </p>
            </div>
            <Features />
          </div>
        </section>

        {/* Dashboard Snapshot Section */}
        <section
          className="py-20 bg-[var(--color-bg)] text-[var(--color-text)] border-t border-b border-[var(--color-border)] transition-colors duration-300"
          data-aos="fade-right"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-3">
                Gridspark Insights Dashboard
              </h2>
              <p className="text-lg opacity-85 max-w-2xl mx-auto">
                A quick overview of ongoing projects, platform activity, and
                deployment metrics — showcasing the heartbeat of Gridspark's
                ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {stats.map(({ label, value, icon }) => (
                <div
                  key={label}
                  className="flex items-center p-6 shadow-lg rounded-xl border bg-[var(--color-card)] text-[var(--color-text)] transition transform hover:scale-105 duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={50}
                >
                  <div className="mr-5 text-3xl">{icon}</div>
                  <div>
                    <div className="text-3xl font-bold text-[var(--color-text)]">
                      {value}
                    </div>
                    <div className="opacity-70">{label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 shadow-lg rounded-xl border bg-[var(--color-card)] text-[var(--color-text)] transition">
              <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">
                Recent Activity
              </h3>
              <ul className="list-disc list-inside opacity-90">
                {recentActivities.map(({ id, text }) => (
                  <li key={id} className="mb-2">
                    {text}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-right">
                <Link
                  to="/contact"
                  className="inline-block px-6 py-2 btn-primary text-base rounded-md font-semibold mt-2"
                >
                  Discuss Your Project →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Gridspark AI */}
        <section
          className="pt-16 pb-4 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300"
          data-aos="fade-up"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">
              Why Gridspark AI?
            </h2>
            <p className="font-medium mb-6 text-lg opacity-85">
              We combine deep AI development and DevOps to build intelligent,
              reliable, and scalable applications that deliver real results.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-lg font-semibold mb-10">
              <div className="flex items-center justify-center">
                <span className="text-[var(--color-primary)] mr-2 text-2xl">✓</span>
                <span>Expertise in Large Language Models (LLMs)</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-[var(--color-primary)] mr-2 text-2xl">✓</span>
                <span>End-to-end AI project implementation</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-[var(--color-primary)] mr-2 text-2xl">✓</span>
                <span>Rapid deployment and continuous improvement</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-[var(--color-primary)] mr-2 text-2xl">✓</span>
                <span>Transparent process with measurable ROI</span>
              </div>
            </div>
            <div className="mt-2 mx-auto max-w-xl">
              <Newsletter />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className="py-12 bg-[var(--color-card)] text-[var(--color-text)] border-t border-[var(--color-border)] transition"
          data-aos="fade-up"
        >
          <Testimonials />
        </section>
      </div>
    </div>
  );
};

export default Home;
