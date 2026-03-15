import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const openings = [
  {
    id: 1,
    title: "Cloud DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Cloud & DevOps",
    short_desc:
      "Design and implement scalable Azure/AWS infrastructure, build automation pipelines, and support global clients.",
    full_desc: [
      "As a Cloud DevOps Engineer, you will be the backbone of our infrastructure strategy. You will design, implement, and maintain scalable cloud environments on Azure and AWS.",
      "You will work closely with development teams to automate CI/CD pipelines, ensure high availability, and optimize costs.",
      "Your role involves troubleshooting complex production issues and implementing security best practices across all cloud assets."
    ],
    requirements: [
      "5+ years of experience with AWS or Azure cloud infrastructure.",
      "Strong proficiency in Terraform, Ansible, or CloudFormation.",
      "Experience building CI/CD pipelines with Jenkins, GitHub Actions, or Azure DevOps.",
      "Solid understanding of containerization (Docker, Kubernetes).",
      "Scripting skills in Python, Bash, or Go."
    ]
  },
  {
    id: 2,
    title: "AI/ML Developer",
    type: "Full-time",
    location: "Remote/Hybrid",
    department: "AI & Data Science",
    short_desc:
      "Develop and deploy advanced AI/ML models, work with NLP and cloud APIs, and deliver automation solutions.",
    full_desc: [
      "Join our AI innovation team to build cutting-edge machine learning models. You will work on Natural Language Processing (NLP) tasks, including text summarization, sentiment analysis, and chatbot development.",
      "You will integrate Large Language Models (LLMs) like GPT-4 and Claude into enterprise applications.",
      "Collaborate with data engineers to build robust training and inference pipelines."
    ],
    requirements: [
      "3+ years of experience in Python and ML frameworks (PyTorch, TensorFlow).",
      "Experience with NLP libraries (HuggingFace, spaCy, NLTK).",
      "Familiarity with vector databases (Pinecone, Milvus) and RAG architectures.",
      "Understanding of API development (FastAPI, Flask) for model serving.",
      "Strong problem-solving skills and mathematical foundation."
    ]
  },
  {
    id: 3,
    title: "Frontend React Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Frontend & Design",
    short_desc:
      "Craft beautiful, performant UIs using React, Tailwind, and modern web tooling.",
    full_desc: [
      "We are looking for a creative Frontend Engineer to build responsive and interactive web applications. You will translate Figma designs into pixel-perfect React components.",
      "You will optimize applications for maximum speed and scalability.",
      "Collaborate with backend developers to integrate RESTful APIs and GraphQL endpoints."
    ],
    requirements: [
      "4+ years of experience with React.js and modern JavaScript (ES6+).",
      "Deep knowledge of Tailwind CSS and responsive design principles.",
      "Experience with state management (Redux, Zustand, or Context API).",
      "Familiarity with Next.js is a plus.",
      "Passion for UI/UX and attention to detail."
    ]
  },
  {
    id: 4,
    title: "Backend Node.js Engineer",
    type: "Full-time",
    location: "Remote/Hybrid",
    department: "Backend & Infrastructure",
    short_desc:
      "Build high-performance backend systems, APIs, and serverless functions using Node.js.",
    full_desc: [
      "Design and develop robust backend microservices using Node.js and Express/NestJS.",
      "Work with SQL and NoSQL databases (PostgreSQL, MongoDB) to design efficient data schemas.",
      "Implement secure authentication and authorization protocols (OAuth, JWT).",
      "Optimize server performance and handle high-concurrency traffic."
    ],
    requirements: [
      "4+ years of backend development experience with Node.js.",
      "Strong database design skills (SQL and NoSQL).",
      "Experience with serverless architecture (AWS Lambda, Azure Functions).",
      "Knowledge of caching strategies (Redis) and message queues (RabbitMQ, Kafka).",
      "Unit testing and TDD experience."
    ]
  },
  {
    id: 5,
    title: "Enterprise Sales Director",
    type: "Full-time",
    location: "Remote",
    department: "Sales & Marketing",
    short_desc:
      "Lead our enterprise sales strategy, closing high-value deals in AI and Cloud.",
    full_desc: [
      "We are seeking a seasoned Enterprise Sales Director to drive revenue growth. You will identify, cultivate, and close new enterprise accounts across key verticals.",
      "You will build relationships with C-level executives, understanding their strategic goals and positioning Gridspark's AI solutions as the catalyst for their success.",
      "This role requires a strategic thinker who can manage complex sales cycles and lead a high-performing sales team."
    ],
    requirements: [
      "7+ years of experience in B2B SaaS or Enterprise Software sales.",
      "Proven track record of exceeding quotas ($1M+ annual targets).",
      "Strong network of contacts in Finance, Healthcare, or Retail sectors.",
      "Exceptional negotiation and presentation skills.",
      "Experience with CRM tools (Salesforce, HubSpot) and sales forecasting."
    ]
  },
  {
    id: 6,
    title: "SaaS Sales Executive",
    type: "Full-time",
    location: "Remote",
    department: "Sales & Marketing",
    short_desc:
      "Drive adoption of our TinyKola and ChecKaro platforms in target markets.",
    full_desc: [
      "As a SaaS Sales Executive, you will focus on selling our proprietary products: TinyKola (Restaurant AI) and ChecKaro (Home Inspection).",
      "You will manage the full sales lifecycle from prospecting and demos to contract negotiation and closing.",
      "Work closely with the marketing team to refine lead generation strategies and provide feedback on product-market fit."
    ],
    requirements: [
      "3-5 years of experience in B2B SaaS sales.",
      "Hunter mentality with a passion for closing deals.",
      "Ability to explain complex technical products to non-technical stakeholders.",
      "Self-motivated and disciplined in a remote work environment.",
      "Experience with high-velocity sales models."
    ]
  },
  {
    id: 7,
    title: "Business Development Representative",
    type: "Full-time",
    location: "Remote",
    department: "Sales & Marketing",
    short_desc:
      "Fuel our sales pipeline by generating high-quality leads and booking meetings.",
    full_desc: [
      "The BDR is the engine of our sales growth. You will be the first point of contact for potential clients, generating interest through cold calling, email campaigns, and social outreach.",
      "You will qualify inbound leads and schedule meetings for the Account Executives.",
      "This is a great opportunity to start your career in tech sales with a fast-growing AI company."
    ],
    requirements: [
      "1-2 years of experience in sales, marketing, or customer service.",
      "Excellent verbal and written communication skills.",
      "High energy, resilience, and a hunger to learn.",
      "Familiarity with LinkedIn Sales Navigator and cold outreach tools.",
      "Goal-oriented mindset."
    ]
  },
  {
    id: 8,
    title: "AI Solutions Architect",
    type: "Consultant",
    location: "Remote",
    department: "Research & Innovation",
    short_desc:
      "Shape AI strategies and architectures across projects, designing scalable systems.",
    full_desc: [
      "As an AI Solutions Architect, you will bridge the gap between business requirements and technical implementation.",
      "You will design end-to-end AI architectures, selecting the right models, infrastructure, and integration patterns.",
      "Provide technical leadership to development teams and ensure solutions meet industry standards for security and scalability."
    ],
    requirements: [
      "8+ years of experience in software architecture, with 3+ years in AI/ML.",
      "Deep understanding of cloud platforms and MLOps practices.",
      "Experience designing RAG systems and fine-tuning LLMs.",
      "Strong consulting skills and ability to influence stakeholders.",
      "Master's degree in Computer Science or related field preferred."
    ]
  }
];

