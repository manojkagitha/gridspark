import React from "react";

const teamMembers = [
  {
    name: "Ravi Kumar",
    role: "Founder & CTO",
    bio: "Cloud architect and DevOps lead with over 8 years of experience. Specializes in AI, Azure, and scalable infrastructure. Passionate about innovation and building diverse teams.",
    image: "/assets/ravi.jpg", // update path to image
    linkedin: "https://linkedin.com/in/ravikumar",
  },
  {
    name: "Ayesha Singh",
    role: "AI Solutions Lead",
    bio: "Expert in NLP, deep learning, and enterprise ML deployments. Loves bringing new AI solutions to real businesses.",
    image: "/assets/ayesha.jpg",
    linkedin: "https://linkedin.com/in/ayeshasingh",
  },
  {
    name: "Michael Lee",
    role: "Full Stack Engineer",
    bio: "Specialist in React, Node, Python. Focuses on user experience, performance, and secure web applications.",
    image: "/assets/michael.jpg",
    linkedin: "https://linkedin.com/in/michaellee",
  },
  {
    name: "Sarah Chen",
    role: "Customer Success",
    bio: "Drives client engagement and product adoption. Champions support, satisfaction, and feedback-driven development.",
    image: "/assets/sarah.jpg",
    linkedin: "https://linkedin.com/in/sarahchen",
  },
];

const Team = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-accent mb-6">Meet the Team</h1>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map((member, idx) => (
        <div key={idx} className="bg-dark border border-gray-700 rounded-lg p-4 flex flex-col items-center text-center shadow">
          <img
            src={member.image}
            alt={member.name}
            className="h-24 w-24 rounded-full mb-3 object-cover border-2 border-accent"
            onError={e => {e.target.src="/assets/profile-default.png"}}
          />
          <div className="font-medium text-lg text-secondary mb-2">{member.name}</div>
          <div className="text-sm font-semibold text-gray-400 mb-2">{member.role}</div>
          <div className="text-xs text-gray-200 mb-3">{member.bio}</div>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline text-xs"
          >
            LinkedIn
          </a>
        </div>
      ))}
    </div>
    <p className="mt-10 text-sm text-gray-400 text-center">
      Want to join Gridspark? <a href="/careers" className="text-accent underline">See Careers</a>
    </p>
  </div>
);

export default Team;