const departments = [
  "AI & Data Science",
  "Cloud & DevOps",
  "Frontend & Design",
  "Backend & Infrastructure",
  "Sales & Marketing",
  "Product & Engineering",
  "Customer Success",
  "Corporate Ops",
  "HR & Talent",
];

const values = [
  {
    title: "Absolute Ownership",
    description:
      "We take full responsibility for outcomes and act as reliable partners for our clients and team.",
  },
  {
    title: "Teamwork",
    description:
      "Every win is collective. We move as a unit, bringing out the best in one another.",
  },
  {
    title: "Integrity",
    description:
      "We work to achieve, not just deliver — transparent, honest, and consistent in every commitment.",
  },
  {
    title: "Continuous Learning",
    description:
      "We stay curious, stay humble, and evolve constantly through shared knowledge and growth.",
  },
];

const perks = [
  "Health & Family Insurance Plans",
  "Retirement Benefits (PF/NPS)",
  "Remote Work Flexibility",
  "Education & Certification Sponsorship",
  "Equal Opportunity & Inclusive Policy",
  "Learning Resources & Upskilling Support",
];

const testimonials = [
  {
    name: "Ananya Patel",
    role: "AI Developer",
    quote:
      "Gridspark has given me the perfect balance between creativity and structure. Every idea is heard and respected.",
  },
  {
    name: "Rahul Sharma",
    role: "Cloud Architect",
    quote:
      "This team builds fast and thinks even faster! The innovation culture here has completely changed the way I work.",
  },
  {
    name: "Sofia Ali",
    role: "Project Manager",
    quote:
      "There’s a genuine sense of collaboration here. The leadership team guides but lets you make bold decisions.",
  },
];

const Careers = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    about: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!formData.position) {
      setError("Please select a position.");
      return;
    }
    setLoading(true);
    try {
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('position', formData.position);
      formPayload.append('about', formData.about);

      const response = await fetch('https://formspree.io/f/mwpwzlng', {
        method: 'POST',
        body: formPayload,
        headers: { 'Accept': 'application/json' }
      });

      const data = await response.json();
      if (data.ok) {
        setSubmitted(true);
      } else {
        setError('Failed to submit application.');
      }
    } catch (err) {
      setError(err.message || 'Unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const scrollToApply = (jobTitle) => {
    setFormData({ ...formData, position: jobTitle });
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Join the <span className="text-gradient-blue">Gridspark Revolution</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-400 leading-relaxed">
            Build AI. Shape the future. Grow with a diverse team of innovators making technology simpler, smarter, and more human.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-20" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="card group"
              >
                <h3 className="font-bold text-lg mb-3 text-[var(--color-primary)] group-hover:text-white transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mb-20 text-center" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Where You Can Make an Impact
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {departments.map((dept) => (
              <span
                key={dept}
                className="
                  px-5 py-2 rounded-full text-sm font-medium
                  glass-panel text-gray-300 hover:text-white
                  hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 
                  transition-all cursor-default
                "
              >
                {dept}
              </span>
            ))}
          </div>
        </div>

        {/* Openings List */}
        <div className="mb-20" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-4xl font-bold mb-10 text-center text-white">
            Current Openings
          </h2>
          <div className="space-y-6">
            {openings.map((job) => (
              <div
                key={job.id}
                className={`
                  glass-panel rounded-xl overflow-hidden transition-all duration-300
                  ${expandedJob === job.id ? 'shadow-xl ring-1 ring-[var(--color-primary)] bg-[var(--color-card)]' : 'hover:bg-white/5'}
                `}
              >
                <div
                  className="p-6 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                  onClick={() => toggleJob(job.id)}
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <FaBriefcase className="text-[var(--color-primary)]" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[var(--color-primary)]" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-[var(--color-primary)]" /> {job.department}
                      </span>
                    </div>
                    <p className="text-gray-400">{job.short_desc}</p>
                  </div>
                  <button
                    className="text-[var(--color-primary)] p-2 rounded-full hover:bg-[var(--color-primary)]/10 transition-colors"
                  >
                    {expandedJob === job.id ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                  </button>
                </div>

                {/* Expanded Content */}
                <div
                  className={`
                    px-6 pb-6 pt-0 transition-all duration-500 ease-in-out overflow-hidden
                    ${expandedJob === job.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <hr className="border-[var(--color-border)] mb-6" />
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-white">Role Overview</h4>
                      <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                        {job.full_desc.map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-white">Requirements</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-400 text-sm">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToApply(job.title);
                      }}
                      className="btn-primary px-8 py-3 text-sm font-bold"
                    >
                      Apply for this Role
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Life at Gridspark
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="card relative"
              >
                <div className="text-4xl text-[var(--color-primary)] opacity-20 absolute top-4 left-4">“</div>
                <p className="italic text-gray-400 mb-6 relative z-10 pt-4 text-center">
                  {t.quote}
                </p>
                <div className="font-bold text-center text-white">
                  — {t.name}
                </div>
                <div className="text-xs text-center text-gray-500 uppercase tracking-wider">
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perks */}
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Benefits & Perks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="
                  p-4 rounded-lg border border-[var(--color-border)]
                  bg-[var(--color-card)] shadow-sm flex items-center gap-3
                  hover:border-[var(--color-primary)]/50 transition-colors
                "
              >
                <div className="h-2 w-2 rounded-full bg-[var(--color-primary)]"></div>
                <span className="text-gray-300 font-medium">{perk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="apply-form" className="max-w-3xl mx-auto" data-aos="fade-up">
          <div className="glass-panel p-8 md:p-10 rounded-2xl shadow-2xl border border-[var(--color-border)]">
            <h2 className="text-3xl font-bold mb-2 text-center text-white">
              Ready to Apply?
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Send us your details and we'll get back to you shortly.
            </p>

            {!submitted ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-300">Position</label>
                  <select
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  >
                    <option value="" className="bg-gray-900">Select a Role</option>
                    {openings.map((job) => (
                      <option key={job.id} value={job.title} className="bg-gray-900">
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-300">Cover Letter / About You</label>
                  <textarea
                    name="about"
                    rows={5}
                    required
                    value={formData.about}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    placeholder="Tell us why you're a great fit..."
                  />
                </div>

                {error && <div className="p-3 rounded bg-red-900/50 border border-red-800 text-red-200 text-sm">{error}</div>}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                >
                  {loading ? "Submitting Application..." : "Submit Application"}
                </button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="h-16 w-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                <p className="text-gray-400">
                  Thank you for your interest in Gridspark. Our team will review your application and get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[var(--color-primary)] font-semibold hover:underline"
                >
                  Submit another application
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
